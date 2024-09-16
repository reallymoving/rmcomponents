import React from "react"
import PropTypes from "prop-types"
import styles from "./tag.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const Tag = props => {
    return ( 
        <div className={styles.tag}>
            <FontAwesomeIcon icon={faTag} />
            <p>{props.tag}</p>
        </div>
     );
}

Tag.propTypes = {
   tag: PropTypes.string
}
 
export default Tag;