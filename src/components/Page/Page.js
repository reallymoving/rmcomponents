import React from 'react'
import styles from './page.module.scss'

const Page = ({ children, link }) => {
    return ( 
        <li className={styles.page}>
            <a href={link}>{children}</a>
        </li>
     );
}
 
export default Page;