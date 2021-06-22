const luhn = require("luhn");

module.exports = (input) => {
    console.log(input);
    return luhn.validate(input);
};
