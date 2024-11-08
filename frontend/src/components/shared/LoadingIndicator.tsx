import styles from './LoadingIndicator.module.scss'

const LoadingIndicator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingIndicator}>
        <div className={styles.spinner} />
      </div>
    </div>
  )
}

export default LoadingIndicator
