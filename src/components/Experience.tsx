const jobs = [
  {
    title: "Coding Instructor",
    company: "Code ninjas",
    dates: "Aug 2025 — Present",
    bullets: [
      "Built and maintained internal REST APIs serving 40k+ daily requests using Go and PostgreSQL",
      "Reduced average API response time by 38% through query optimization and connection pooling",
      "Led migration of legacy auth system to JWT-based auth across 3 services",
    ],
    tags: ["Go", "PostgreSQL", "Docker", "gRPC"],
  },
  // ...
];

function Experience() {
  return (
    <section className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div key={job.company} className="border border-zinc-700 p-6 m-5 rounded">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="font-medium text-white">{job.title}</p>
              <a href="https://www.codeninjas.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-OneCyan hover:cursor-pointer">{job.company}</a>
            </div>
            <span className="text-xs text-neutral-500 whitespace-nowrap ml-4">{job.dates}</span>
          </div>
          <hr className="border-neutral-800 mb-4" />
          <ul className="space-y-1.5">
            {job.bullets.map((b, i) => (
              <li key={i} className="text-sm text-neutral-400 pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-600">
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {job.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 border border-neutral-800 text-neutral-500">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
