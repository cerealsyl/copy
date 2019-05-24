import React from 'react'
import CourseEditorHeader from "./CourseEditorHeader";
import ModuleListContainer from '../container/ModuleListContainer'
import LessonTabsContainer from '../container/LessonTabsContainer'


class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.courseId,
        }
    }

    componentDidMount() {
        this.props.fetchSelectedCourse(this.state.courseId)
    }


    render() {

        let displayModule = "";

        if (this.props.course !== null) {
            displayModule =
                <div>
                    <CourseEditorHeader course={this.props.course}/>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-4">
                                <ModuleListContainer/>
                            </div>
                            <div className="col-8">
                                <LessonTabsContainer/>
                            </div>
                        </div>


                    </div>
                </div>
        } else {
            displayModule = <div><h3>No course selected</h3></div>
        }


        return (
            <div>{displayModule}</div>


        )
    }
}

export default CourseEditor;