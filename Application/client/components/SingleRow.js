import React from 'react';

const SingleRow = React.createClass({


    populateForm(obj){


      this.props.populateForm(obj);

    },

    render() {
        console.log("inner components")
        console.log(this.props)
        let isActiveUser="";
        const {gridData, i} = this.props;

        if(gridData.isActiveUser){
            isActiveUser="isActiveUser"
        }

        console.log("nishanth grid data");
        console.log(gridData);

        return (

            <tr className={isActiveUser} onClick={this.populateForm.bind(null,gridData)}>
                <td > {gridData.id}</td>
                <td> {gridData.userName}</td>
                <td> {gridData.postTitle}</td>
                <td> {gridData.views}</td>
                <td> {gridData.likes}</td>
                <td> {gridData.createdAt}</td>
            </tr>

        )
    }
});

export default SingleRow;
