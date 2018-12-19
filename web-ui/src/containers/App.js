import React, {Component} from 'react'
import DeviceListContainer from './DeviceContainer'

class App extends Component {

    render(){
        return(
            <div>
                <h1>DEVICES</h1>
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

export default App