import { profile } from '../data'

const stats = [
  { value: '3+', label: "Années d'expérience" },
  { value: '10+', label: 'Compétences techniques' },
  { value: 'Full', label: 'Stack (front & back)' },
]

export default function About() {
  return (
    <section id="a-propos" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            À propos
          </h2>
          <p className="mt-2 text-slate-600">Qui je suis et ce que je fais</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>{profile.bio}</p>
            <p>
              Basé à {profile.location}, j'interviens sur l'ensemble de la chaîne
              de développement : de la conception d'interfaces claires et
              responsives jusqu'à la mise en place d'API et de bases de données
              fiables.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code, à la
              performance et à l'expérience utilisateur, avec pour objectif de
              livrer des produits concrets et soignés.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm lg:text-left"
              >
                <p className="text-3xl font-extrabold text-brand-700">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
