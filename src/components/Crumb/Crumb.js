import React from 'react';
import styles from './crumb.module.scss'
import PropTypes from "prop-types"

const Crumb = props => {
    let Props = {}

    props.ariaCurrent ? Props['aria-current'] = props.ariaCurrent : null

    return ( 
        <li id={props.id} className={`${styles.crumb} ${props.className ? props.className : ''}`} {...Props}>{props.children}</li>
     );
}

Crumb.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    ariaCurrent: PropTypes.string
}

export default Crumb;