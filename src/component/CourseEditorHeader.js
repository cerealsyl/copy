import React from 'react'

import '../CSS/CourseList.stylesheet.css';


const CourseEditorHeader = ({course}) => {
    return (
        <nav className="w-100 bg-color sticky-top" style={{height: 50}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-8 w-100 tx-center color-bk">
                        <div className="mt-1 course-editor-header-title">
                            Course Editor: {course.title}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default CourseEditorHeader;