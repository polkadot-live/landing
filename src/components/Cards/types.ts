export interface AccountCardProps {
  icon: string;
  iconColor_1: string;
  iconColor_2: string;
  title: string;
  subtitle: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export interface NetworkData {
  title: string;
  desc: string;
  icon: string;
  tag: string;
  iconUtils: string;
  tagUtils: string;
}

export interface RecData {
  label: string;
  primaryCol: string;
  secondaryCol: string;
}

export interface SubscriptionCardProps {
  children: React.ReactNode;
  icon: string;
  kind: 'balance' | 'openGov' | 'staking';
  title: string;
}
