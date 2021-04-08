
import { SignOutButton } from '../SignOutButton/SignOutButton';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import styles from './Menu.module.css';


export function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.logo}>
                <img src="/icons/logo.svg" alt="logo" />
            </div>
            <div className={styles.home}>
                <img src="/icons/house.svg" alt="House" />
            </div>
            <div>
                <FaLightbulb />
            </div>
            <div>
            < FaRegLightbulb />
            </div>
            <SignOutButton />
        </div>
    )
}