import { profile } from '../data'
import Avatar from './Avatar'

export default function Hero() {
  return (
    <section id="accueil" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <div>
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-sm font-semibold text-brand-700">
            Bonjour, je suis
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-brand-700 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cvUrl}
              download
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
            >
              Télécharger mon CV
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <span className="text-brand-600">●</span> {profile.location}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-brand-100/60 blur-2xl" />
            <Avatar className="relative h-52 w-52 text-6xl shadow-xl ring-4 ring-white sm:h-64 sm:w-64" />
          </div>
        </div>
      </div>
    </section>
  )
}
