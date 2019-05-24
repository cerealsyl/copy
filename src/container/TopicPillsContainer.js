import {connect} from 'react-redux'
import TopicPills from '../component/TopicPills'

const stateToPropertyMapper = (state) => {
    if(state.CourseEditorReducer.lesson === "") {
        return {lesson: null}
    }else{
        return {lesson: state.CourseEditorReducer.lesson}
    }


}

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (title) => dispatch({
        type: "CREATE_TOPIC",
        title: title
    }),

    selectTopic: (id) => dispatch({
        type: "SELECT_TOPIC",
        id: id
    }),

    deleteTopic: (id) => dispatch({
        type: "DELETE_TOPIC",
        id: id
    }),
    updateTopic: (id, title) => dispatch({
        type: "UPDATE_TOPIC",
        id: id,
        title: title
    })
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPills)