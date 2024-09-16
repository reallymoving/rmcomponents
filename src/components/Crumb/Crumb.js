import React from 'react';
import styles from './crumb.module.scss'
import PropTypes from "prop-types"

const Crumb = props => {
    return ( 
        <li id={props.id} className={`${styles.crumb} ${props.customClass ? props.customClass : ''}`}><a href={props.link}>{props.children}</a></li>
     );
}

Crumb.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string
}

export default Crumb;