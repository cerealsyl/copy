
import {connect} from 'react-redux'
import CourseGrid from '../component/CourseGrid'

const stateToPropertyMapper = state => (
    {courses: state.WhiteBoardReducer.courses}
);

const dispatcherToPropertyMapper = dispatcher => (
    {
        deleteCourse : (id) => dispatcher ({
            type: "DELETE_COURSE",
            id: id
        })
    }
)

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CourseGrid)