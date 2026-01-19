import cn from 'classnames'

import { card } from './utils'
import styles from './styles.module.scss'
import { TrendingDown } from 'lucide-react'

export const CardInfo = () => {
  return (
    <div className={styles.card_wrap}>
      {card.map((item, index) => {
        const Icon = item.icon

        return (
          <div className={styles.card} key={index}>
            <div className={styles.card_header}>
              <Icon className={styles.icon} color="#155DFC" />
              {item.change >= 0 ? (
                <span className={cn(styles.change, 'green')}>
                  <TrendingDown color="#00A63E" />
                  {item.change}
                </span>
              ) : (
                <span className={cn(styles.change, 'red')}>
                  <TrendingDown color="#E7000B" />
                  {item.change}
                </span>
              )}
            </div>
            <span className={styles.title}>{item.title}</span>
            <span>{item.number}</span>
          </div>
        )
      })}
    </div>
  )
}
