import { Calendar, Moon, Sun } from 'lucide-react'
import cn from 'classnames'

import styles from './styles.module.scss'
import { useState } from 'react'

export const Header = () => {
  const [theme, setTheme] = useState(true)

  return (
    <header className={cn(styles.header, 'container')}>
      <span className={styles.title}>Панель управления</span>
      <div className={styles.items}>
        <span className={styles.last_day}>
          <Calendar />
          Последние 30 дней
        </span>
        <div className={styles.btn_theme} onClick={() => setTheme(!theme)}>
          {theme ? <Sun /> : <Moon />}
        </div>
        <div className={styles.profile}>
          <span className={styles.profile_text}>IP</span>
        </div>
      </div>
    </header>
  )
}
