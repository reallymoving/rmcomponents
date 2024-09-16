import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"

const List = props => {
    let type = null

    switch (props.type) {
        case 'pink':
            type = styles.pink
            break;
        case 'green':
            type = styles.green
            break;
        case 'pinkbullet':
            type = styles.pinkBullet
            break;
        case 'pinkchevron':
            type = styles.pinkChevron
            break;
        case 'pinkx':
            type = styles.pinkX
            break;
        default:
            type = null
            break;
    }

    return ( 
        <ul 
            className={`${styles.list} ${type ? type : null} ${props.customClass ? props.customClass : null}`}
            id={props.id ? props.id : null}
            aria-describedby={props.ariaDescribedBy ? props.ariaDescribedBy : null}
            aria-label={props.ariaLabel ? props.ariaLabel : null}
        >
            {props.children}
        </ul>
     );
}

List.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    customClass: PropTypes.string,
    ariaDescribedBy: PropTypes.string,
    ariaLabel: PropTypes.string
}
 
export default List;