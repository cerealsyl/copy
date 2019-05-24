import {connect} from 'react-redux'
import TopicPills from '../component/TopicPills'

const stateToPropertyMapper = (state) => {
    return {lesson: state.CourseEditorReducer.lesson}
}

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (title) => dispatch({
        type: "CREATE_TOPIC",
        title: title
    })
})

export default connect(stateToPropertyMapper)(TopicPills)