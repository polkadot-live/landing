import type { ActionBtnProps } from './types';

export const ActionBtn = ({ highlight, href, icon, title }: ActionBtnProps) => (
  <a
    className={`flat-button ${highlight ? 'action-btn-primary' : 'action-btn-secondary'}`}
    href={href}
    rel="noopener"
    target="_blank"
  >
    <span className="material-symbols-outlined text-base">{icon}</span>
    {title}
  </a>
);
