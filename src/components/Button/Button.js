import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"

const Button = props => {
    let btnColor = null;
    let btnSize = null;

    switch (props.color) {
        case 'primary':
            btnColor = styles.primary
            break;
        case 'secondary':
            btnColor = styles.secondary
            break;
        case 'trans':
            btnColor = styles.trans
            break;
        case 'account':
            btnColor = styles.account
            break;
        default:
            btnColor = styles.primary
            break;
    }

    switch (props.size) {
        case 'lg':
            btnSize = styles.lg
            break;
        case 'sm':
            btnSize = styles.sm
            break;
        case 'xs':
            btnSize = styles.xs
            break;
        default:
            btnSize = styles.sm
            break;
    }

    return ( 
        <button 
        onClick={props.onClick} 
        className={`${props.customClass ? props.customClass : ''} ${styles.btn}`}
        id={props.id ? props.id : null}
        name={props.name ? props.name : null}
        type={props.type ? props.type : null}
        aria-controls={props.ariaControls ? props.ariaControls : null}
        aria-expanded={props.ariaExpanded ? props.ariaExpanded : null}
        aria-haspopup={props.ariaHasPopup ? props.ariaHasPopup : null}
        aria-label={props.ariaLabel ? props.ariaLabel : null}
        aria-labelledby={props.ariaLabelledBy ? props.ariaLabelledBy : null}
        >
                <span className={`${btnColor} ${btnSize}`}>
                    {props.label}
                    {props.children}
                </span>
        </button>
     );
}

Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    customClass: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    ariaControls: PropTypes.string,
    ariaExpanded: PropTypes.bool,
    ariaHasPopup: PropTypes.bool,
    ariaLabel: PropTypes.string,
    ariaLabelledBy: PropTypes.string
}
 
export default Button;