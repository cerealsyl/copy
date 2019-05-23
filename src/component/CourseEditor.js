import React from 'react'
import CourseEditorHeader from "./CourseEditorHeader";


class CourseEditor extends React.Component {
    constructor(props) {
        console.log("mounted");
        super(props);
        this.state = {
            courseId: this.props.courseId
        }
    }

    componentDidMount() {
        this.props.fetchSelectedCourse(this.state.courseId)
    }


    render() {
        console.log("logging props", this.props)
        let display = ""
        if (this.props.course !== null) {
            display = <div>
                <CourseEditorHeader course={this.props.course}/>
                <h3>hey</h3>
            </div>
        } else {
            display = <div><h3>No course selected</h3></div>
        }

        return (
            <div>{display}</div>


        )
    }
}

// const CourseEditor = ({courses}) => {
//     return (
//         <div>
//             <CourseEditorHeader course={}/>
//             {/*<div className="container">*/}
//             {/*    <div className="row mt-3">*/}
//             {/*        <div className="col-4">*/}
//             {/*            <ModuleList*/}
//             {/*                modules={this.state.currentCourse.modules}*/}
//             {/*                selectModule={this.selectModule}/>*/}
//             {/*        </div>*/}
//             {/*        <div className="col-8">*/}
//             {/*            <div>*/}
//             {/*                <h3>Lessons: </h3>*/}
//
//             {/*            </div>*/}
//             {/*            {this.state.currentModule === "" ? (*/}
//             {/*                <h5>Please choose a module</h5>*/}
//             {/*            ) : (<LessonTabs module={this.state.currentModule}/>)}*/}
//             {/*            <div>*/}
//
//             {/*            </div>*/}
//
//             {/*        </div>*/}
//
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
//     )
// }
//
export default CourseEditor