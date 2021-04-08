import { signOut } from 'next-auth/client'
import { ImExit } from 'react-icons/im';
import styles from './SignOutButton.module.css'

export function SignOutButton() {

    return (
        <button
            className={styles.signOutContainer}
            type="button"
            onClick={() => signOut()}
        >
            <ImExit style={{ width: '32px', height: '32px', color: 'dimgray'}} />
        </button>
    )
}
