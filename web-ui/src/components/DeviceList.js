import React, {Component} from 'react'
import DeviceItem from './DeviceItem'

class DeviceList extends Component {

    componentDidMount(){
        this.loadData()
    }

    render(){

        const { deviceListData } = this.props
        const deviceList = deviceListData.map(
            (device, i) => (
                <DeviceItem
                    key={i} device={device} />
            )
        )

        return(
            <tbody>
                {deviceList}
            </tbody>
        )
    }

    loadData = () => {
        const { DeviceActions } = this.props
        DeviceActions.getDeviceList()
    }

}

export default DeviceList