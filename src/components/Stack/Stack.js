import React from "react"
import PropTypes from 'prop-types'

const Stack = ({children, display = 'block'}) => {
    return ( 
    <div style={{display: display}}>{children}</div> 
    );
}

Stack.propTypes = {
    display: PropTypes.string
}
 
export default Stack;