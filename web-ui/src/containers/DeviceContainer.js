import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as deviceActions from '../modules/devices'
import DeviceList from '../components/DeviceList'

export default connect(
    (state) => ({
        deviceListData: state.device.data,
        loading: state.device.pending,
        error: state.device.error
    }),
    (dispatch) => ({
        DeviceActions: bindActionCreators(deviceActions, dispatch)
    })
)(DeviceList)