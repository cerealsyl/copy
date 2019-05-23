import CourseService from '../service/CourseService'

let courseService = CourseService.getInstance();


const CourseEditorReducer = (state = {course: null}, action) => {
    switch (action.type) {
        case "SELECT_COURSE":

            const selectedCourse = {course: courseService.findCourseById(action.id)};
            return selectedCourse;

        case "CREATE_MODULE":

            if(action.title !== "") {
                const currentCourse = state.course;
                const currentModules = currentCourse.modules;
                currentModules.push({
                    id: (new Date()).getTime().toString(),
                    title: action.title,
                    lessons: []
                });
                const newCourse = {
                    id: currentCourse.id,
                    title: currentCourse.title,
                    modules: currentModules
                };
                courseService.updateCourse(state.course.id, newCourse);
                const newState1 = {course: courseService.findCourseById(currentCourse.id)}
                console.log(newState1)
                return newState1;
            } else {
                return state;
            }
        case "DELETE_MODULE":
            const currentCourse1 = state.course;
            const currentModules1 = currentCourse1.modules.filter(module => module.id !== action.id);
            const newCourse1 = {
                id: currentCourse1.id,
                title: currentCourse1.title,
                modules: currentModules1
            }
            courseService.updateCourse(state.course.id, newCourse1);
            const newState2 = {course: courseService.findCourseById(currentCourse1.id)}
            return newState2;
        case "EDIT_MODULE":
            console.log(state)
            const currentCourse2 = state.course;
            const currentModule2 = currentCourse2.modules;
            let target = '';
            let temp = [];

            for(let i = 0; i < currentModule2.length; i++) {
                if(currentModule2[i].id === action.id) {
                    target = {
                        id: currentModule2[i].id,
                        title: action.title,
                        lessons: currentModule2[i].lessons
                    };
                    temp.push(target)
                }else{
                    temp.push(currentModule2[i])
                }
            }
            const newCourse3 = {
                id: currentCourse2.id,
                title: currentCourse2.title,
                modules: temp
            };
            const newState3 = {course: newCourse3};
            console.log(newState3);
            return newState3;
        case "SELECT_MODULE":
            let targetModule = '';
            for(let i = 0; i < state.course.modules.length; i++) {
                if(state.course.modules[i].id === action.selectedModuleId) {
                    targetModule = state.course.modules[i]
                }
            }
            const currentCourse3 = {
                id: state.course.id,
                title:state.course.title,
                modules: targetModule
            }
            const newState4 = {course: currentCourse3}
            console.log(newState4)
            return newState4;

        default:
            return state;
    }
}

export default CourseEditorReducer