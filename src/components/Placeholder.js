import React from 'react';

const Placeholder = (props) => {

    return <div style={{height: props.height || 100, minWidth: props.minWidth || 0, backgroundColor: props.color || 'red', color: '#FFFFFF60', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {props.children || 'placeholder'}
        </div>
}

export default Placeholder