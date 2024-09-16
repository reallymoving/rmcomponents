import React from "react"
import PropTypes from "prop-types"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = props => {
    return ( 
        <nav role="navigation" aria-label="breadcrumb" className={props.className ? props.className : ''}>
            <ol id={props.id} className={`${styles.breadcrumb} ${props.className ? props.className : ''}`}>{props.children}</ol>
        </nav>
     );
}

Breadcrumb.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string
}

export default Breadcrumb;