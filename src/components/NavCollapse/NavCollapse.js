import React from "react";
import styles from './NavCollapse.module.scss'
import '../../global/styles/global.scss'
import PropTypes from "prop-types"

const NavCollapse = props => {
    let bp = null

    switch (props.bp) {
        case 'sm':
            bp = styles.sm
            break;
        case 'md':
            bp = styles.md
            break;
        case 'lg':
            bp = styles.lg
            break;
        case 'xl':
            bp = styles.xl
            break;
        case 'xxl':
            bp = styles.xxl
            break;
        default:
            bp = styles.md
            break;
    }
    return ( 
        <div 
        id={props.id ? props.id : 'navCollapse'} 
        className={`${styles.NavCollapse} ${bp} ${props.customClass ? props.customClass : ''}`}
        style={{background: `#${props.bg ? props.bg : null}`}}
        >
        {props.children}
        </div>
     );
}

NavCollapse.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string,
    bg: PropTypes.string,
    bp: PropTypes.string
}
 
export default NavCollapse;