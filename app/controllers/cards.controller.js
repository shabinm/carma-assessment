

const listCards = async (req, res) => {
    res.send("List cards");
}

const addCard = async (req, res) => {
    res.send("Add card");
}

module.exports = {
    listCards: listCards,
    addCard: addCard
};