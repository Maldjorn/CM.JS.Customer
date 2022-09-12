module.exports.CustomerValidator = class CustomerValidator {
    constructor() {}

    Validate(customerObject) {
        let errors = [];
        var mailformat = /\S+@\S+\.\S+/;
        if (customerObject.firstName.length > 50 || typeof customerObject.firstName != "string") {
            errors.push("First Name is invalid");
        }
        if (customerObject.lastName.length > 50 || typeof customerObject.firstName != "string" || customerObject.lastName == "") {
            errors.push("Last Name is invalid");
        }
        if (customerObject.addressesList.length == 0 || typeof customerObject.addressesList != "object") {
            errors.push("Addresses List is invalid");
        }
        if (
            customerObject.phoneNumber.length < 5 ||
            customerObject.phoneNumber.length > 15 ||
            typeof customerObject.phoneNumber != "string"
        ) {
            errors.push("Phone Number is invalid");
        }
        if (!customerObject.email.match(mailformat)) {
            errors.push("Email is invalid");
        }
        if (customerObject.notes.length == 0 || typeof customerObject.notes != "object") {
            errors.push("Notes is invalid");
        }
        if (typeof customerObject.totalPurchasesAmount != "number") {
            errors.push("Total Purchases Amount is invalid");
        }
        if (customerObject.lastPurchaseDate < new Date(2020, 1, 1)) {
            errors.push("Date is invalid");
        }
        return errors;
    }
};
