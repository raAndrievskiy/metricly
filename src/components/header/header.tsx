import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Панель управления</span>
      <div className={styles.items}>
        <div className={styles.last_day} />
        <div className={styles.btn_mode} />
        <div className={styles.profile} />
      </div>
    </div>
  )
}
