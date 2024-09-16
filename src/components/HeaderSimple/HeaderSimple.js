import React from 'react'
import styles from './headerSimple.module.scss'

const HeaderSimple = props => {
    return ( 
        <header className={styles.HeaderSimple}>
            <h1>{props.title}</h1>
        </header>
     );
}
 
export default HeaderSimple;