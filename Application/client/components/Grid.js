import React from 'react';
import SingleRow from './SingleRow';
import Utils from '../Utils/Utils';

const Grid = React.createClass({


    currentObj: [],

    getCurrentId(obj){

        let currentId = obj[obj.length - 1]["id"];
        return ++currentId;

    },

    showRows(number){

        var completeUserList = JSON.parse(localStorage.getItem('griddata'));
        var slicedList = completeUserList.slice(0, number);
        this.props.getAllUsers(slicedList);


    },

    populateForm: function (obj) {


        this.refs.userName.value = obj.userName;
        this.refs.postTitle.value = obj.postTitle;
        this.refs.views.value = obj.views;
        this.refs.likes.value = obj.likes;
    },

    sortUserTable(type, direction){

        var completeUserList = JSON.parse(localStorage.getItem('griddata'));

        console.log("beforeSorting");
        console.log(completeUserList);

        completeUserList.sort(Utils.dynamicSort(type, direction));
        this.props.getAllUsers(completeUserList);

    },


    getUsers: function () {


        var completeUserList = JSON.parse(localStorage.getItem('griddata'));
        this.props.getAllUsers(completeUserList);
    },

    filterUser(){

        console.log("nishanth test" + this.props.griddata);

        let userName = this.refs.filterUserName.value;
        let filteredId = this.props.griddata.filter(function (val) {


            if (val.userName === userName) {

                return val.id;
            }

        })


        this.props.filterByUserName(filteredId[0].id);


    },


    handleSubmit(e) {

        console.log(e.target.value);
        e.preventDefault();

        const userName = this.refs.userName.value;
        const postTitle = this.refs.postTitle.value;
        const views = this.refs.views.value;
        const likes = this.refs.likes.value;
        const createdAt = Utils.dateConverter();
        const isActiveUser = false;
        let currentId = this.getCurrentId(this.props.griddata);
        let newObj = {};
        var completeUserList = JSON.parse(localStorage.getItem('griddata'));
        if (userName === "") {
            return;
        }

        let isDuplicate = false;

        this.props.griddata.forEach(function (obj) {

            if (obj.userName === userName) {
                currentId = obj.id - 1;
                isDuplicate = true;
            }
        });

        if (isDuplicate) {

            this.props.updateUser(postTitle, views, likes, currentId);
            completeUserList[currentId]["id"] = currentId + 1;
            completeUserList[currentId]["userName"] = userName;
            completeUserList[currentId]["postTitle"] = postTitle;
            completeUserList[currentId]["views"] = views;
            completeUserList[currentId]["likes"] = likes;
            completeUserList[currentId]["createdAt"] = createdAt;
            completeUserList[currentId]["isActiveUser"] = false;
            localStorage.setItem('griddata', JSON.stringify(completeUserList));

        } else {

            newObj = {

                "id": currentId,
                "userName": userName,
                "postTitle": postTitle,
                "views": views,
                "likes": likes,
                "createdAt": createdAt,
                "isActiveUser": false
            }


            completeUserList.push(newObj);
            localStorage.setItem('griddata', JSON.stringify(completeUserList));

            this.props.addGrid(userName, postTitle, views, likes, createdAt, isActiveUser, currentId);

        }


        this.refs.userForm.reset();
    },


    componentDidMount() {
        localStorage.setItem('griddata', JSON.stringify(this.props.griddata));
        this.showRows(5);
    },

    render() {


        this.currentObj = this.props.griddata;
        const {gridData, i} = this.props;
        return (


            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-6">

                        <div className="bs-example">
                            <h1>Sign Up</h1>
                            <form className="form-horizontal" onSubmit={this.handleSubmit} ref="userForm">

                                <div className="form-group">
                                    <label className="control-label col-xs-3">User Name:</label>
                                    <div className="col-xs-9">
                                        <input type="text" className="form-control" id="userName"
                                               placeholder="User Name" ref="userName"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-xs-3">Post Title:</label>
                                    <div className="col-xs-9">
                                        <input type="text" className="form-control" id="postTitle"
                                               placeholder="Post Title" ref="postTitle"/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-xs-3">Views:</label>
                                    <div className="col-xs-9">
                                        <input type="text" className="form-control" id="views"
                                               placeholder="Views" ref="views"/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-xs-3">Likes:</label>
                                    <div className="col-xs-9">
                                        <input type="text" className="form-control" id="likes"
                                               placeholder="Likes" ref="likes"/>
                                    </div>
                                </div>


                                <br/>
                                <div className="form-group">
                                    <div className="col-xs-offset-3 col-xs-2">
                                        <input type="submit" className="btn btn-primary" value="Submit"/>
                                    </div>
                                </div>

                            </form>


                        </div>

                    </div>


                    <div className="form-group">
                        <button type="btn" className="btn btn-primary" onClick={this.filterUser.bind(null, i)}>Filter
                            User
                        </button>
                        <div className="col-xs-2">
                            <input type="text" className="form-control" id="filterUserName"
                                   placeholder="User Name" ref="filterUserName"/>
                        </div>
                        <button type="btn" className="btn btn-primary left-align "
                                onClick={this.getUsers.bind(null, i)}>Get
                            Users
                        </button>
                        <button type="btn" className="btn btn-primary left-align "
                                onClick={this.showRows.bind(null, 5)}>Show 5

                        </button>
                        <button type="btn" className="btn btn-primary left-align "
                                onClick={this.showRows.bind(null, 10)}>Show 10
                        </button>
                        <button type="btn" className="btn btn-primary left-align "
                                onClick={this.showRows.bind(null, 15)}>Show 15
                        </button>

                    </div>


                    <div className="col-lg-6">

                        <h2>User Table</h2>

                        <table className="table table-striped table-bordered">
                            <thead>


                            <tr>
                                <th>ID<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                            onClick={this.sortUserTable.bind(null, "id", "asc")}></span><span
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"
                                    onClick={this.sortUserTable.bind(null, "id", "desc")}></span></th>
                                <th>User name<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                                   onClick={this.sortUserTable.bind(null, "userName", "asc")}></span><span
                                    onClick={this.sortUserTable.bind(null, "userName", "desc")}
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"></span></th>
                                <th>Post title<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                                    onClick={this.sortUserTable.bind(null, "postTitle", "asc")}></span><span
                                    onClick={this.sortUserTable.bind(null, "postTitle", "desc")}
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"></span></th>
                                <th>Views<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                               onClick={this.sortUserTable.bind(null, "views", "asc")}></span><span
                                    onClick={this.sortUserTable.bind(null, "views", "desc")}
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"></span></th>
                                <th>Likes<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                               onClick={this.sortUserTable.bind(null, "likes", "asc")}></span><span
                                    onClick={this.sortUserTable.bind(null, "likes", "desc")}
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"></span></th>
                                <th>Created at<span className="glyphicon glyphicon-triangle-top sort-Icon-right"
                                                    onClick={this.sortUserTable.bind(null, "createdAt", "asc")}></span><span
                                    onClick={this.sortUserTable.bind(null, "createdAt", "desc")}
                                    className=" sort-Icon-right glyphicon glyphicon-triangle-bottom"></span></th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.props.griddata.map((single, i) => <SingleRow {...this.props} key={i} i={i}
                                                                               gridData={single}
                                                                               populateForm={this.populateForm}/>)}

                            </tbody>
                        </table>
                    </div>


                </div>

            </div>


        )
    }
});

export default Grid;
