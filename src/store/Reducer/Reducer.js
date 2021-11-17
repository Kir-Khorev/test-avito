const initState = {
    images: [],
    imagesId: [],
    isModalOpen: false
}

export default function Reducer(state = initState, action) {
    switch (action.type) {
        case "GET_ALL_IMG": {
            return {
                ...state,
                images: action.payload,
                imagesId: 0
            }
        }
        case "OPEN_MODAL": {
            return {
                ...state,
                isModalOpen: true
            }
        }

        default: return state
    }
}