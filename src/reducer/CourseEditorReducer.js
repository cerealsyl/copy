import CourseService from '../service/CourseService'

let courseService = CourseService.getInstance();


const CourseEditorReducer = (state = {course: null}, action) => {
    switch (action.type) {
        case "SELECT_COURSE":
            console.log("selecting course")

            const selectedCourse = {course: courseService.findCourseById(action.id)};

            return selectedCourse;

        default:
            return state;
    }
}

export default CourseEditorReducer