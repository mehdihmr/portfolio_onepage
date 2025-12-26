import { useState, useEffect } from "react";
import Notification from "../notification/notification";
import loadingSVG from "../assets/loading.svg";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isName, setIsName] = useState<boolean>(false);
  const [isMail, setIsMail] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isSubject, setIsSubject] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [state, handleSubmit, reset] = useForm("xbdjlqgy");

  // 2. Add this useEffect to watch for Formspree state changes
  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
      setIsError(false);
      setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
      reset();
    }

    // Check if there are errors in the Formspree state
    if (state.errors) {
      setIsError(true);
      setIsSuccess(false);
    }
  }, [state.succeeded, state.errors, reset]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 3. Reset local notifications before submitting
    setIsSuccess(false);
    setIsError(false);

    // 4. Just trigger the submit. The useEffect above will handle the result.
    await handleSubmit(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
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
      <div className="w-full flex items-center justify-center">
        <button type="submit" className={`w-2/3  rounded-xl py-2 text-background font-semibold ${state.submitting ? "cursor-not-allowed bg-accent/50" : "cursor-pointer hover:bg-hover-accent bg-accent"}`} disabled={state.submitting}>
          {state.submitting ? (
            <div className="flex justify-center items-center">
              <img src={loadingSVG} className="h-6" />
            </div>
          ) : (
            "Send"
          )}
        </button>
      </div>
      {isSuccess && <Notification message="Email sent" type="info" />}
      {isError && <Notification message="Error sending email" type="error" />}
    </form>
  );
}
