import React from 'react'
import TopicPillsContainer from "../container/TopicPillsContainer";

const NewLessonFld = ({onCreateLesson, onChange, value}) =>
    <li className="nav-item ml-5">
        <div className="row">
            <input onChange={onChange}
                   value={value}
                   className="col-6 form-control mt-1"
                   placeholder="new lesson"/>
            <i onClick={onCreateLesson}
               className="fa fa-plus-square-o fa-lg mt-3 ml-2"
               aria-hidden="true"></i>
        </div>
    </li>


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            selectedLesson: "",
            editingLesson: "",
            editMode: false,
            newLessonTitle: ""
        }

    }

    selectLesson = (lesson) => {
        this.setState({
            selectedLesson: lesson
        })

    };

    handleNewLessonInputChanged = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    createLesson = () => {
        this.props.createLesson(this.state.inputValue)
        this.setState({
            inputValue : ""
        })
    };



    enterEditMode = (lesson) => {
        console.log('here')
        this.setState({
            editingLesson: lesson
        })

    }
    updateLessonName = (id) => {
        console.log("inputValue", this.state.newLessonTitle)
        this.props.updateLesson(id, this.state.newLessonTitle)
        this.setState({
            editingLesson: null,
            newLessonTitle: ""
        })
    }

    handleLessonTitleChanged =(event) => {
        this.setState({
            newLessonTitle: event.target.value
        })
    }


    render() {

        const { selectedLesson, editingLesson } = this.state;

        return (
            <div>
                {this.props.module === null ? (
                    <div>No Module selected </div>
                ) : (
                    <div>
                    <ul className="nav nav-tabs">
                        {this.props.module.lessons.map((lesson, index) => {
                            return (
                                <li key={index} onClick={() => {this.selectLesson(lesson)}} className="nav-item">
                                    {lesson === editingLesson ? (
                                        <div className="row">
                                            <input onChange={this.handleLessonTitleChanged}
                                                   value={this.state.newLessonTitle}
                                                className="col-5"/>
                                            <i onClick={() => this.props.deleteLesson(lesson.id)}
                                            className="fa fa-minus-circle ml-2 mt-2"
                                            aria-hidden="true"></i>
                                            <i onClick={() => this.updateLessonName(lesson.id)}
                                                className="fa fa-check ml-1 mt-2" aria-hidden="true"
                                            ></i>
                                        </div>
                                        ) : (
                                        <a onClick={() => this.props.selectLesson(lesson.id)} className={`nav-link color-bk ${selectedLesson === lesson ? "active" : ""}`} href="#">
                                            {lesson.title}
                                            <i onClick={() => this.props.deleteLesson(lesson.id)}
                                               className="fa fa-minus-circle ml-2 mt-1"
                                               aria-hidden="true"></i>
                                            <i onClick={() => this.enterEditMode(lesson)}
                                               className="fa fa-pencil m-1" aria-hidden="true"></i>
                                        </a>
                                    )}
                                </li>
                            )
                        })}
                        <NewLessonFld
                            onChange={this.handleNewLessonInputChanged}
                            onCreateLesson={this.createLesson}
                            value={this.state.inputValue}
                        />
                    </ul>
                        {this.state.selectedLesson ? <TopicPillsContainer/> : <div> Please Select A Lesson To Display Topics</div>}
                    </div>

                )}

            </div>
        )
    }
}

