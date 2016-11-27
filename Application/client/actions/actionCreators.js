
//Actiions pertaining to grid operations.

export function addGrid(userName, postTitle,views,likes,createdAt,isActiveUser,currentId) {
    return {
        type: 'ADD_ROW',

        userName,
        postTitle,
        views,
        likes,
        createdAt,
        isActiveUser,
        currentId
    }
}


export function updateUser(postTitle,views, likes,currentId) {
    return {
        type: 'UPDATE_ROW',

        postTitle,
        views,
        likes,
        currentId
    }
}





export function filterByUserName(id) {
    return {
        type: 'FILTER_ROW',

        id
    }
}



export function getAllUsers(state) {
    return {
        type: 'GET_ALL_USERS',
        state


    }
}


