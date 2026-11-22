import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-800">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Travaillons ensemble
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">
          Un projet, une collaboration ou simplement envie d'échanger ? Je suis
          disponible et je vous répondrai rapidement.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl bg-white/10 p-6 transition hover:bg-white/15"
          >
            <p className="text-sm font-medium text-brand-200">Email</p>
            <p className="mt-1 font-semibold break-all text-white">
              {profile.email}
            </p>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="rounded-xl bg-white/10 p-6 transition hover:bg-white/15"
          >
            <p className="text-sm font-medium text-brand-200">Téléphone</p>
            <p className="mt-1 font-semibold text-white">{profile.phone}</p>
          </a>

          <div className="rounded-xl bg-white/10 p-6">
            <p className="text-sm font-medium text-brand-200">Localisation</p>
            <p className="mt-1 font-semibold text-white">{profile.location}</p>
          </div>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
        >
          Envoyer un message
        </a>
      </div>
    </section>
  )
}
