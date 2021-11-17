export const getAllImg = (id) => {
    return (dispatch) => {
        //   fetch placeholder data from jsonplaceholder
        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then((res) => res.json())
            .then((result) => {
                dispatch({type: 'GET_ALL_IMG', payload: result})
            })
    };
};