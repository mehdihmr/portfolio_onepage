import Modal from "../modal/modal";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  what: string[];
  tech: string[];
  photo: string;
};

type ProjectItemProps = {
  fotoFirst: boolean;
  data: Project;
};

export default function ProjectItem({ fotoFirst, data }: ProjectItemProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className={`flex ${fotoFirst ? "flex-col" : "flex-col-reverse"} w-82 select-none`}>
      <div className={`flex ${fotoFirst ? "flex-col" : "flex-col-reverse"} hover:bg-background cursor-pointer p-3 rounded-xl gap-y-2`} onClick={() => setIsModalOpen(true)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="overflow-hidden rounded-xl border-2 border-border">
          <img src={data.photo} className={`object-cover h-44 w-80  ${isHovered && "scale-110"}`} />
        </div>
        <h1 className={`text-xl font-bold px-2 text-center ${isHovered ? "text-accent underline" : "text-primary"}`}>{data.title}</h1>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={data.title}>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img src={data.photo} className="object-cover w-full rounded-xl" />
          <hr className="text-border" />
          <p className="text-primary">{data.description}</p>
          <hr className="text-border" />
          <p className="text-primary text-start w-full">What it does:</p>
          <ul className="list-disc px-6 text-secondary w-full">
            {data.what.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <hr className="text-border" />
          <p className="text-primary w-full">Tech:</p>
          <div className="flex flex-row flex-wrap divide-x w-full">
            {data.tech.map((t, i) => (
              <p key={i} className="px-2 text-secondary">
                {t}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
