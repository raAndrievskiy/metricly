import cn from 'classnames'

import { sidebarItem } from './utils'
import styles from './styles.module.scss'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="/" className={styles.logo}>
        Metricly
      </a>
      <div className={styles.items}>
        {sidebarItem.map((item) => (
          <a href={item.link} className={cn(styles.item, 'active')}>
            {(item.icon, item.text)}
          </a>
        ))}
      </div>
    </div>
  )
}
