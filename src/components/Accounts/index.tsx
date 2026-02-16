import { AccountCard } from '../Cards';
import type { AccountBadgeProps } from './types';

export const Accounts = () => (
  <section className="py-24 bg-slate-50 dark:bg-[#1A1A1A]" id="accounts">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <h2 className="text-center lg:text-left text-3xl font-bold dark:font-medium text-slate-900 dark:text-white mb-6">
            Connect Your Accounts
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Polkadot Live supports all industry-standard signing methods. Import
            your accounts securely in seconds.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AccountBadge icon={'security'} label={'Secured Access'} />
            <AccountBadge icon={'visibility'} label={'Read Only'} />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-2xl">
          <AccountCard
            icon={'token'}
            iconColor_1={'bg-slate-100 dark:bg-slate-800'}
            iconColor_2={'text-slate-900 dark:text-white'}
            title={'Ledger'}
            subtitle={'Secure cold storage'}
          />
          <AccountCard
            icon={'lock'}
            iconColor_1={'bg-primary/10 dark:bg-primary/20'}
            iconColor_2={'text-primary'}
            title={'Polkadot Vault'}
            subtitle={'Secure Polkadot key storage'}
          />
          <AccountCard
            icon={'link'}
            iconColor_1={'bg-blue-50 dark:bg-blue-500/20'}
            iconColor_2={'text-blue-500 dark:text-blue-400'}
            title={'WalletConnect'}
            subtitle={'Seamless Dapp connections'}
          />
          <AccountCard
            icon={'visibility'}
            iconColor_1={'bg-slate-100 dark:bg-slate-800'}
            iconColor_2={'text-slate-600 dark:text-slate-400'}
            title={'Read Only'}
            subtitle={'Track any address'}
          />
        </div>
      </div>
    </div>
  </section>
);

const AccountBadge = ({ icon, label }: AccountBadgeProps) => (
  <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-white/10 p-4 rounded flex items-center gap-3">
    <span className="material-symbols-outlined text-primary">{icon}</span>
    <span className="text-xs font-bold dark:font-semibold text-slate-900 dark:text-white">
      {label}
    </span>
  </div>
);
