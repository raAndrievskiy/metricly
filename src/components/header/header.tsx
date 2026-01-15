import cn from 'classnames'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={cn(styles.header, 'container')}>
      <span className={styles.title}>Панель управления</span>
      <div className={styles.items}>
        <span className={styles.last_day}>Последние 30 дней</span>
        <div className={styles.btn_mode} />
        <div className={styles.profile}>
          <span className={styles.profile_text}>IP</span>
        </div>
      </div>
    </div>
  )
}
