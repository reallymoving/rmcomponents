import React from "react";
import PropTypes from "prop-types"
import styles from './Navbar.module.scss'

const NavBar = props => {
    return ( 
        <nav className={`${props.theme === 'purple' ? styles.purple : null} ${styles.navbar}`}>{props.children}</nav>
     );
}

NavBar.propTypes = {
    theme: PropTypes.string
}
 
export default NavBar;