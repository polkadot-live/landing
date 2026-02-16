import KusamaSVG from '../../assets/kusama.svg';
import PaseoSVG from '../../assets/paseo.svg';
import PolkadotSVG from '../../assets/polkadot.svg';
import type { NetworkData } from './types';

const NetworkDataRec: Record<string, NetworkData> = {
  polkadot: {
    title: 'Polkadot',
    desc: 'Production security and governance layer for the mainnet.',
    icon: 'polkadot.svg',
    tag: 'STABLE_PRODUCTION',
    iconUtils:
      'bg-[var(--polkadot)] shadow-[0_4px_20px_rgba(230,0,122,0.2)] dark:shadow-[0_0_30px_rgba(230,0,122,0.4)]',
    tagUtils: 'text-primary border-primary/30',
  },
  kusama: {
    title: 'Kusama',
    desc: 'Canary network for high-velocity innovation and experimental upgrades.',
    icon: 'kusama.svg',
    tag: 'RAPID_ITERATION',
    iconUtils:
      'bg-[var(--kusama)] shadow-[0_4px_20px_rgba(160,32,240,0.2)]dark:shadow-[0_0_30px_rgba(160,32,240,0.4)]',
    tagUtils: ' text-[var(--kusama)] border-[var(--kusama)]/30',
  },
  paseo: {
    title: 'Paseo',
    desc: 'Community-driven testnet environment for developer staging and sandbox testing.',
    icon: 'paseo.svg',
    tag: 'DEVELOPER_STAGING',
    iconUtils:
      'bg-[var(--paseo)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(161,161,170,0.2)]',
    tagUtils: 'text-slate-500 border-black/10 dark:border-white/10',
  },
};

export const NetworkCard = ({
  network,
}: {
  network: 'polkadot' | 'kusama' | 'paseo';
}) => {
  return (
    <div className="hub-card group">
      <div className="visual-hex-lite">
        <div className="visual-circle-lite w-24 h-24"></div>
        <div className="visual-circle-lite w-20 h-20 opacity-50"></div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/20 relative z-10 transition-transform group-hover:scale-110 ${NetworkDataRec[network].iconUtils}`}
        >
          <span className="material-symbols-outlined text-white text-xl">
            {network === 'polkadot' && (
              <img src={PolkadotSVG} alt="Polkadot Icon" />
            )}
            {network === 'kusama' && <img src={KusamaSVG} alt="Kusama Icon" />}
            {network === 'paseo' && <img src={PaseoSVG} alt="Paseo Icon" />}
          </span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-3">
        {NetworkDataRec[network].title}
      </h3>
      <p className="text-[13px] text-slate-600 dark:text-slate-500 leading-relaxed font-normal">
        {NetworkDataRec[network].desc}
      </p>
      <div
        className={`mt-4 text-[10px] font-mono border px-2 py-0.5 rounded tracking-widest ${NetworkDataRec[network].tagUtils}`}
      >
        {NetworkDataRec[network].tag}
      </div>
    </div>
  );
};
