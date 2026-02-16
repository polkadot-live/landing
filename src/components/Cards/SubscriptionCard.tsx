import type { RecData, SubscriptionCardProps } from './types';

const CardData: Record<string, RecData> = {
  balance: {
    label: 'Balance Transfer',
    primaryCol: 'bg-primary',
    secondaryCol: 'bg-primary/40 w-3/4',
  },
  openGov: {
    label: 'OpenGov Proposal',
    primaryCol: 'bg-green-500',
    secondaryCol: 'bg-green-500/40 w-1/2',
  },
  staking: {
    label: 'Staking Rewards',
    primaryCol: 'bg-blue-500',
    secondaryCol: 'bg-blue-500/40 w-full',
  },
};

export const SubscriptionCard = ({
  icon,
  kind,
  title,
  children,
}: SubscriptionCardProps) => (
  <div className="bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-white/5 p-8 rounded-sm border-hover-primary">
    <div className="w-10 h-10 rounded bg-white shadow-sm dark:shadow-none dark:bg-[#252525] flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-primary text-xl">
        {icon}
      </span>
    </div>
    <h4 className="text-slate-900 dark:text-white font-bold dark:font-semibold mb-4 text-base">
      {title}
    </h4>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
      {children}
    </p>
    <div className="bg-white dark:bg-background-dark p-4 rounded border border-slate-200 dark:border-white/5">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`w-1.5 h-1.5 rounded-full ${CardData[kind].primaryCol}`}
        ></span>
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          {CardData[kind].label}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full ${CardData[kind].secondaryCol}`}></div>
      </div>
    </div>
  </div>
);
