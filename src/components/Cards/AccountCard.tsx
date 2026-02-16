import type { AccountCardProps } from './types';

export const AccountCard = ({
  icon,
  iconColor_1,
  iconColor_2,
  title,
  subtitle,
}: AccountCardProps) => (
  <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-white/5 p-6 rounded-md group border-hover-primary flex items-start gap-4 shadow-none">
    <div
      className={`w-10 h-10 ${iconColor_1} rounded-full flex items-center justify-center`}
    >
      <span className={`material-symbols-outlined ${iconColor_2} text-xl`}>
        {icon}
      </span>
    </div>
    <div>
      <h5 className="text-slate-900 dark:text-white font-bold dark:font-semibold text-sm mb-1">
        {title}
      </h5>
      <p className="text-[12px] text-slate-500">{subtitle}</p>
    </div>
    <span
      className="material-symbols-outlined text-slate-300 dark:text-slate-700 ml-auto"
      style={{ fontSize: '20px' }}
    >
      check
    </span>
  </div>
);
