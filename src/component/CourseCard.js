import React from 'react';

import '../CSS/CourseList.stylesheet.css';
import {Link} from "react-router-dom";


const CourseCard = ({course, deleteCourse, selectCourse}) =>
    <div className="col-sm-12 col-md-4 col-lg-2 mb-3">
        <div className="card">
            <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card image cap"/>
            <div className="card-body">
                <h6 className="card-title">
                    <Link onClick={()=>selectCourse(course.id)} className="color-bk" to={`/course-editor/${course.id}`}>
                        {course.title}
                    </Link>
                </h6>
                <div className="row">
                    <div className="sol-sm-6 col-md-2 col-lg-1 float-left">
                        <Link to={`/course-editor/${course.id}`}>
                            <i className="color-bk fa fa-edit fa-lg"></i>
                        </Link>

                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-1 mt-1">
                        <i onClick={()=> deleteCourse(course.id)} className="fa fa-trash-o fa-lg float-left"></i>
                    </div>
                </div>

            </div>

        </div>
    </div>;

export default CourseCard;