export const Footer = () => (
  <footer className="py-20 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-none">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="Polkadot Live Logo"
              className="w-8 h-8 object-contain"
              src="/logo.webp"
            />
            <span className="text-sm font:bold dark:font-semibold tracking-tight uppercase text-slate-900 dark:text-white">
              POLKADOT<span className="text-primary">LIVE</span>
            </span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed text-sm">
            The professional desktop interface for the Polkadot ecosystem. Built
            for transparency, performance, and peace of mind.
          </p>
          <div className="flex gap-3">
            <FooterBtn
              icon={'code'}
              href={'https://github.com/polkadot-live/polkadot-live-app'}
            />
          </div>
        </div>
        <div>
          <h6 className="font-bold dark:font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500">
            Resources
          </h6>
          <ul className="space-y-4 text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <FooterLink label={'Documentation'} href={'#'} />
            <FooterLink
              label={'GitHub'}
              href={'https://github.com/polkadot-live'}
            />
          </ul>
        </div>
        <div>
          <h6 className="font-bold dark:font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500">
            Ecosystem
          </h6>
          <ul className="space-y-4 text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <FooterLink
              label={'Polkadot Cloud'}
              href={'https://polkadot.cloud/'}
            />
            <FooterLink
              label={'Staking Dashboard'}
              href={'https://staking.polkadot.cloud/'}
            />
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold dark:font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
        <p>© 2025 Polkadot Live Authors and Contributors.</p>
        <div className="flex gap-10">
          <FooterAnc label={'Privacy'} href={'#'} />
          <FooterAnc label={'Disclaimer'} href={'#'} />
        </div>
      </div>
    </div>
  </footer>
);

const FooterAnc = ({ label, href }: { label: string; href: string }) => (
  <a
    className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
    href={href}
    target="_blank"
    rel="noopener"
  >
    {label}
  </a>
);

const FooterBtn = ({ icon, href }: { icon: string; href: string }) => (
  <a
    className="w-8 h-8 rounded-sm bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-white/5 flex items-center justify-center hover:border-primary/50 dark:hover:border-primary/50 transition-colors text-slate-500 hover:text-primary"
    href={href}
    rel="noopener"
    target="_blank"
  >
    <span className="material-symbols-outlined text-lg">{icon}</span>
  </a>
);

const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <li>
    <a
      className="hover:text-primary transition-colors"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {label}
    </a>
  </li>
);
