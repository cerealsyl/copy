export default class CourseService {
    static myInstance = null;
    courses = [
        {
            "id": "123",
            "title": "CS5610",
            "modules": [
                {
                    "id": "module1",
                    "title": "Week 1",
                    "lessons": [
                        {
                            "id": "lesson1",
                            "title": "HTML",
                            "topics": [
                                {
                                    "id": "topic1",
                                    "title": "DOM",
                                    "widgets": [
                                        {
                                            "id": "widget1",
                                            "type": "HEADING",
                                            "size": 1,
                                            "text": "The Document Object Model"
                                        },
                                        {
                                            "id": "widget2",
                                            "type": "PARAGRAPH",
                                            "text": "This topic introduces the DOM"
                                        },
                                        {
                                            "id": "widget3",
                                            "type": "LIST",
                                            "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                        },
                                        {
                                            "id": "widget4",
                                            "type": "IMAGE",
                                            "src": "https://picsum.photos/200"
                                        },
                                        {
                                            "id": "widget5",
                                            "type": "LINK",
                                            "title": "The DOM",
                                            "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                        }
                                    ]
                                },
                                {
                                    "id": "topic2",
                                    "title": "Tags",
                                    "widgets": []
                                },
                                {
                                    "id": "topic3",
                                    "title": "Attributes",
                                    "widgets": []
                                }
                            ]
                        },
                        {
                            "id": "lesson2",
                            "title": "CSS",
                            "topics": []
                        }
                    ]
                },
                {
                    "id": "module2",
                    "title": "Week 2",
                    "lessons": []
                }
            ]
        },
        {
            "id": "234",
            "title": "CS5200",
            "modules": [
                {
                    id: "module11",
                    title: "week 5",
                    lessons: []
            }
            ]
        }
    ];

    static getInstance() {
        if(CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        this.courses = [...this.courses, course]
        return this.findAllCourses();
    }

    findAllCourses = () => {
        return this.courses;
    };

    findCourseById = id => {
        let target = null;
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].id === id) {
                target = this.courses[i]
            }
        }
        return target;
    }

    deleteCourse = id => {
        this.courses = this.courses.filter(course => course.id !== id)
    }

    updateCourse = (id, course) => {
        this.deleteCourse(id)
        this.createCourse(course)

    }



}