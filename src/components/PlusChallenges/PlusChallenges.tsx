import { useContext } from 'react'
import { PlusChallegeContext } from '../../contexts/PlusChallegeContext'
import styles from './PlusChallenges.module.css'

export function PlusChallenges() {

    const { show, handleAddChallege } = useContext(PlusChallegeContext)

    if (!show) {
        return null
    }

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
                    <button
                        type="button"
                        onClick={
                            () => handleAddChallege(false)
                        }
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        onClick={() => console.log('Add new challege')
                        }
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}