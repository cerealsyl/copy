import React from 'react';
import {Link} from 'react-router-dom'

import '../CSS/CourseList.stylesheet.css';


const CourseRow = ({course, deleteCourse, selectCourse}) => {
    return (
        <tr className="row tx-center">
            <td className="col col-sm-4 tx-center">
                <Link onClick={() => selectCourse(course.id)} className="color-bk" to={`/course-editor/${course.id}`}>
                    {course.title}
                </Link>
            </td>
            <td className="col col-sm-2 tx-center">
                me
            </td>
            <td className="col col-sm-2 tx-center">
                6:45 PM
            </td>
            <td className="lastModifiedFld col-sm-2 tx-center">
            </td>
            <td className="col col-sm-2 tx-center" id="deleteBtn">
                <button onClick={() => deleteCourse(course.id)} className="btn btn-danger">delete</button>
            </td>
        </tr>
    );

}



export default CourseRow;

// to={`/course-editor/${course.id}`}