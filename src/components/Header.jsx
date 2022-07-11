import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo tipo do ignite" />
            <h1 className={styles.title}>Ingite Feed</h1>
        </header>
    )
}