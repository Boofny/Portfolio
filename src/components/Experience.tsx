const jobs = [
  {
    title: "Coding Instructor",
    company: "Code Ninjas",
    dates: "Aug 2025 — Present",
    bullets: [
      "Teaching and tutoring the fundamental building blocks of coding to children ages 7–15 in TavaScript and C#, fostering problem solving skills and computational thinking",
      "Introducing game development concepts through hands on projects, making abstract programming ideas tangible and engaging for young learners",
    ],
    tags: ["TypeScript", "C#"],
  },
];

function Experience() {
  return (
    <section className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div key={job.company} className="border border-zinc-700 p-6 m-5 rounded">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="font-medium text-white">{job.title}</p>
              <a href="https://www.codeninjas.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-OneBlue underline font-bold hover:cursor-pointer">{job.company}</a>
            </div>
            <span className="text-xs text-neutral-500 whitespace-nowrap ml-4">{job.dates}</span>
          </div>
          <hr className="border-neutral-700 "/>
          <ul className="space-y-1.5 mt-3">
            {job.bullets.map((b, i) => (
              <li key={i} className="text-sm text-neutral-400 pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-600">
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 py-3">
            {job.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 border border-neutral-600 text-neutral-200">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
