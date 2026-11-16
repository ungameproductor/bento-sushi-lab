type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M14.2 20v-6.1h2.05l.3-2.35h-2.35V9.9c0-.68.19-1.14 1.17-1.14H16.7V6.66c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v1.39H8.8v2.35h2.3V20h3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
