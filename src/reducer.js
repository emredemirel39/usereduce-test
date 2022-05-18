export const reducer = (state, action) => {

    switch (action.type) {
        case "FETCH_START":
            return { ...state, data: [], loading: true, err: '' };

        case "FETCH_SUCCESS":
            return {...state, data: action.payload, loading: false};

        case "FETCH_ERR":
            return {...state, loading: false, err: action.payload };

        default:
          return state;
    };
};