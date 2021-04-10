
import { SignOutButton } from '../SignOutButton/SignOutButton';
import styles from './Menu.module.css';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
import { FaPlus } from 'react-icons/fa';


export function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.logo}>
                <img src="/icons/logo.svg" style={{ width: '48px', height: '42px' }} alt="logo" />
            </div>
            <div className={styles.home}>
                <img src="/icons/house.svg" alt="House" />
            </div>

            <div className={styles.plus}>
                <FaPlus />
            </div>
            <div>
                <ToggleSwitch />
            </div>
            <SignOutButton />
        </div>
    )
}