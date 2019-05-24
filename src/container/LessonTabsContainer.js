import {connect} from 'react-redux'
import LessonTabs from '../component/LessonTabs'

const stateToPropertyMapper = (state) => {
    // if(state.module === null) {
    //     return {module: null}
    // } else {
        return {module: state.CourseEditorReducer.module}
    // }

}

const dispatchToPropertyMapper = (dispatch) => (
    {
        createLesson: (title) => dispatch({
            type: "CREATE_LESSON",
            lessonTitle: title
        }),
        deleteLesson: (id) => dispatch({
            type: "DELETE_LESSON",
            lessonId: id
        })
    }

)







export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabs)