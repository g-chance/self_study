export const actionTypes = {
    CORRECT_GUESS: 'CORRECT GUESS',
};

export const correctGuess = () => {
    return { type: actionTypes.CORRECT_GUESS };
};