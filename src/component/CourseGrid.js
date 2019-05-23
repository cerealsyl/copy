import React from 'react'
import CourseCard from './CourseCard'

const CourseGrid = ({courses, deleteCourse, selectCourse}) => {

        return (
            <div className="container mt-110">
                <div className="row">
                    {courses.map(
                            (course) =>
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    deleteCourse={deleteCourse}
                                    selectCourse={selectCourse}/>
                        )
                    }
                </div>
            </div>
        );

};

export default CourseGrid