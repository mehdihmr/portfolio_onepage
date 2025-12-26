import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import ContactForm from "../contact/contactForm";
import logo from "../assets/logo.png";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    let observer: IntersectionObserver;

    const initObserver = () => {
      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );

      sections.forEach((s) => observer.observe(s));
    };

    requestAnimationFrame(initObserver);

    return () => observer?.disconnect();
  }, []);

  return (
    <header>
      <div className="fixed top-0 left-0 right-0 backdrop-blur-md border-b border-border h-14 select-none z-40 font-primary">
        <div className="mx-auto lg:px-12 flex flex-row items-center justify-between h-full w-full absolute">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <img src={logo} className="h-6 w-16 object-cover" />
            <h1 className="text-xl font-bold text-primary hidden lg:block">Mehdi HAMROUNI</h1>
          </div>

          <button type="button" className="text-background cursor-pointer bg-accent py-2 px-4 hover:bg-hover-accent rounded-xl flex items-center gap-x-2" onClick={() => setIsModalOpen(true)}>
            <span className="material-symbols-outlined text-background">chat</span>
            <span className="font-semibold">Let's Talk!</span>
          </button>
        </div>
        <div className="h-full w-1/2 mx-auto hidden lg:flex flex-row items-center justify-center gap-x-6">
          <a href="#home" type="button" className={`cursor-pointer z-50 ${activeSection === "home" ? "text-accent" : " text-primary hover:text-accent"}`} onClick={() => setActiveSection("home")}>
            HOME
          </a>
          <a href="#projects" type="button" className={`cursor-pointer z-50 ${activeSection === "projects" ? "text-accent" : " text-primary hover:text-accent"}`} onClick={() => setActiveSection("projects")}>
            PROJECTS
          </a>
          <a href="#skills" type="button" className={`cursor-pointer z-50 ${activeSection === "skills" ? "text-accent" : " text-primary hover:text-accent"}`} onClick={() => setActiveSection("skills")}>
            SKILLS
          </a>
          <a href="#about" type="button" className={`cursor-pointer z-50 ${activeSection === "about" ? "text-accent" : " text-primary hover:text-accent"}`} onClick={() => setActiveSection("about")}>
            ABOUT
          </a>
          <a href="#contact" type="button" className={`cursor-pointer z-50 ${activeSection === "contact" ? "text-accent" : " text-primary hover:text-accent"}`} onClick={() => setActiveSection("contact")}>
            CONTACT
          </a>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Let's Talk!">
        <ContactForm />
      </Modal>
    </header>
  );
}
