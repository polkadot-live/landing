import { ThemeToggle } from '../ThemeToggle';

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <a className="hover:text-primary transition-colors" href={href}>
    {label}
  </a>
);

export const NavBar = () => (
  <nav className="nav-outer">
    <div className="nav-inner">
      <a href="#header">
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

      <div className="nav-items">
        <NavItem label={'Features'} href={'#features'} />
        <NavItem label={'Networks'} href={'#multi-chain'} />
        <NavItem label={'Accounts'} href={'#accounts'} />
        <NavItem label={'Subscriptions'} href={'#subscriptions'} />
      </div>

      <div className="get-started">
        <a className="tag" href="#" target="_blank" rel="noopener">
          Get Started
        </a>
        <ThemeToggle />
      </div>
    </div>
  </nav>
);
