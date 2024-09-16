import React from "react"
import PropTypes from "prop-types"
import styles from "./tag.module.scss";

const Tag = props => {
    return ( 
        <div className={`${styles.tag} ${props.className ? props.className : ''}`}>
            <p>{props.tag}</p>
        </div>
     );
}

Tag.propTypes = {
   tag: PropTypes.string,
   className: PropTypes.string
}
 
export default Tag;