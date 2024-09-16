import React from "react";
import styles from './NavLink.module.scss'

const NavLink = props => {
    return ( 
        <li className={`${props.customClass ? props.customClass : null} ${styles.NavLink}`}>
            <a href={props.href}>{props.children}</a>
        </li>
     );
}
 
export default NavLink;