export const TopHero = () => (
  <section
    id="highlights"
    className="w-full px-6 py-20 border-y border-primary/20 dark:border-primary/20 dark:bg-surface-dark bg-[#f7f7f7] text-center mx-auto mb-16 flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div className="absolute right-0 bottom-0 w-1/2 h-full dark:bg-primary/5 bg-primary/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>
    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
      Real-time insights
      <br />
      <span className="text-primary">and unified multi-chain tools</span>
    </h1>
    <p className="text-slate-700 dark:text-slate-400 text-lg max-w-2xl mx-auto">
      A cross-platform desktop app for monitoring accounts, subscribing to chain
      events, and submitting extrinsics across the Polkadot ecosystem. Secure,
      fast, and focused on actionable on-chain activity.
    </p>
  </section>
);

export const BottomHero = () => (
  <section
    id="get-started"
    className="w-full relative px-6 py-24 dark:bg-surface-dark bg-[#f7f7f7] border-y border-primary/20 dark:border-primary/20 flex flex-col items-center text-center"
  >
    <div className="absolute right-0 bottom-0 w-1/2 h-full dark:bg-primary/5 bg-primary/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>
    <div className="max-w-3xl space-y-8">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
        Get started with Polkadot Live
      </h2>
      <p className="text-slate-700 dark:text-slate-400 text-lg">
        Visit the documentation portal to download installers and learn more
        about Polkadot Live.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://docs.polkadot-live.app/overview"
          target="_blank"
          rel="noopener"
        >
          <button
            type="button"
            className="flex min-w-[180px] h-14 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform cursor-pointer"
          >
            Get Started
          </button>
        </a>
      </div>
    </div>
  </section>
);
