module.exports.Address = class Address {
    constructor(addressLine, addressLine1, addressType, city, postalCode, state, country) {
        this.addressLine = addressLine;
        this.addressLine1 = addressLine1;
        this.addressType = addressType;
        this.city = city;
        this.postalCode = postalCode;
        this.state = state;
        this.country = country;
    }
};
