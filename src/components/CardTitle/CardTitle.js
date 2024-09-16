import React from 'react'
import styles from './cardTitle.module.scss'
import PropTypes from "prop-types"

const CardTitle = props => {
    return ( 
        <h3 id={props.id} className={`${styles.rmCardTitle} ${props.customClass ? props.customClass : ''}`}>{props.children}</h3>
     );
}

CardTitle.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string
}

export default CardTitle;