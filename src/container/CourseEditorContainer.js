import {connect} from 'react-redux'
import CourseEditor from '../component/CourseEditor'
import React from 'react'


const stateToPropertyMapper = (state, ownProps) => ({
    course: state.CourseEditorReducer.course,
    courseId: ownProps.match.params.courseId
})

const dispatchToPropertyMapper = (dispatch) => (
    {
        fetchSelectedCourse: (id) => console.log("dispatching") || dispatch({
            type: "SELECT_COURSE",
            id: id
        }),
    }
);


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(CourseEditor)