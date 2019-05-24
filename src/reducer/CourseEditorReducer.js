import CourseService from '../service/CourseService'

let courseService = CourseService.getInstance();


const CourseEditorReducer = (state = {course: null, module: null}, action) => {
    switch (action.type) {
        case "SELECT_COURSE":

            const selectedCourse = {course: courseService.findCourseById(action.id), module: state.module};
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
                const newState1 = {course: courseService.findCourseById(currentCourse.id),  module: state.module}
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
            const newState2 = {course: courseService.findCourseById(currentCourse1.id),  module: state.module}
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

            return {course: newCourse3,  module: state.module};
        case "SELECT_MODULE":
            let targetModule = '';
            for(let i = 0; i < state.course.modules.length; i++) {
                if(state.course.modules[i].id === action.selectedModuleId) {
                    targetModule = state.course.modules[i]
                }
            }

            return {course: state.course, module: targetModule};

        case "CREATE_LESSON":
            const newLesson = {
                id: (new Date()).getTime().toString(),
                title: action.lessonTitle,
                topics: []
            }
            const currentModuleLessons = state.module.lessons;
            currentModuleLessons.push(newLesson)
            const newModule = {
                id: state.module.id,
                title: state.module.title,
                lessons: currentModuleLessons
            }

            return {course: state.course, module: newModule}

        case "DELETE_LESSON":
            const currentModuleLessons1 = state.module.lessons;
            console.log(action.lessonId)
            const newModuleLessons1 = currentModuleLessons1.filter(lesson => lesson.id !== action.lessonId)
            console.log("newLesson", newModuleLessons1)
            const newModule1 = {
                id: state.module.id,
                title: state.module.title,
                lessons: newModuleLessons1
            }
            const newState6 = {course: state.course, module: newModule1}

            return newState6;


        default:
            return state;
    }
}

export default CourseEditorReducer