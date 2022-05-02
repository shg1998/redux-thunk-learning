export const addNumAsync = (value) => {
    return {
        type: "ADD_NUM",
        value
    }
}

export const loading = ()=>{
    return {
        type : "LOADING"
    }
}

export const addNum = value=>{
    return dispatch => {
        dispatch(loading());
        setTimeout(()=>{
            dispatch(addNumAsync(value))
        },3500)
    }
}

export const minusNum = (value) => {
    return {
        type: "MINUS_NUM",
        value
    }
}