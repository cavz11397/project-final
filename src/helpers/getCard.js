const getCard = async (deck_id) => {
    const url = `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default getCard;
