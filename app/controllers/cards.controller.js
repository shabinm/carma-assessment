const Card = require("../db/models").Card;

const yup = require("yup");

const luhnValidate = require("../helpers/luhn.validation");
const crypto = require("../helpers/crypto");

const CreateCardSchema = yup.object({
    name: yup.string().required().matches(/^\w{1,}$/, "Card name should be a single word"),
    number: yup.string().required()
        .test(
            "card-number-invalid",
            "Provided card number is not valid",
            (value) => luhnValidate(value) === true // Validate card with luhn algorithm
        ),
    cvv: yup.string().required().matches(/^\d{3,4}$/, "CVV is not valid"),
    expiry: yup.string().required().matches(/^(0[1-9]|10|11|12)\/20[0-9]{2}$/, "Expiry date should be in the format MM/YYYY")
});

/* 
    GET /api/v1/cards
*/
const listCards = async (req, res) => {
    let cards = await Card.findAll({attributes: ['id', 'name', 'expiry']});
    res.send(cards);
}

/* 
    POST /api/v1/cards
*/
const addCard = async (req, res) => {
    try {
        await CreateCardSchema.validate(req.body);
        const card = await Card.create({
            name: req.body.name,
            number: crypto.aesEncrypt(req.body.number), // AES encrypt card number
            cvv: await crypto.bcryptHash(req.body.cvv), // Bcrypt hash of CVV
            expiry: req.body.expiry
        });
        res.send({
            id: card.id,
            name: card.name,
            expiry: card.expiry
        });
    } catch (e){
        console.error(e);
        res.status(500).send(e.errors?e.errors:["An error occured"]);
    }
}

module.exports = {
    listCards: listCards,
    addCard: addCard
};