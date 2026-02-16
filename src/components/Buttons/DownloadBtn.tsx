import type { DownloadBtnProps } from './types';

export const DownloadBtn = ({
  href,
  icon,
  label,
  theme,
  isComingSoon = false,
}: DownloadBtnProps) => (
  <div className="relative">
    <a
      type="button"
      href={href}
      className={`flat-button ${theme === 'dark' ? 'download-btn-primary' : 'download-btn-secondary'} ${isComingSoon && 'coming-soon'}`}
    >
      <span className="material-symbols-outlined text-base">{icon}</span>
      {label}
    </a>

    {isComingSoon && (
      <span className="absolute -top-2 -right-2 bg-primary/90 dark:bg-primary/60 text-white text-[9px] px-4 py-[2px] rounded-sm">
        Coming Soon
      </span>
    )}
  </div>
);
