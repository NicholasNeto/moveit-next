
import { SignOutButton } from '../SignOutButton/SignOutButton';
import styles from './Menu.module.css';


export function Menu(){
    return(
        <div className={styles.menuContainer}>
            <img src="/icons/logo.svg" alt="logo" />
            <img src="/icons/house.svg" alt="House" />
            <SignOutButton />
        </div>
    )
}