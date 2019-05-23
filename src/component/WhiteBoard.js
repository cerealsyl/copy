import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseManagerNavBarContainer from "../container/CourseManagerNavBarContainer";
import CourseTableContainer from "../container/CourseTableContainer"
import CourseGridContainer from "../container/CourseGridContainer"
import CourseEditorContainer from "../container/CourseEditorContainer"



class WhiteBoard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <div>
                    <CourseManagerNavBarContainer/>
                    <Route exact path="/" component={CourseTableContainer}/>
                    <Route path="/course-grid" component={CourseGridContainer}/>
                    <Route path="/course-editor/:courseId" component={CourseEditorContainer}/>
                </div>
            </Router>

        );

    }


}


export default WhiteBoard;

