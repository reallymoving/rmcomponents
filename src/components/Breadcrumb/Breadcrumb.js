import React from "react"
import PropTypes from "prop-types"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = props => {
    return ( 
        <ol id={props.id} className={`${styles.breadcrumb} ${props.customClass ? props.customClass : ''}`}>{props.children}</ol>
     );
}

Breadcrumb.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string
}

export default Breadcrumb;