import React from "react";
import styles from './DropdownItem.module.scss'
import PropTypes from "prop-types"

const DropdownItem = props => {
    return ( 
        <li>
            <a id={props.id} href={props.href} className={`${props.customClass ? props.customClass : ''}`}>{props.children}</a>
        </li>
        
     );
}

DropdownItem.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string,
    href: PropTypes.string
}
 
export default DropdownItem;