import { useContext, useState } from 'react'
import { PlusChallegeContext } from '../../contexts/PlusChallegeContext'
import { Form } from '../Form/Form'
import styles from './PlusChallenges.module.css'

export function PlusChallenges() {



    const [type, setType] = useState(undefined)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')


    function handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value

        switch (name) {
            case 'amount':
                setAmount(value);
                break;
            case 'description':
                setDescription(value)
                break
            case 'type':
                setType(value)
                break
            default:
                break
        }
    }

    function handleSubmit(event) {
        alert('Um nome foi enviado: ');
        event.preventDefault();
    }


    const { show, handleAddChallege } = useContext(PlusChallegeContext)

    if (!show) {
        return null
    }

    return (
        <div className={styles.plusChallengesContainer}>
            <div className={styles.plusChallengesContent}>
                <div className={styles.plusChallengesHeader}>
                    <h3 className={styles.plusChallengesTitle}>Adicionar novo desafio</h3>
                </div>
                <div className={styles.plusChallengesBody}>
                    {/* <Form /> */}


                    <form
                        className={styles.formContainer}
                        onSubmit={handleSubmit}
                    >

                        <div>
                            <label>
                                Desafio para o:
                                <select
                                    value={type}
                                    onChange={handleInputChange}
                                    name='type' >
                                    <option value={undefined}>Selecione</option>
                                    <option value="body">Corpo</option>
                                    <option value="eye">Olhos</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Valor:
                                <input
                                    type="number"
                                    value={amount}
                                    name="amount"
                                    onChange={handleInputChange} />
                            </label>
                        </div>

                        <div>
                            <label>
                                Descrição:
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange} />
                            </label>
                        </div>
                    </form>

                </div>
                <div className={styles.plusChallengesFooter}>
                    <div>
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
                            onClick={handleSubmit}
                        >
                            Adicionar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}