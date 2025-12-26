import { useState, useEffect } from "react";

type NotificationProps = {
  message: string;
  type: string;
};
export default function Notification({ message, type }: NotificationProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [icon, setIcon] = useState({ name: "", color: "" });

  useEffect(() => {
    if (type === "info") {
      setIcon({ name: "check_circle", color: "text-success" });
    } else if (type === "error") {
      setIcon({ name: "cancel", color: "text-error" });
    }
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <div
      className="alert-toast fixed bottom-7 right-7 w-3/4 max-w-sm z-50"
      style={{
        position: "fixed",
        bottom: "2rem", // Adjusted bottom spacing
        right: "2rem", // Adjusted right spacing
        zIndex: 9999, // Ensures it appears above other elements
      }}
    >
      <input type="checkbox" checked={isChecked} className="hidden" id="footertoast" readOnly={true} />

      <div className="close cursor-pointer flex items-center justify-start space-x-2  w-full p-4 font-primary font-medium h-14 rounded shadow-lg text-md bg-surface border-2 border-border" title="close" htmlFor="footertoast">
        <span className={`material-symbols-outlined ${icon.color}`}>{icon.name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
