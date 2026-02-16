import { NetworkCard } from '../Cards';

export const MultiChain = () => (
  <section
    className="bg-background-light dark:bg-background-dark py-32 relative overflow-hidden"
    id="multi-chain"
  >
    <div className="max-w-6xl mx-auto px-8 relative">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold dark:font-medium text-slate-900 dark:text-white mb-6 tracking-tight">
          Master Ecosystem Hub
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A unified architecture supporting Relay, Asset Hub, and People Chains
          across all primary network environments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <NetworkCard network={'polkadot'} />
        <NetworkCard network={'kusama'} />
        <NetworkCard network={'paseo'} />
      </div>

      <div className="max-w-3xl mx-auto border-t border-white/5 pt-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <EllipsisTag />
          <PillarTag label={'Relay Chain'} />
          <PillarTag label={'Asset Hub'} />
          <PillarTag label={'People Chain'} />
          <EllipsisTag />
        </div>
        <p className="text-center text-sm text-slate-600 mt-6 font-medium">
          Standardized system chain support across all networks
        </p>
      </div>
    </div>
  </section>
);

const EllipsisTag = () => (
  <div className="text-slate-600 text-[10px] font-mono tracking-widest ml-2">
    ...
  </div>
);

const PillarTag = ({ label }: { label: string }) => (
  <div className="pillar-tag">
    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40"></span>
    {label}
  </div>
);
