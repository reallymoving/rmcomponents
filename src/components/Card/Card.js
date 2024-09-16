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
            role="region" 
            aria-labelledby={props.ariaLabelledBy ? props.ariaLabelledBy : null}
        >
            {props.children}
        </div>
     );
}

Card.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string,
    align: PropTypes.string,
    theme: PropTypes.string,
    ariaLabelledBy: PropTypes.string
}

export default Card;