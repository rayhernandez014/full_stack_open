const Notification = ({ message, type }) => {
    if (message === null || type === null) {
      return null
    }

    else{
        const notificationStyle = {
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        if (type === 'error'){
            notificationStyle.color = 'red'
        }
        else if (type === 'information'){
            notificationStyle.color = 'green'
        }
        return (
            <div style={notificationStyle}>
              {message}
            </div>
        )
    }
}

export default Notification