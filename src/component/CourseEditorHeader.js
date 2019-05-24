import React from 'react'

import '../CSS/CourseList.stylesheet.css';


const CourseEditorHeader = ({course}) => {
    return (
        <div className="w-100 bg-color sticky-top" style={{height: 50}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-8 w-100 tx-center color-bk">
                        <h4>Course Editor: {course.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CourseEditorHeader;