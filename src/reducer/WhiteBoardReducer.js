import CourseService from '../service/CourseService'

let courseService = CourseService.getInstance();
const courses = courseService.findAllCourses();


const WhiteBoardReducer = (state = {courses: courses}, action) => {

    switch (action.type) {
        case "CREATE_COURSE":
            if(action.title !== "") {
                const newCourse = {
                    id: (new Date()).getTime().toString(),
                    title: action.title,
                    modules: []
                };
                const newState1 = {courses: courseService.createCourse(newCourse)};
                return newState1;
            }else{
                return state;
            }

        case "DELETE_COURSE":
            courseService.deleteCourse(action.id);
            const newState2 = {courses: courseService.findAllCourses()};
            return newState2;
        default:
            return state;

    }
};
export default WhiteBoardReducer