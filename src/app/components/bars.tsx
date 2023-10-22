import styles from './bars.module.css'

export default function Bars() {
  return (
    <button>
      <svg className={styles.bars} viewBox="0 0 100 100" width="500">
        <rect className={styles.top} width="80" height="10" x="10" y="30"></rect>
        <rect className={styles.middle} width="80" height="10" x="10" y="50"></rect>
        <rect className={styles.bottom} width="80" height="10" x="10" y="70"></rect>
      </svg>
    </button>
  )
}