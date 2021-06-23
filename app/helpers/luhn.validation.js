const luhn = require("luhn");

module.exports = (input) => {
    return luhn.validate(input);
};
