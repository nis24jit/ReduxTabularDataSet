function griddata(state = [], action) {

    switch (action.type) {
        case 'ADD_ROW':
            console.log("nishanth addGrid");
            console.log(action);

            // return the new state with the new user
            let stateArrayObj = Object.assign([], state);
            var newObj = {
                id: action.currentId,
                userName: action.userName,
                postTitle: action.postTitle,
                views: action.views,
                likes: action.likes,
                createdAt: action.createdAt,
                isActiveUser: action.isActiveUser

            }
            stateArrayObj.unshift(newObj);
            return stateArrayObj;




        case 'UPDATE_ROW':



            // return the new state with the new user
            const index = action.currentId;
            return [
                ...state.slice(0,index),
                {...state[index], postTitle: action.postTitle,views:action.views, likes:action.likes},
                ...state.slice(index + 1),
            ]

        case 'FILTER_ROW':


            // return the new state with the new user

            const i = action.id;
            let stateFilter = Object.assign([], state);

            var filteredObj = stateFilter.filter(function (val) {

                return val.id === action.id;
            });

            return filteredObj;


        case 'GET_ALL_USERS':


            let stateObj = Object.assign([], action.state);
            return stateObj;


        default:
            return state;
    }
    return state;
}


export default griddata;
