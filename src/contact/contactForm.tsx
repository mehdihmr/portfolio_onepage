import { useState } from "react";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center">
        <span className={`material-symbols-outlined p-2 bg-background border-b border-accent text-accent`}>person</span>
        <input type="text" className={`bg-background p-2 w-full outline-none border-b border-accent text-primary`} placeholder="Name" name="name" value={contactForm.name} onChange={handleChange} />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b border-accent text-accent`}>mail</span>
        <input required type="email" className={`bg-background p-2 w-full outline-none border-b border-accent text-primary`} placeholder="E-Mail" name="email" value={contactForm.email} onChange={handleChange} />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b border-accent text-accent`}>phone</span>
        <input type="number" className={`bg-background p-2 w-full outline-none border-b border-accent text-primary`} placeholder="Phone number" name="phone" value={contactForm.phone} onChange={handleChange} />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b border-accent text-accent`}>subject</span>
        <input type="text" className={`bg-background p-2 w-full outline-none border-b border-accent text-primary`} placeholder="Subject" name="subject" value={contactForm.subject} onChange={handleChange} />
      </div>
      <div className="flex flex-row items-center">
        <textarea required className={`bg-background p-2 w-full outline-none border-b border-accent text-primary resize-none`} rows={3} placeholder="Your message..." name="message" value={contactForm.message} onChange={handleChange} />
      </div>
      <button type="submit" className="bg-accent hover:bg-hover-accent rounded-xl py-2 text-background cursor-pointer font-semibold">
        Send
      </button>
    </form>
  );
}
