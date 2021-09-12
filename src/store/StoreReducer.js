const types = {
    authLogin: 'auth-login',
    authLogout: 'auth-logout',
    newGame: 'new-game',
    newCards: 'new-cards'
};

const initialStore = {
    users: {
        player1: '',
        player2: '',
    },
    cardsPlayer1: [],
    cardsPlayer2: [],
    idGame: undefined
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.authLogin:
            return { ...state, users: action.payload };
        case types.authLogout:
            return {
                users: action.payload.users,
                cardsPlayer1: action.payload.cardsPlayer1,
                cardsPlayer2: action.payload.cardsPlayer2,
                idGame: action.payload.idGame
            };
        case types.newGame:
            return { ...state, idGame: action.payload.idNewGame }
        case types.newCards:
            return {
                ...state,
                cardsPlayer1: action.payload.cardsPlayer1,
                cardsPlayer2: action.payload.cardsPlayer2
            }
        default:
            return state;
    }
}

export { types, initialStore };
export default storeReducer;