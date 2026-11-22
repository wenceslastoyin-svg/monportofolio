import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projets" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Projets
          </h2>
          <p className="mt-2 text-slate-600">Une sélection de mes réalisations</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl font-bold text-brand-700">
                {project.name.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {project.linkLabel || 'Voir le projet'} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
