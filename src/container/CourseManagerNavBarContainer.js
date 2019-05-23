import {connect} from 'react-redux'
import CourseManagerNavBar from '../component/CourseManagerNavBar'

const dispatcherToPropertyMapper = dispatcher => ({
    createCourse: (title) => dispatcher({
        type: "CREATE_COURSE",
        title: title
    })
})


export default connect(null, dispatcherToPropertyMapper)(CourseManagerNavBar)