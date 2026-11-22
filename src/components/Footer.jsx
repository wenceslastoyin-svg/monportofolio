import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <a href="#accueil" className="font-medium hover:text-brand-700">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  )
}
