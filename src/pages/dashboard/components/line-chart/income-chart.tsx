import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import styles from './styles.module.scss'

const revenueData = [
  { month: 'Июл', revenue: 45000 },
  { month: 'Авг', revenue: 52000 },
  { month: 'Сен', revenue: 48000 },
  { month: 'Окт', revenue: 61000 },
  { month: 'Ноя', revenue: 72000 },
  { month: 'Дек', revenue: 68000 },
  { month: 'Янв', revenue: 85000 },
]

export const IncomeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Доход"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: '#3b82f6', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
