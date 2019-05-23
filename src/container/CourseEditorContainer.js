import {connect} from 'react-redux'
import CourseEditor from '../component/CourseEditor'


const stateToPropertyMapper = (state, ownProps) => ({
    course: state.CourseEditorReducer.course,
    courseId: ownProps.match.params.courseId
})

const dispatchToPropertyMapper = (dispatch) => (
    {
        fetchSelectedCourse: (id) =>  dispatch({
            type: "SELECT_COURSE",
            id: id
        }),
    }
);


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(CourseEditor)