import { ThemeToggle } from '../ThemeToggle';

const NavItem = ({
  label,
  href,
  variant = 'right',
}: {
  label: string;
  href: string;
  variant?: 'left' | 'right';
}) => (
  <a
    className={`hover:text-primary transition-colors ${
      variant === 'right' ? 'font-semibold' : 'font-normal'
    }`}
    href={href}
  >
    {label}
  </a>
);

export const NavBar = () => (
  <nav className="nav-outer">
    <div className="nav-inner flex items-center max-[600px]:flex-col max-[600px]:items-center max-[600px]:py-4 max-[600px]:h-auto">
      <a href="#header" className="max-[600px]:mb-2">
        <div className="flex items-center gap-2">
          <img
            alt="Polkadot Live Logo"
            className="w-8 h-8 object-contain"
            src="/logo.webp"
          />
          <span className="text-md font-semibold tracking-tight text-slate-900 dark:text-white">
            POLKADOT <span className="text-primary">LIVE</span>
          </span>
        </div>
      </a>

      <div className="nav-row flex-1 flex items-center justify-between gap-4 ml-6 max-[600px]:w-full max-[600px]:justify-center max-[600px]:ml-0">
        <div className="nav-items flex-1 flex items-center justify-between gap-4 max-[600px]:flex-none max-[600px]:justify-center max-[600px]:w-auto">
          <div className="nav-left flex items-center gap-6 max-[1000px]:hidden">
            <NavItem label={'Overview'} href={'#features'} variant={'left'} />
            <NavItem
              label={'Networks'}
              href={'#multi-chain'}
              variant={'left'}
            />
            <NavItem label={'Accounts'} href={'#accounts'} variant={'left'} />
            <NavItem
              label={'Subscriptions'}
              href={'#subscriptions'}
              variant={'left'}
            />
          </div>

          <div className="nav-right flex items-center gap-6 ml-auto mr-6 max-[600px]:ml-0 max-[600px]:mr-0 max-[600px]:justify-center">
            <NavItem label={'Home'} href={'/'} variant={'right'} />
            <NavItem label={'Features'} href={'#features'} variant={'right'} />
          </div>
        </div>

        <div className="get-started flex items-center">
          <a
            className="tag"
            href="https://docs.polkadot-live.app/overview"
            target="_blank"
            rel="noopener"
          >
            Get Started
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
);
