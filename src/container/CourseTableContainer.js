import {connect} from 'react-redux'
import CourseTable from '../component/CourseTable'

const stateToPropertyMapper = state => (

    {courses: state.WhiteBoardReducer.courses}
);

const dispatcherToPropertyMapper = dispatcher => (
    {
        deleteCourse: (id) => dispatcher({
            type: "DELETE_COURSE",
            id: id
        }),
        selectCourse: (id) => dispatcher({
            type: "SELECT_COURSE",
            id: id
        })
    }
);


export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CourseTable)