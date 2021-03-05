import React from 'react'
import styles from './ButtonFloat.module.css'

const ButtonFloat = ({ children }) => {
    
    return (
        <div className={styles.BtnContainer}>
             {children}
        </div>

    )
}

export default ButtonFloat
