import cn from 'classnames'

import { CardInfo, IncomeChart } from './components'
import styles from './styles.module.scss'

export const Dashboard = () => {
  return (
    <div className={cn(styles.dashboard, 'container')}>
      <CardInfo />
      <IncomeChart />
    </div>
  )
}
