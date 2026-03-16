import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';

const HashLink = ({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = to.startsWith('#') ? to.slice(1) : to;

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export const NavItem = ({
  label,
  href,
  variant = 'right',
}: {
  label: string;
  href: string;
  variant?: 'left' | 'right';
}) => {
  const className = `hover:text-primary transition-colors ${
    variant === 'right' ? 'font-semibold' : 'font-semibold'
  }`;

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }
  if (href.startsWith('#')) {
    return (
      <HashLink to={href} className={className}>
        {label}
      </HashLink>
    );
  }

  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
};

export const NavBar = ({ leftLinks }: { leftLinks?: React.ReactNode }) => (
  <nav className="nav-outer">
    <div className="nav-inner flex items-center max-[600px]:flex-col max-[600px]:items-center max-[600px]:py-4 max-[600px]:h-auto">
      <Link to="/" className="max-[600px]:mb-2">
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
      </Link>

      <div className="nav-row flex-1 flex items-center justify-between gap-4 ml-6 max-[600px]:w-full max-[600px]:justify-center max-[600px]:ml-0">
        <div className="nav-items flex-1 flex items-center justify-between gap-5 max-[600px]:flex-none max-[600px]:justify-center max-[600px]:w-auto">
          <div className="nav-left flex items-center gap-5 max-[1000px]:hidden text-[0.6rem]">
            {leftLinks}
          </div>

          <div className="nav-right flex items-center gap-6 ml-auto mr-6 max-[600px]:ml-0 max-[600px]:mr-0 max-[600px]:justify-center">
            <NavItem label={'Home'} href={'/'} variant={'right'} />
            <NavItem label={'Features'} href={'/features'} variant={'right'} />
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
