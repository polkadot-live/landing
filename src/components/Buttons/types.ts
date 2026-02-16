export interface ActionBtnProps {
  highlight: boolean;
  href: string;
  icon: string;
  title: string;
}

export interface DownloadBtnProps {
  href: string;
  icon: string;
  label: string;
  theme: 'dark' | 'light';
  isComingSoon?: boolean;
}
