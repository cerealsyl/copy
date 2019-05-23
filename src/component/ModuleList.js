import React from 'react'

import ModuleItem from './ModuleItem'

class ModuleList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            modules: '',
            title: ''
        }

    }

    componentDidMount() {
        this.setState({
            modules: this.props.modules
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.setState({
                modules: this.props.modules
            })
        }
    }

    inputValueChanged = event => {
        this.setState({
            title: event.target.value
        })

    }

    clearInputFld = () => {

        this.setState({
            title: ""
        })
    };

    render() {
        console.log(this.state.modules)

        let display = ""
        if (this.state.modules !== '') {
            if (this.state.modules.length )
            display =
                <div>
                    <h4>Module:</h4>
                    <ul className='list-group'>
                        <li className="list-group-item">
                            <input onChange={this.inputValueChanged}
                                   value={this.state.title}
                                className="form-control"
                                   placeholder="New Modules"/>
                            <button onClick={() => {this.props.createModule(this.state.title); this.clearInputFld()}}
                                className="btn btn-primary btn-block">
                                Add Module
                            </button>

                        </li>

                        {
                            this.state.modules.map(
                                (module) =>
                                    <ModuleItem key={module.id}
                                                module={module}
                                    deleteModule={this.props.deleteModule}
                                    editModule={this.props.editModule}
                                    selectModule={this.props.selectModule}/>
                            )
                        }
                    </ul>
                </div>

        } else {
            display = <div>Loading...</div>
        }
        return (
            <div>{display}</div>



        )
    }
}

export default ModuleList;