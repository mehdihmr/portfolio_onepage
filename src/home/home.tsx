import profilePic from "../assets/profile_pic.png";

export default function Home() {
  return (
    <div id="home" className="mt-14 font-primary flex flex-row items-center justify-center container mx-auto">
      <div className="flex flex-col justify-center flex-2 gap-y-8">
        <h1 className="text-7xl font-extrabold">MEHDI HAMROUNI</h1>
        <p className="text-secondary text-xl">Software Engineer — Backend-focused engineer building performant systems and applied AI solutions.</p>
        <div>
          <button className="bg-accent py-2 px-6 rounded-xl hover:bg-hover-accent cursor-pointer text-background font-semibold">View Projects</button>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img src={profilePic} />
      </div>
    </div>
  );
}
