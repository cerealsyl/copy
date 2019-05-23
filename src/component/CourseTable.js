import React from 'react'
import CourseRow from './CourseRow'


const CourseTable = ({courses, deleteCourse, selectCourse}) => {
    console.log(courses);
    return (
        <div>
            <table className="table container mt-80 table-borderless">
                <tbody>
                {courses.map(
                    (course) =>
                        <CourseRow
                            key={course.id}
                            course={course}
                            deleteCourse={deleteCourse}
                            selectCourse={selectCourse}
                        />
                )
                }

                </tbody>
            </table>

        </div>

    )
}


export default CourseTable;

