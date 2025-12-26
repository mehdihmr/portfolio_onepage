import ProjectItem from "./projectItem";
import { PROJECTS_LIST } from "./projectsList";

export default function Projects() {
  return (
    <div className="bg-surface select-none" id="projects">
      <div className="container mx-auto py-14 font-primary">
        <h1 className="font-extrabold text-6xl mb-10 text-center">MY PROJECTS</h1>
        <div className="flex flex-row flex-wrap items-between justify-around min-h-96">
          {PROJECTS_LIST.map((project, index) => (
            <ProjectItem key={index} fotoFirst={index % 2 == 0} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
