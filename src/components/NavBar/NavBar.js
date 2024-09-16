import React from "react";
import PropTypes from "prop-types"
import styles from './Navbar.module.scss'

const Navbar = props => {
    return ( 
        <nav className={`${props.theme === 'purple' ? styles.purple : null} ${styles.navbar}`}>{props.children}</nav>
     );
}

Navbar.propTypes = {
    theme: PropTypes.string
}
 
export default Navbar;