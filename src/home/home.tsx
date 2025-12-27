import profilePic from "../assets/profile_pic.png";
import Modal from "../modal/modal";
import ContactForm from "../contact/contactForm";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <section id="home" className="mt-14 font-primary flex flex-row items-center justify-center container mx-auto select-none">
      <div className="flex flex-col justify-center flex-2 gap-y-8 my-8 lg:mx-auto mx-2">
        <h1 className="text-5xl lg:text-7xl font-extrabold">MEHDI HAMROUNI</h1>
        <div>
          <p className="text-secondary text-xl">Software Engineer — Backend-focused engineer building performant systems and applied AI solutions.</p>
        </div>
        <div className="flex flex-row gap-x-4">
          <a href="#projects" className="bg-accent py-3 w-44 text-center rounded-xl hover:bg-hover-accent cursor-pointer text-background font-semibold flex items-center justify-center gap-x-2">
            <span className="material-symbols-outlined">code</span>
            <span>View Projects</span>
          </a>
          <button className="text-accent font-semibold border-2 border-accent w-44 rounded-xl cursor-pointer bg-background hover:bg-accent hover:text-background flex items-center justify-center gap-x-2" onClick={() => setIsModalOpen(true)}>
            <span>Hire me</span>
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img src={profilePic} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hire me!">
        <ContactForm />
      </Modal>
    </section>
  );
}
