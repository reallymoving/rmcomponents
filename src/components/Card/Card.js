import React from "react"
import PropTypes from "prop-types"
import styles from "./card.module.scss";

const Card = props => {
    return ( 
        <div
        id={props.id ? props.id : ''}
        className={`${styles.card} 
            ${props.theme === 'purple' ? styles.purple : null} ${props.customClass ? props.customClass : ''}`}
        style={props.align === 'center' ? {textAlign: 'center'} : null}
        >
            {props.children}
        </div>
     );
}

Card.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string,
    align: PropTypes.string,
    theme: PropTypes.string
}

export default Card;