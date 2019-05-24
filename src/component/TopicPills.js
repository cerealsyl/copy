import React from 'react';

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    handleNewTitle = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    createNewTopic = () => {
        this.props.createTopic(this.state.inputValue)
        this.setState({
            inputValue: ""
        })
    }

    render() {
        return (
            <div>
                {this.props.lesson === null ? (
                    <div>No Lesson selected</div>
                ) : (
                    <ul className="nav nav-pills">
                        {this.props.lesson.topics.map(
                            (topic, index) =>
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href="#">{topic.title}</a>
                                </li>
                        )}
                        <li className="nav-item ml-5">
                            <div className="row">
                                <input onChange={this.handleNewTitle}
                                       value={this.state.inputValue}
                                       className="col-6 form-control mt-1"
                                       placeholder="new lesson"/>
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