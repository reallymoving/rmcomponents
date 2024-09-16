import React from "react";
import styles from './NavItem.module.scss'

const NavItem = props => {
    return ( 
        <li className={`${props.customClass ? props.customClass : null} ${styles.NavItem}`}>
            {props.children}
        </li>
     );
}
 
export default NavItem;