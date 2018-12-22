import React, {Component} from 'react'
import DeviceListContainer from '../containers/DeviceContainer'

class Device extends Component{

    render(){
        return(
            <div>
                <h1>DEVICES</h1>
                <button>Create Device</button>
                <table>
                    <thead>
                        <tr>
                            <th>DeviceID</th>
                            <th>ETag</th>
                            <th>Status</th>
                            <th>ConnectionState</th>
                            <th>AuthenticationType</th>
                        </tr>
                    </thead>
                    <DeviceListContainer />
                </table>
            </div>
        )
    }

}

export default Device