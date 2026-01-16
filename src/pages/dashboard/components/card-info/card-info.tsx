import { card } from './utils'

import styles from './styles.module.scss'

export const CardInfo = () => {
  return (
    <div>
      {card.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.card_header}>
            icon
            <span>{item.indicator}</span>
          </div>
          <span>{item.text}</span>
          <span>{item.number}</span>
        </div>
      ))}
    </div>
  )
}
