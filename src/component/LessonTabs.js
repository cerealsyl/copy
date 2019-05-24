import React from 'react'


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            selectedLesson: "",
            module: this.props.module,
            editMode: false
        }

    }

    selectLesson = (lesson) => {
        this.setState({
            selectedLesson: lesson
        })

    }

    addNewLesson = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    createLesson = () => {
        this.props.createLesson(this.state.inputValue)
        this.state.inputValue = ""
    }

    enterEditMode = () => {
        console.log('here')
        this.setState({
            editMode: true
        })

    }


    render() {
        let displayLessons = '';

        let titleFld = '';

        if (this.props.module !== null) {
            if (this.props.module.lessons.length > 0) {
                displayLessons =
                    <div>
                        <ul className="nav nav-pills">
                            {
                                this.props.module.lessons.map(
                                    (lesson, index) => {
                                        if (this.state.selectedLesson === null) {
                                                return (
                                                    <li key={index} onClick={() => {
                                                        this.selectLesson(lesson)
                                                    }} className="nav-item">
                                                        <a className="nav-link color-bk" href="#">
                                                            {lesson.title}
                                                            <i onClick={() => this.props.deleteLesson(lesson.id)}
                                                               className="fa fa-minus-circle ml-2 mt-1"
                                                               aria-hidden="true"></i>
                                                            <i onClick={() => this.enterEditMode()}
                                                               className="fa fa-pencil m-1" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                )

                                            } else {
                                                return (
                                                    <li key={index} onClick={() => this.selectLesson(lesson)}
                                                        className="nav-item">
                                                        <a className={lesson === this.state.selectedLesson ? "nav-link active color-bk" : "nav-link color-bk"}
                                                           href="#">
                                                            {lesson.title}
                                                            <i onClick={() => this.props.deleteLesson(lesson.id)}
                                                               className="fa fa-minus-circle ml-1 mr-2"
                                                               aria-hidden="true"></i>
                                                            <i onClick={() => this.enterEditMode(lesson.id)}
                                                               className="fa fa-pencil ml-1" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                )


                                            }

                                        }

                                )
                            }

                            <li className="nav-item ml-5">
                                <div className="row">
                                    <input onChange={this.addNewLesson}
                                           value={this.state.inputValue}
                                           className="col-6 form-control mt-1"
                                           placeholder="new lesson"/>
                                    <i onClick={this.createLesson}
                                       className="fa fa-plus-square-o fa-lg mt-3 ml-2"
                                       aria-hidden="true"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
            } else {
                displayLessons =
                    <div>
                        <h4>Current Module has no lesson</h4>
                        <h5>Add New Lesson Here: </h5>
                        <ul className="nav nav-pills">
                            <li className="nav-item ml-5">
                                <div className="row">
                                    <input onChange={this.addNewLesson}
                                           value={this.state.inputValue}
                                           className="col-6 form-control mt-1"
                                           placeholder="new lesson"/>
                                    <i onClick={this.createLesson}
                                       className="fa fa-plus-square-o fa-lg mt-3 ml-2"
                                       aria-hidden="true"></i>
                                </div>
                            </li>

                        </ul>
                    </div>
            }

        } else {
            displayLessons =
                <div> No Module selected </div>
        }

        return (
            <div>{displayLessons}</div>
        )
    }

}

