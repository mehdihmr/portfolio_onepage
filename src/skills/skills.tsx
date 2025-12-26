import SkillItem from "./skillItem";
import { SKILLS_LIST } from "./skillsList";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-14 font-primary select-none">
      <h1 className="font-extrabold text-6xl mb-10 text-center">MY SKILLS</h1>
      <div className="flex flex-row flex-wrap justify-around gap-4">
        {SKILLS_LIST.map((skill, index) => (
          <SkillItem key={index} data={skill} />
        ))}
      </div>
    </section>
  );
}
