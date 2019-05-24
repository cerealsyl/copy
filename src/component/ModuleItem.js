import React from 'react';


class ModuleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            moduleTitle: this.props.module.title,
            inputValue: ""


        }
    }

    editModule = () => {

       this.setState({
           editMode: true
       })

    };

    finishedEdit = (id) => {
        this.updateTitle()
        this.props.editModule(id, this.state.inputValue)
        this.state.inputValue = ""
    }

    moduleNameChanged = (event) => {
        this.setState({
            inputValue: event.target.value
        })

    }

    updateTitle = () => {

        this.setState({
            editMode: false,
            moduleTitle: this.state.inputValue
        })
    };


    render() {
        let display = "";

        if (this.state.editMode === false) {
            display = <li className="list-group-item">
                <div className="row">
                    <div className="col-7 module-item-title" onClick={() => this.props.selectModule(this.props.module.id)}>
                        {this.state.moduleTitle}
                    </div>
                    <div className="float-right col-5">
                        <i onClick={() => this.editModule()} className="icons color-bk fa fa-edit fa-lg mr-1"></i>
                        <i onClick={() => this.props.deleteModule(this.props.module.id)}
                           className="fa fa-trash-o fa-lg"></i>
                    </div>
                </div>
            </li>
        } else {
            display = <li className="list-group-item">
                <div className="row">
                    <input
                        className="col-lg-7 col-sm-2 col-md-4"
                        onChange={this.moduleNameChanged}
                        value={this.state.inputValue}
                        placeholder="edit module name"/>
                    <div className="float-right col-5 col-sm-1 col-md-2">
                        <i onClick={() => this.finishedEdit(this.props.module.id)} className="fa fa-check mr-1" aria-hidden="true"></i>
                        <i onClick={() => this.props.deleteModule(this.props.module.id)}
                           className="fa fa-trash-o fa-lg"></i>

                    </div>
                </div>
            </li>

        }
        return (

            <div>
                {display}
            </div>
        )

    }
}

export default ModuleItem;