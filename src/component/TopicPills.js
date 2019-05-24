import React from 'react';

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            selectedTopic: "",
            editingTopic: "",
            newTopicTitle: ""
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.setState({
                selectedTopic: ""
            })
        }
    }


    handleNewTitle = event => {
        this.setState({
            inputValue: event.target.value
        })
    };

    createNewTopic = () => {
        this.props.createTopic(this.state.inputValue)
        this.setState({
            inputValue: ""
        })
    };

    selectTopic = (topic) => {
        this.setState({
            selectedTopic: topic
        })
    }

    handleTopicTitleChanged = (event) => {
        this.setState({
            newTopicTitle: event.target.value
        })
    }

    updateTopicName = (id) => {
        this.props.updateTopic(id, this.state.newTopicTitle)
        this.setState({
            editingTopic: null,
            newTopicTitle: ""
        })
    }

    enterEditMode = (topic) => {
        this.setState({
            editingTopic: topic
        })
    }






    render() {

        const {selectedTopic, editingTopic} = this.state
        return (
            <div>
                {(this.props.lesson === null || this.props.lesson === undefined) ? (
                    <div className="mt-4 text-sm-center text-md-center text-lg-center">No Lesson selected</div>
                ) : (
                    <ul className="mt-4 nav nav-pills nav-fill">
                        {this.props.lesson.topics.map(
                            (topic, index) => {
                                return (
                                    <li key={index} onClick={() => this.selectTopic(topic)} className="nav-item">
                                        {topic === editingTopic ? (
                                            <div className="row">
                                                <input onChange={this.handleTopicTitleChanged}
                                                       value={this.state.newTopicTitle}/>
                                                <i onClick={() => this.updateTopicName(topic.id)}
                                                   className="fa fa-check ml-1 mt-2" aria-hidden="true"></i>
                                            </div>
                                        ) : (
                                            <a onClick={() => this.props.selectTopic(topic.id)}
                                               className={`nav-link color-bk ${selectedTopic === topic ? "active" : ""}`}
                                               href="#">
                                                {topic.title}
                                                <i onClick={() => this.props.deleteTopic(topic.id)}
                                                   className=" fa fa-trash-o ml-2 mt-1"
                                                   aria-hidden="true"></i>
                                                <i onClick={() => this.enterEditMode(topic)}
                                                    className="fa fa-pencil ml-2" aria-hidden="true"></i>
                                            </a>
                                        )}

                                    </li>
                                )

                            }
                        )
                        }

                        <li className="nav-item ml-5">
                            <div className="row">
                                <input onChange={this.handleNewTitle}
                                       value={this.state.inputValue}
                                       className="col-6 form-control mt-1"
                                       placeholder="new topic"/>
                                <i onClick={this.createNewTopic}
                                   className="fa fa-plus-square-o fa-lg mt-3 ml-2"
                                   aria-hidden="true"></i>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}