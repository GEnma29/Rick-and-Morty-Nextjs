import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
const Header = () => {
    return (
        <nav className={styles.Navbar}>
                <div className={styles.NabvarItem}>
                    <h4 className={styles.NabvarTitle}>Test Rick and Morty</h4>
                </div>
            <menu className={styles.NabvarItem}>
                <Link href = "/"><a>Personajes</a></Link>
                <Link href = "/location"><a>Lugares</a></Link>
                <Link href = "/episodios"><a>Episodios</a></Link>
            </menu>
        </nav>
    )
}

export default Header
