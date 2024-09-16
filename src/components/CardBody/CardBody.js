import React from 'react'
import styles from './cardBody.module.scss'
import PropTypes from "prop-types"

const CardBody = props => {
    return ( 
        <div id={props.id} className={`${styles.rmCardBody} ${props.customClass ? props.customClass : ''}`}>{props.children}</div>
     );
}

CardBody.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string
}
 
export default CardBody;