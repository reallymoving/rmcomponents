"use client"
import React from 'react'
import styles from './NavToggle.module.scss'
import PropTypes from "prop-types"

const NavToggle = props => {
    const showNav = function(e) {
        document.getElementById(props.navid).classList.toggle('slideNav')
        e.target.classList.toggle(styles.active)
    }
    return ( 
        <button className={`${props.customClass ? props.customClass : ''} ${styles.NavToggle}`} onClick={props.onClick ? props.onClick : showNav}>
            <div>
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
            </div>
        </button>
     );
}

NavToggle.propTypes = {
    navid: PropTypes.string,
    onClick: PropTypes.func,
    customClass: PropTypes.string
}
 
export default NavToggle;