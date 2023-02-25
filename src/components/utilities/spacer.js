const Spacer = (props) => {
    if (props.height) {
        return (
                <div style={{height: `${props.height}px`}}></div>
            )
    } else if (props.width) {
        return (
                <div style={{width: `${props.width}px`}}></div>
            )
    } else {
        return (<div style={{height: `1px`}}></div>)
    }
}

export default Spacer;