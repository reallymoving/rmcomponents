import React from "react";
import styles from './Nav.module.scss'
import PropTypes from "prop-types"

const Nav = props => {
    return ( 
            <ul 
            className={`${props.customClass ? props.customClass : null} 
            ${styles.nav}`}
            aria-labelledby={props.ariaLabelledBy ? props.ariaLabelledBy : null} 
            >
                {props.children}
            </ul>
     );
}

Nav.propTypes = {
    customClass: PropTypes.string
}

 
export default Nav;