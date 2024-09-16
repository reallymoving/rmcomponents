import React from "react"
import styles from './listItem.module.scss'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const ListItem = props => {
    return (
        <li className={styles.listItem}>
            {/* <div><FontAwesomeIcon icon={icon} /></div> */}
            <div>{props.children}</div>
        </li>
    )
}

export default ListItem;