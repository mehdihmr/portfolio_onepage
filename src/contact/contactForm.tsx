import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isName, setIsName] = useState<boolean>(false);
  const [isMail, setIsMail] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isSubject, setIsSubject] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(import.meta.env.VITE_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID as string,
        import.meta.env.VITE_TEMPLATE_ID as string,
        {
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY as string }
      );
    } catch (err) {
      console.error(err);
    }
    try {
      console.log(import.meta.env.VITE_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID as string,
        import.meta.env.VITE_TEMPLATE_ID_NOTIFICATION as string,
        {
          name: contactForm.name,
          phone: contactForm.phone,
          subject: contactForm.subject,
          message: contactForm.message,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY as string }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-row items-center">
        <span className={`material-symbols-outlined p-2 bg-background border-b ${isName ? "border-accent text-accent" : "border-border text-secondary"}`}>person</span>
        <input type="text" className={`bg-background p-2 w-full outline-none border-b ${isName ? "border-accent" : "border-border"} text-primary`} placeholder="Name" name="name" value={contactForm.name} onChange={handleChange} onFocus={() => setIsName(true)} onBlur={() => setIsName(false)} />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b ${isMail ? "border-accent text-accent" : "border-border text-secondary"}`}>mail</span>
        <input
          required
          type="email"
          className={`bg-background p-2 w-full outline-none border-b ${isMail ? "border-accent" : "border-border"} text-primary`}
          placeholder="E-Mail"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          onFocus={() => setIsMail(true)}
          onBlur={() => setIsMail(false)}
        />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b ${isPhone ? "border-accent text-accent" : "border-border text-secondary"}`}>phone</span>
        <input
          type="number"
          className={`bg-background p-2 w-full outline-none border-b ${isPhone ? "border-accent" : "border-border"} text-primary`}
          placeholder="Phone number"
          name="phone"
          value={contactForm.phone}
          onChange={handleChange}
          onFocus={() => setIsPhone(true)}
          onBlur={() => setIsPhone(false)}
        />
      </div>
      <div className="flex flex-row items-center ">
        <span className={`material-symbols-outlined p-2 bg-background border-b ${isSubject ? "border-accent text-accent" : "border-border text-secondary"}`}>subject</span>
        <input
          type="text"
          className={`bg-background p-2 w-full outline-none border-b ${isSubject ? "border-accent" : "border-border"} text-primary`}
          placeholder="Subject"
          name="subject"
          value={contactForm.subject}
          onChange={handleChange}
          onFocus={() => setIsSubject(true)}
          onBlur={() => setIsSubject(false)}
        />
      </div>
      <div className="flex flex-row items-center">
        <textarea
          required
          className={`bg-background p-2 w-full outline-none border-b ${isMessage ? "border-accent" : "border-border"} text-primary resize-none`}
          rows={3}
          placeholder="Your message..."
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          onFocus={() => setIsMessage(true)}
          onBlur={() => setIsMessage(false)}
        />
      </div>
      <button type="submit" className="bg-accent hover:bg-hover-accent rounded-xl py-2 text-background cursor-pointer font-semibold">
        Send
      </button>
    </form>
  );
}
