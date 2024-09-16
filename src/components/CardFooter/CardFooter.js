import React from 'react'
import styles from './cardFooter.module.scss'
import PropTypes from "prop-types"

const CardFooter = props => {
    return ( 
        <div id={props.id} className={`${styles.rmCardFooter} ${props.customClass ? props.customClass : ''}`}>{props.children}</div>
     );
}

CardFooter.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string
}
 
export default CardFooter;