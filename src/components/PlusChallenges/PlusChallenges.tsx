import styles from './PlusChallenges.module.css'

export function PlusChallenges(){
    return (
        <div className={styles.plusChallengesContainer}>
            <div className={styles.plusChallengesContent}>
                <div className={styles.plusChallengesHeader}>
                    <h4 className={styles.plusChallengesTitle}>Modal Title</h4>
                </div>
                <div className={styles.plusChallengesBody}>
                    This is modal content
                </div>
                <div className={styles.plusChallengesFooter}>
                    <button type="submit">Adicionar</button>
                </div>
            </div>
        </div>
    )
}