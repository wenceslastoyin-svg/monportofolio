import { profile } from '../data'

// Avatar : affiche la photo si fournie, sinon un avatar à initiales.
export default function Avatar({ className = '' }) {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={profile.name}
        className={`rounded-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 font-bold text-white select-none ${className}`}
      aria-label={profile.name}
      role="img"
    >
      <span className="text-[2.5rem] leading-none tracking-wide">
        {profile.initials}
      </span>
    </div>
  )
}
