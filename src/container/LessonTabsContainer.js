import {connect} from 'react-redux'
import LessonTabs from '../component/LessonTabs'

const stateToPropertyMapper = (state) =>  ({
    modules: state.CourseEditorReducer.course.modules
})

export default connect(stateToPropertyMapper)(LessonTabs)