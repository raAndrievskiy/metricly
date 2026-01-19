import { Users, UserCheck, DollarSign, TrendingDown, type LucideIcon } from 'lucide-react'

interface CardProps {
  title: string;
  number: number;
  change: number;
  icon: LucideIcon;
}

export const card: CardProps[] = [
  {
    title: 'Всего пользователей',
    change: 12,
    number: 12543,
    icon: Users,
  },
  {
    title: 'Активных пользователей',
    change: -18,
    number: 12543,
    icon: UserCheck,
  },
  {
    title: 'Месячный доход',
    change: 9,
    number: 12543,
    icon: DollarSign,
  },
  {
    title: 'Отток клиентов',
    change: -2,
    number: 12543,
    icon: TrendingDown,
  },
]