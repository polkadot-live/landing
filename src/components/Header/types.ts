export interface CardProps {
  icon: string;
  label: string;
}

export interface EventProps {
  kind: 'A' | 'B';
  label: string;
  when: string;
}
