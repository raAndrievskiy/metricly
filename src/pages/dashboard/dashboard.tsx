import cn from 'classnames'

import { CardInfo } from './components'
import styles from './styles.module.scss'

export const Dashboard = () => {
  return (
    <div className={cn(styles.dashboard, 'container')}>
      <CardInfo />
    </div>
  )
}
