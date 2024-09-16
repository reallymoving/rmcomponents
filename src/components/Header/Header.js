import React from "react";
import styles from './header.module.scss'
import logo from '../../Images/logo.png'
import Button from '../Button/Button'
import Logo from "../Logo/Logo";

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo type='horizontal' width='300px' />
                {/* <img src={logo} /> */}
                <Button label='Retrieve quotes' type='trans' />
            </div>
        </header>
     );
}
 
export default Header;