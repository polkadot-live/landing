import { DownloadBtn } from '../Buttons';
import { Summary } from './Summary';

export const Header = () => {
  const TAG = '0.13.0-beta';
  const RELEASE_URI =
    'https://github.com/polkadot-live/polkadot-live-app/releases';

  return (
    <header
      id="header"
      className="relative pt-24 pb-24 overflow-hidden border-b border-light-border dark:border-none network-topology"
    >
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid xl:grid-cols-2 gap-10 items-center">
          <div className="min-w-fit">
            <Badge label={'Now in Beta'} />
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white">
              Never miss an <br />
              on-chain event.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-lg font-normal">
              The professional gateway for decentralized notifications and chain
              interactions. Manage your assets and stay connected to the
              ecosystem from your desktop.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-5 mb-12">
              <DownloadBtn
                href={`${RELEASE_URI}/download/v${TAG}/Polkadot.Live.Setup.${TAG}.exe`}
                icon={'desktop_windows'}
                label={'Windows'}
                theme={'light'}
              />
              <DownloadBtn
                href={`${RELEASE_URI}/download/v${TAG}/Polkadot-Live-${TAG}-arm64.dmg`}
                icon={'laptop_mac'}
                label={'macOS'}
                theme={'dark'}
              />
              <DownloadBtn
                href={`${RELEASE_URI}/download/v${TAG}/Polkadot-Live-${TAG}.AppImage`}
                icon={'terminal'}
                label={'Linux'}
                theme={'dark'}
              />
            </div>
          </div>
          <div className="hidden sm-header:block">
            <Summary />
            <div className="flex justify-end pr-1 z-10">
              <div className="mt-4 z-50">
                <a
                  href={'https://docs.polkadot-live.app/gallery'}
                  type="button"
                  target="_blank"
                  rel="noopener"
                  className="flex gap-[0.4rem] text-[11px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white/90 transition-colors"
                >
                  <span
                    className="material-symbols-outlined mt-[1px]"
                    style={{ fontSize: '14px' }}
                  >
                    web_stories
                  </span>
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Badge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-light-border/20 dark:bg-primary/10 dark:border dark:border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-10">
    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
    {label}
  </div>
);
