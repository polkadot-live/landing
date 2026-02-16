import type { CardProps, EventProps } from './types';

export const Summary = () => (
  <div className="relative">
    <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full"></div>
    <div className="relative z-10 bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-slate-50 dark:bg-[#252525] border-b border-slate-200 dark:border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <Circles />
        </div>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest">
          SUMMARY
        </span>
        <div className="w-12"></div>
      </div>
      <div className="p-6 bg-white dark:bg-[#1A1A1A]">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card label={'Accounts'} icon={'account_balance_wallet'} />
          <Card label={'Extrinsics'} icon={'history_edu'} />
          <Card label={'OpenGov'} icon={'ballot'} />
          <Card label={'Settings'} icon={'settings'} />
        </div>
        <div className="space-y-3">
          <Event label={'Referendum #1060'} when={'Just now'} kind={'A'} />
          <Event label={'Staking Reward Claimed'} when={'12m ago'} kind={'B'} />
        </div>
      </div>
    </div>
  </div>
);

const Card = ({ label, icon }: CardProps) => (
  <div className="bg-slate-50 dark:bg-[#252525] p-4 rounded-md flex flex-col items-center gap-2 border border-slate-100 dark:border-white/5">
    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
      {icon}
    </span>
    <span className="text-[10px] font-medium text-slate-500">{label}</span>
  </div>
);

const Circles = ({ count = 3 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => i).map((i) => (
      <div
        key={i}
        className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10"
      ></div>
    ))}
  </>
);

const Event = ({ label, when, kind }: EventProps) => {
  const borderCol = kind === 'A' ? 'border-primary' : 'border-slate-700';
  const circleCol =
    kind === 'A' ? 'bg-primary' : 'bg-slate-400 dark:bg-slate-500';
  return (
    <div
      className={`flex items-center justify-between p-3 bg-slate-50 dark:bg-[#222222] border-l-2 ${borderCol}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${circleCol}`}></div>
        <span className="text-xs font-medium text-slate-900 dark:text-white">
          {label}
        </span>
      </div>
      <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase">
        {when}
      </span>
    </div>
  );
};
