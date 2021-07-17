import { connect } from 'react-redux'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        state.
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }


}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer