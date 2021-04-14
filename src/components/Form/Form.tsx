
import { useState } from 'react';
import styles from './Form.module.css'

export function Form() {

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


    return (

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
                    Descrição:
                <textarea
                        name="description"
                        value={description}
                        onChange={handleInputChange} />
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

            <button type="submit" >Enviar</button>
        </form>

    )
}

// "type": "body",
//     "description": "Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.",
//     "amount": 80