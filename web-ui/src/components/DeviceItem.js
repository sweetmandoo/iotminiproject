import React from 'react'

const DeviceItem = ({device}) => {

    return(
        <tr>
            <td>{device.deviceId}</td>
            <td>{device.etag}</td>
            <td>{device.status}</td>
            <td>{device.connectionState}</td>
            <td>{device.authenticationType}</td>
        </tr>
    )

}

export default DeviceItem