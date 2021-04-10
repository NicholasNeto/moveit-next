
import { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import styles from './ToggleSwitch.module.css'

export function ToggleSwitch() {

    const [isLight, setIsLight] = useState(false)

    function handleToggle() {
        setIsLight(!isLight)
        console.log('teste')
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <input
                    checked={isLight}
                    className={styles.react_switch_checkbox}
                    id={`react-switch-new`}
                    type="checkbox"
                    onChange={handleToggle}
                />
                <label
                    className={styles.react_switch_label}
                    htmlFor={`react-switch-new`}
                >
                    <span className={styles.react_switch_button} />
                </label>
            </div>
            <div>
                {
                    isLight ? <FaLightbulb /> : < FaRegLightbulb />
                }
            </div>
        </div>

    )
}