const Notification = ({ message,type }) => {
    if (message === null) {
        return null
    }

    const style = {
        color: type === 'error' ? 'red' : 'green',
        background: 'lightGrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification