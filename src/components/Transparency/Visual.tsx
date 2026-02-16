export const Visual = () => (
  <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-white/5 rounded-md p-6 font-mono text-[11px] text-slate-600 dark:text-slate-400 overflow-hidden shadow-inner">
    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
      <div className="w-2 h-2 rounded-full bg-green-500"></div>
      <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold dark:font-semibold">
        BUILD_LOG: v1.0.4-stable
      </span>
    </div>
    <div className="space-y-1">
      <p>
        <span className="text-primary/70 font-bold dark:font-semibold">
          # Fetching
        </span>{' '}
        source from polkadot-live/core...
      </p>
      <p>
        <span className="text-slate-400 dark:text-slate-600">
          Checking signatures...
        </span>{' '}
        verified by 0x3e1...1a2
      </p>
      <p>
        <span className="text-primary/70 font-bold dark:font-semibold">
          # Compiling
        </span>{' '}
        app targets...
      </p>
      <p className="text-slate-400 dark:text-slate-500">
        Compiling polkadot-live-core v0.8.2
      </p>
      <p className="text-slate-400 dark:text-slate-500">
        Compiling polkadot-live-renderer v1.1.0
      </p>
      <p>
        <span className="text-green-600 dark:text-green-500/70 font-bold dark:font-semibold">
          Success:
        </span>{' '}
        build finalized in 42.4s
      </p>
      <p className="mt-4 text-slate-400 dark:text-slate-200 dark:opacity-50">
        <span>&#47;</span>
        <span className="mr-1">&#47;</span>
        Independently verify source code
      </p>
      <p className="text-slate-400 dark:text-slate-200 dark:opacity-50">
        <span>&#47;</span>
        <span className="mr-1">&#47;</span>
        Decentralized builds enabled
      </p>
    </div>
  </div>
);
