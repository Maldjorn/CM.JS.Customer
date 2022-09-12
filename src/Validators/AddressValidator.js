module.exports.AddressValidator = class AddressValidator {
    constructor() {}
    Validate(addressObject) {
        let errors = [];
        if (
            addressObject.addressLine.length > 100 ||
            addressObject.addressLine.length == 0 ||
            typeof addressObject.addressLine != "string"
        ) {
            errors.push("Invalid address line");
        }
        if (addressObject.addressLine1.length > 100 || typeof addressObject.addressLine1 != "string") {
            errors.push("Invalid address line 1");
        }
        if (addressObject.addressType < 0 || addressObject.addressType > 2 || typeof addressObject.addressType != "number") {
            errors.push("Invalid address type");
        }
        if (addressObject.city.length > 50 || addressObject.city.length == 0 || typeof addressObject.city != "string") {
            errors.push("Invalid city");
        }
        if (
            addressObject.postalCode.length > 6 ||
            addressObject.postalCode.length == 0 ||
            typeof addressObject.postalCode != "string"
        ) {
            errors.push("Invalid postal code");
        }
        if (addressObject.state.length > 20 || addressObject.state.length == 0 || typeof addressObject.state != "string") {
            errors.push("Invalid state");
        }
        if ((addressObject.country != "Canada" && addressObject.country != "United States") || addressObject.country.length === 0) {
            errors.push("Invalid country");
        }
        return errors;
    }
};
