import { ActionBtn } from '../Buttons';
import { Visual } from './Visual';
import type { HighlightProps } from './types';

export const Transparency = () => (
  <section className="py-24 bg-slate-50 dark:bg-[#1A1A1A]" id="transparency">
    <div className="max-w-7xl mx-auto px-8">
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-primary mb-6">
            <span className="material-symbols-outlined text-lg">
              verified_user
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Open Source &amp; Transparent
            </span>
          </div>
          <h2 className="text-3xl font-bold dark:font-medium text-slate-900 dark:text-white mb-6 leading-tight">
            Trust but verify every line of code.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            As a public good project funded by the{' '}
            <span className="text-slate-900 dark:text-white font-medium">
              Polkadot Treasury through OpenGov
            </span>
            , our code is completely open, auditable, and community-driven.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <Highlight
              icon={'code'}
              title={'View Source Code'}
              subtitle={'Full access to our repository.'}
            />
            <Highlight
              icon={'build'}
              title={'Compile from Source'}
              subtitle={'Independent build verification.'}
            />
            <Highlight
              icon={'account_balance'}
              title={'Publicly Funded'}
              subtitle={'Supported by Polkadot OpenGov.'}
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <ActionBtn
              highlight={true}
              href={'https://github.com/polkadot-live/polkadot-live-app'}
              icon={'terminal'}
              title={'Explore on GitHub'}
            />
            <ActionBtn
              highlight={false}
              href={'#'}
              icon={'auto_stories'}
              title={'Read Documentation'}
            />
          </div>
        </div>
        <Visual />
      </div>
    </div>
  </section>
);

const Highlight = ({ icon, title, subtitle }: HighlightProps) => (
  <div className="flex items-start gap-3">
    <span className="material-symbols-outlined text-primary text-xl">
      {icon}
    </span>
    <div>
      <h5 className="text-slate-900 dark:text-white text-xs font-bold dark:font-semibold uppercase tracking-wider mb-1">
        {title}
      </h5>
      <p className="text-[12px] text-slate-500 font-medium dark:font-regular">
        {subtitle}
      </p>
    </div>
  </div>
);
