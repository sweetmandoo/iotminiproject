import { handleActions, createAction } from 'redux-actions'
import axios from 'axios'

const GET_DEVICELIST_PENDING = 'GET_DEVICELIST_PENDING'
const GET_DEVICELIST_SUCCESS = 'GET_DEVICELIST_SUCCESS'
const GET_DEVICELIST_FAILURE = 'GET_DEVICELIST_FAILURE'

const getDeviceListPending = createAction(GET_DEVICELIST_PENDING)
const getDeviceListSuccess = createAction(GET_DEVICELIST_SUCCESS)
const getDeviceListFailure = createAction(GET_DEVICELIST_FAILURE)

const initialState = {
    pending: false,
    error: false,
    data: []
}

function getDeviceListAPI(){
    return axios.get('https://iothub-manager.azurewebsites.net/api/devices/list')
}

export const getDeviceList = () => dispatch => {
    dispatch(getDeviceListPending)

    return getDeviceListAPI()
        .then((response) => {

            dispatch(getDeviceListSuccess(response))
            return response
        })
        .catch(error => {

            dispatch(getDeviceListFailure(error))
            throw(error)
        })
}

export default handleActions({
    [GET_DEVICELIST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        }
    },
    [GET_DEVICELIST_SUCCESS]: (state, action) => {
        const devices = action.payload.data

        return {
            ...state,
            pending: false,
            data : devices 
        }
    },
    [GET_DEVICELIST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState)