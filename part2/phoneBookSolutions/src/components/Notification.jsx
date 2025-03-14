const Notifications = ({notification}) => {
    const { message, isError } = notification
    
    if (!message) {
        return null
    }

    const style = {
        color: isError ? 'red' : 'green',
        background: 'lighthrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    return <div styple={style}>{message}</div>
}

export default Notifications