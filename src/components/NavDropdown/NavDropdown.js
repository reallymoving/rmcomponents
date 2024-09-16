import React from "react";
import styles from './NavDropdown.module.scss'
import '../../global/styles/global.scss'

const NavDropdown = props => {

    const openDropdown = e => {
        let x = window.matchMedia("(max-width: 768px)")
        if(x.matches) {

            let drop = e.target.nextElementSibling
            if (drop.classList.contains('showNav')) {
                drop.classList.remove('showNav')
            } else if(drop.parentElement.parentElement.classList.contains('showNav')) {
                drop.classList.add('showNav')
            } else {
                let dropDowns = document.getElementsByClassName('showNav')
                for (let i = 0; i < dropDowns.length; i++) {
                    dropDowns[i].classList.toggle('showNav')
                }
                drop.classList.add('showNav')
            }
        }
    }
    return ( 
        <li className={styles.NavDropdown}>
            <a onClick={openDropdown} className={props.icon === 'down' ? styles.iconDown : styles.iconRight}>{props.title}</a>
            <ul className={styles.dropdown}>{props.children}</ul>
        </li>
     );
}
 
export default NavDropdown;