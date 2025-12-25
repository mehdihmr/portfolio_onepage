import { useState } from "react";
import Modal from "../modal/modal";
import ContactForm from "../contact/contactForm";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 backdrop-blur-md border-b border-border h-14 select-none z-40 font-primary">
        <div className="mx-auto px-12 flex flex-row items-center justify-between h-full w-full absolute">
          <h1 className="text-xl font-bold text-primary">Mehdi HAMROUNI</h1>
          <button type="button" className="text-background cursor-pointer bg-accent py-1 px-4 hover:bg-hover-accent rounded-xl flex items-center gap-x-2" onClick={() => setIsModalOpen(true)}>
            <span className="material-symbols-outlined text-background">chat</span>
            <span className="font-semibold">Let's Talk!</span>
          </button>
        </div>
        <div className="h-full w-1/2 mx-auto flex flex-row items-center justify-center gap-x-6">
          <a href="#home" type="button" className="cursor-pointer text-primary hover:text-accent z-50">
            HOME
          </a>
          <a href="#projects" type="button" className="cursor-pointer text-primary hover:text-accent z-50">
            PROJECTS
          </a>
          <button type="button" className="cursor-pointer text-primary hover:text-accent z-50">
            SKILLS
          </button>
          <button type="button" className="cursor-pointer text-primary hover:text-accent z-50">
            ABOUT
          </button>
          <button type="button" className="cursor-pointer text-primary hover:text-accent z-50">
            CONTACT
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Let's Talk!">
        <ContactForm />
      </Modal>
    </>
  );
}
