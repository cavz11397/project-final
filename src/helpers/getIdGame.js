const getIdGame = async () => {
    const url = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    const res = await fetch(url,{ mode: 'cors', method: 'GET'});
    const data = await res.json();
    return data;
}

export default getIdGame;
