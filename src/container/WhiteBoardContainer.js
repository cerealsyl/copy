import {connect} from 'react-redux'
import WhiteBoard from '../component/WhiteBoard'


const stateToPropertyMapper = (store) =>({
        courses: store.WhiteBoardReducer.courses
});


export default connect(stateToPropertyMapper)(WhiteBoard)


