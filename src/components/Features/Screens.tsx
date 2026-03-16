import { useTheme } from '../../hooks/useTheme';

export const Screens = () => {
  const theme = useTheme();

  return (
    <section id="screens" className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="flex items-center gap-4 text-primary">
            <span className="material-symbols-outlined text-4xl">widgets</span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Tabbed Views
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight">
            Dedicated Screens
          </h2>
          <div className="space-y-8 text-lg text-slate-700 dark:text-slate-400 leading-relaxed">
            <p>
              Polkadot Live presents a single, dedicated window with
              purpose-built tabs. Manage accounts, review and submit extrinsics,
              explore OpenGov referenda, or adjust settings — each tab keeps the
              workflow clear so you can move between tasks quickly without
              losing context.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Card icon="account_circle" title="Accounts">
              Import, organize, and secure accounts across networks.
            </Card>
            <Card icon="send" title="Extrinsics">
              Compose, preview, and submit extrinsics with clear signing flows.
            </Card>
            <Card icon="gavel" title="OpenGov">
              Explore referenda and governance proposals with rich context.
            </Card>
            <Card icon="settings" title="Settings">
              Customize preferences, networks, and notification options.
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <ScreenImage
              src={`/features/screens-01-${theme}.webp`}
              alt="Accounts Screen"
            />
          </div>
          <div className="w-full md:w-1/2">
            <ScreenImage
              src={`/features/screens-02-${theme}.webp`}
              alt="Extrinsics Screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white/80 p-4 rounded-xl border border-black/[0.06] dark:bg-black/40 dark:border-white/5">
    <div className="flex items-center gap-3 mb-1">
      {icon && (
        <span className="material-symbols-outlined text-primary text-xl">
          {icon}
        </span>
      )}
      <span className="text-primary font-black">{title}</span>
    </div>
    <p className="text-sm text-slate-700 dark:text-slate-400">{children}</p>
  </div>
);

const ScreenImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-lg overflow-hidden border border-white/10 dark:border-white/5">
    <img alt={alt} className="w-full" src={src} />
  </div>
);
