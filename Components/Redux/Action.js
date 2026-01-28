export const myAction = (payload) => {
    return {
        type: "ADD",
        payload
    };
};

export const delateAction = (payload) => {
    return {
        type: "DEL",
        payload
    };
};

export const editAction = (i, newvalue) => {
    return {
        type: "EDIT",
        payload: { i, newvalue }
    };
};