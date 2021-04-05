import { signOut } from 'next-auth/client'
import styles from './SignOutButton.module.css'

export function SignOutButton() {

    return (
        <button
            className={styles.signOutContainer}
            type="button"
            onClick={() => signOut()}
        >
            <img src="/icons/sign-out.svg" alt="House" />
        </button>
    )
}
