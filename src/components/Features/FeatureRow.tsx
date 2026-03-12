interface FeatureRowProps {
  badgeData: { icon: string; text: string };
  imgData: { src: string; pos: 'left' | 'right'; alt: string };
  title: string;
  children: React.ReactNode;
  points?: string[];
}

export const FeatureRow = ({
  badgeData,
  imgData,
  title,
  children,
  points,
}: FeatureRowProps) => (
  <section
    className={`w-full py-8 ${imgData.pos === 'right' ? 'bg-surface-lighter dark:bg-surface-darker' : ''}`}
  >
    <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div
        className={`flex-1 space-y-6 ${imgData.pos === 'left' ? 'md:order-2' : 'md:order-1'}`}
      >
        <Badge {...badgeData} />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          {children}
        </p>
        {points && (
          <div className="flex flex-wrap gap-4 pt-4">
            <ul className="space-y-4 text-md font-medium">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: '20px' }}
                  >
                    check_circle
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`flex-1 flex items-center justify-center ${imgData.pos === 'left' ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="w-full max-w-[520px] flex items-center justify-center overflow-hidden">
          <div className="rounded-lg">
            <img
              alt={imgData.alt}
              src={imgData.src}
              className="w-full h-auto max-h-[550px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Badge = ({ icon, text }: { icon: string; text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
    <span className="material-symbols-outlined text-xs">{icon}</span>
    {text}
  </div>
);
