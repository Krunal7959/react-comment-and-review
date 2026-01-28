const arr = []
export const myReducer = (state = arr, action) => { 


    if (action.type === "ADD") {
        state = [
            ...state, action.payload
        ]
    }
    else if (action.type === "DEL") {
        const array = [...state]
        array.splice(action.payload, 1)
        return array
    }
 
    else if (action.type === "EDIT") {
        const { i, newvalue } = action.payload;
        const newarr = [...state]
        newarr[i] = newvalue
        return newarr
    }   
    return state
}