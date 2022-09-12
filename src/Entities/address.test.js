const { AddressValidator } = require("../Validators/AddressValidator.js");
const { Address } = require("./Address.js");

test("Should be able to create address", () => {
    let address = new Address("Address Line 1", "Address Line 2", 1, "My City", "123456", "My state", "Canada");
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual([]);
});

test("Should return address line error", () => {
    let address = new Address(
        "Address Line 1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        "Address Line 2",
        1,
        "My City",
        "123456",
        "My state",
        "Canada"
    );
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid address line"]);
});
test("Should return address line 1 error", () => {
    let address = new Address(
        "Address Line 1",
        "Address Line 2qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        1,
        "My City",
        "123456",
        "My state",
        "Canada"
    );
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid address line 1"]);
});

test("Should return address type error", () => {
    let address = new Address("Address Line 1", "Address Line 2", 5, "My City", "123456", "My state", "Canada");
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid address type"]);
});
test("Should return city error", () => {
    let address = new Address(
        "Address Line 1",
        "Address Line 2",
        2,
        "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        "123456",
        "My state",
        "Canada"
    );
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid city"]);
});

test("Should return postal code error", () => {
    let address = new Address("Address Line 1", "Address Line 2", 2, "My City", "123456222", "My state", "Canada");
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid postal code"]);
});
test("Should return satate error", () => {
    let address = new Address(
        "Address Line 1",
        "Address Line 2",
        2,
        "My City",
        "12345",
        "Stateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "Canada"
    );
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid state"]);
});

test("Should return country error", () => {
    let address = new Address("Address Line 1", "Address Line 2", 2, "My City", "12345", "My state", "Belarus");
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual(["Invalid country"]);
});
