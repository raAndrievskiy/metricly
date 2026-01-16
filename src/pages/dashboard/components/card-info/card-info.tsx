import cn from 'classnames'

import { card } from './utils'
import styles from './styles.module.scss'

export const CardInfo = () => {
  return (
    <div className={styles.card_wrap}>
      {card.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.card_header}>
            icon
            {item.indicator >= 0 ? (
              <span className={cn(styles.indicator, styles.green)}>
                {item.indicator}
              </span>
            ) : (
              <span className={cn(styles.indicator, styles.red)}>
                {item.indicator}
              </span>
            )}
          </div>
          <span className={styles.text}>{item.text}</span>
          <span>{item.number}</span>
        </div>
      ))}
    </div>
  )
}
