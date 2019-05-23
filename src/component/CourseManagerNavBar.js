import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

import 'font-awesome/css/font-awesome.css';


class CourseManagerNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""

        }
    }

    inputChanged = event => {
        this.setState({
            title: event.target.value
        })
    };

    clearInputFld = () => {

        this.setState({
            title: ""
        })
    };

    render() {

        let r = '';
        let path = '';
        let title = '';
        let display = '';

        if (this.props.location.pathname === '/') {
            r = <i className="fa fa-th"></i>;
            path = '/course-grid';
            title = 'Title'
        } else if (this.props.location.pathname === "/course-grid") {
            r = <i className="fa fa-table"></i>;
            path = '/';
            title = 'Recent Document'
        } else {
            display = "d-none"
        }


        return(
            <div>
            <nav className={`nav navbar fixed-top navbar-light bg-light ${display}`}>
               <div className="container-fluid d-block">
                    <div className="row">
                        <div className="col-2">
                            <a className="navbar-brand" href="/">Course Manager</a>
                        </div>
                        <div className="col-8">
                            <input
                                onChange={this.inputChanged}
                                value={this.state.title}
                                className="form-control"/>
                        </div>
                        <div className="col-2">
                            <button
                                onClick={() => {this.props.createCourse(this.state.title); this.clearInputFld()}}
                                className="btn btn-md btn-success">Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container d-block mt-2">
                    <div className="row">
                        <div className="col-4">
                            {title}
                        </div>
                        <div className="col-2">
                            Owned by
                        </div>
                        <div className="col-2">
                            Last Edit
                        </div>
                        <div className="col-1">
                            <Link className="color-bk" to={path}>
                                {r}
                            </Link>
                        </div>
                        <div className="col-1">
                            <i className="fa fa-sort"></i>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </nav>
        </div>



        )
    }
}


 export default withRouter(CourseManagerNavBar);
