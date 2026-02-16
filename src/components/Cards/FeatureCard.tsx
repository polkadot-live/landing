import type { FeatureCardProps } from './types';

export const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
  <div className="p-8 bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-white/5 border-hover-primary rounded-sm">
    <span className="material-symbols-outlined text-primary text-2xl mb-6">
      {icon}
    </span>
    <h3 className="text-sm font-bold dark:font-semibold mb-3 uppercase tracking-wider text-slate-900 dark:text-white">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed">
      {children}
    </p>
  </div>
);
