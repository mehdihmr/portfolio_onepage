import profilePic from "../assets/profile_pic.png";

export default function Home() {
  return (
    <section id="home" className="mt-14 font-primary flex flex-row items-center justify-center container mx-auto select-none">
      <div className="flex flex-col justify-center flex-2 gap-y-8 my-8 lg:mx-auto mx-2">
        <h1 className="text-5xl lg:text-7xl font-extrabold">MEHDI HAMROUNI</h1>
        <div>
          <p className="text-secondary text-xl">Software Engineer — Backend-focused engineer building performant systems and applied AI solutions.</p>
        </div>
        <div>
          <a href="#projects" className="bg-accent py-3 px-6 rounded-xl hover:bg-hover-accent cursor-pointer text-background font-semibold">
            View Projects
          </a>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img src={profilePic} />
      </div>
    </section>
  );
}
