import CourseService from '../service/CourseService'

let courseService = CourseService.getInstance();


const CourseEditorReducer = (state = {course: null, module: null, lesson: null, topic: null}, action) => {
    switch (action.type) {
        case "SELECT_COURSE":

            const selectedCourse = {course: courseService.findCourseById(action.id), module: state.module, lesson: state.lesson, topic: state.topic};
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
                const newState1 = {course: courseService.findCourseById(currentCourse.id),  module: null, lesson: state.lesson, topic: state.topic}
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
            const newState2 = {course: courseService.findCourseById(currentCourse1.id),  module: null, lesson: state.lesson, topic: state.topic}
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

            return {course: newCourse3,  module: state.module, lesson: state.lesson, topic: state.topic};
        case "SELECT_MODULE":
            let targetModule = '';
            for(let i = 0; i < state.course.modules.length; i++) {
                if(state.course.modules[i].id === action.selectedModuleId) {
                    targetModule = state.course.modules[i]
                }
            }

            return {course: state.course, module: targetModule, lesson: null, topic: state.topic};

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

            return {course: state.course, module: newModule, lesson: state.lesson, topic: state.topic}

        case "DELETE_LESSON":
            const currentModuleLessons1 = state.module.lessons;
            const newModuleLessons1 = currentModuleLessons1.filter(lesson => lesson.id !== action.lessonId)
            const newModule1 = {
                id: state.module.id,
                title: state.module.title,
                lessons: newModuleLessons1
            }
            const newState6 = {course: state.course, module: newModule1, lesson: state.lesson, topic: state.topic}
            console.log("inside delete lesson", newState6)
            return newState6;
        case "UPDATE_LESSON":
            let newModule2 = {
                ...state.module,
            }
            newModule2.lessons = newModule2.lessons.map(lesson => {
                if(lesson.id === action.id) {
                    console.log(lesson)
                    const newLesson = {
                        id: lesson.id,
                        title: action.title,
                        topics: lesson.topics
                    }
                    console.log("newLesson", newLesson)
                    return newLesson;
                } else {
                    return lesson;
                }
            })
            return {course: state.course, module: newModule2, lesson: state.lesson, topic: state.topic}
        case "SELECT_LESSON":
            let targetLesson = "";
            for(let i=0; i < state.module.lessons.length; i++) {
                if(state.module.lessons[i].id === action.id) {
                    targetLesson = state.module.lessons[i]
                }
            }
            return {course: state.course, module: state.module, lesson: targetLesson, topic: state.topic}
        case "CREATE_TOPIC":
           const currentTopics = state.lesson.topics
            console.log(currentTopics)

            currentTopics.push({
                id: "topic" + (new Date().getTime().toString()),
                title: action.title,
                widgets: []
            });
            const newLesson1 = {
                id: state.lesson.id,
                title: state.lesson.title,
                topics: currentTopics
            };

            return {course: state.course, module: state.module, lesson: newLesson1, topic: state.topic};
        case "SELECT_TOPIC":
            let targetTopic = state.lesson.topics.filter(topic => topic.id === action.id);
            return {course: state.course, module: state.module, lesson: state.lesson, topic: targetTopic};
        case "DELETE_TOPIC":
            let targetTopic1 = state.lesson.topics.filter(topic => topic.id !== action.id);
            let newLesson3 = {
                id: state.lesson.id,
                title: state.lesson.title,
                topics: targetTopic1
            };
            return {course: state.course, module: state.module, lesson: newLesson3, topic: state.topic};
        case "UPDATE_TOPIC":
            let newLesson4 = {
                ...state.lesson,
            }
            newLesson4.topics = newLesson4.topics.map(topic => {
                if(topic.id === action.id) {
                    const newTopic = {
                        id: topic.id,
                        title: action.title,
                        widgets: topic.widgets
                    }
                    console.log("newTopic", newTopic)
                    return newTopic;
                } else {
                    return topic;
                }
            })
            console.log(newLesson4)
            return {course: state.course, module: state.module, lesson: newLesson4, topic: state.topic}
        default:
            return state;
    }
}

export default CourseEditorReducer