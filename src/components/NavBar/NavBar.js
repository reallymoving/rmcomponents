import React from "react";
import PropTypes from "prop-types"
import styles from './Navbar.module.scss'

const Navbar = props => {
    return ( 
        <nav aria-label={props.ariaLabel ? props.ariaLabel : null} className={`${props.theme === 'purple' ? styles.purple : null} ${styles.navbar}`}>{props.children}</nav>
     );
}

Navbar.propTypes = {
    theme: PropTypes.string,
    ariaLabel: PropTypes.string
}
 
export default Navbar;