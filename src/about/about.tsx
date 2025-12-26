export default function About() {
  return (
    <div id="about" className="bg-surface">
      <div className="container mx-auto py-14 font-primary">
        <h1 className="font-extrabold text-6xl mb-10 text-center">ABOUT</h1>
        <div className="flex flex-col lg:w-1/2 mx-auto divide-y divide-border">
          <div className="pb-2">
            <h2 className="text-xl">Engineer, not a generalist</h2>
            <p className="text-secondary">Software engineer with a backend-first mindset, working on real-world systems that combine APIs, AI, and hardware integration.</p>
          </div>
          <div className="py-2">
            <h2 className="text-xl">Production over demos</h2>
            <p className="text-secondary">I care about systems that actually run in production — clean interfaces, predictable behavior, and solutions that hold up outside of controlled environments.</p>
          </div>
          <div className="pt-2">
            <h2 className="text-xl">Engineer, not a generalist</h2>
            <p className="text-secondary">Currently focused on backend development and applied AI, building projects that bridge software, computer vision, and physical systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
