import { education, experiences } from '../data'

export default function Experience() {
  return (
    <section id="parcours" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Parcours
          </h2>
          <p className="mt-2 text-slate-600">Expériences et formation</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Expériences */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Expériences
            </h3>
            <ol className="relative border-l border-slate-200 pl-6">
              {experiences.map((exp) => (
                <li key={exp.role} className="mb-8 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-brand-600" />
                  <p className="text-sm font-semibold text-brand-700">
                    {exp.period}
                  </p>
                  <h4 className="mt-1 text-base font-bold text-slate-900">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-slate-500">{exp.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Formation */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">Formation</h3>
            <ol className="relative border-l border-slate-200 pl-6">
              {education.map((edu) => (
                <li key={edu.degree} className="mb-8 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-brand-600" />
                  <p className="text-sm font-semibold text-brand-700">
                    {edu.period}
                  </p>
                  <h4 className="mt-1 text-base font-bold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-slate-500">{edu.school}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
