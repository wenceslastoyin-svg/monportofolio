import { skills } from '../data'

export default function Skills() {
  return (
    <section id="competences" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Compétences
          </h2>
          <p className="mt-2 text-slate-600">
            Langages, frameworks et outils que j'utilise
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-brand-700">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
