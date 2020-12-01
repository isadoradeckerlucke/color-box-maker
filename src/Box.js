import React from "react";

function Box({id, handleRemove, backgroundColor, width, height}) {
    const remove = () => {
        handleRemove(id)
    }
    return (<div>
        <div style = {{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor
        }}></div>
        <button onClick = {remove}>remove the box</button>
    </div>)
    
}
  

export default Box;