import kiDemo from "../assets/ki_demo.png";
import line from "../assets/line.png";
import qrRestau from "../assets/qr_restau.png";
import tools from "../assets/tools.png";

export const PROJECTS_LIST = [
  {
    title: "AI-Driven Smart Candy Machine",
    description: "Voice-controlled robotic system that understands user intent, verifies item availability via computer vision, and physically delivers the requested candy.",
    what: ["User speaks to the machine", "LLM interprets intent and extracts the desired item", "Camera verifies availability using object detection", "Robot arm picks and delivers the candy"],
    tech: ["Python", "LLM", "YOLO", "Computer Vision", "Robotics", "Camera Systems", "Speech Recognition"],
    photo: kiDemo,
  },
  {
    title: "Industrial Line Monitoring Backend",
    description: "Backend system for monitoring and analyzing production line status in an industrial packaging environment.",
    what: ["Contributed to backend development", "Implemented services for line status, events, and data processing", "Worked in an industrial, production-critical context"],
    tech: ["C#", ".NET", "Backend Systems", "Industrial Data"],
    photo: line,
  },
  {
    title: "Restaurant QR Ordering System",
    description: "QR-based restaurant ordering system that replaces wait times with real-time digital ordering and table management.",
    what: ["Customers scan a QR code per table", "Order food or call a waiter from the web app", "Admin dashboard to manage tables, orders, and menu items"],
    tech: ["React", "TypeScript", "Backend API", "MongoDB", "QR Codes"],
    photo: qrRestau,
  },
  {
    title: "Web Utility Toolkit",
    description: "Collection of small web utilities focused on everyday productivity tasks.",
    what: ["QR code generator", "Word counter", "Password generator"],
    tech: ["React", "FastAPI", "Frontend Utilities"],
    photo: tools,
  },
];
