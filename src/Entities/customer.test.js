const { CustomerValidator } = require("../Validators/CustomerValidator.js");
const { Customer } = require("./Customer.js");

test("Should validate customer without errors", () => {
    let customer = new Customer("John", "Cena", [1, 1], "1111111", "email@gmail.com", ["Note", "Note"], 123, new Date(2022, 1, 1));
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual([]);
});

test("Should validate customer with invalid first name", () => {
    let customer = new Customer(
        "Johnqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        "Cena",
        [1, 1],
        "1111111",
        "email@gmail.com",
        ["Note", "Note"],
        123,
        new Date(2022, 1, 1)
    );
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["First Name is invalid"]);
});

test("Should validate customer with invalid last name", () => {
    let customer = new Customer(
        "John",
        "Cenaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        [1, 1],
        "1111111",
        "email@gmail.com",
        ["Note", "Note"],
        123,
        new Date(2022, 1, 1)
    );
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Last Name is invalid"]);
});

test("Should validate customer with invalid address list", () => {
    let customer = new Customer("John", "Cena", [], "1111111", "email@gmail.com", ["Note", "Note"], 123, new Date(2022, 1, 1));
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Addresses List is invalid"]);
});

test("Should validate customer with invalid phone number", () => {
    let customer = new Customer("John", "Cena", ["address1", "address2"], "111", "email@gmail.com", ["Note", "Note"], 123, new Date(2022, 1, 1));
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Phone Number is invalid"]);
});

test("Should validate customer with invalid email", () => {
    let customer = new Customer("John", "Cena", ["address1", "address2"], "1111111111", "email@com", ["Note", "Note"], 123, new Date(2022, 1, 1));
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Email is invalid"]);
});

test("Should validate customer with invalid notes", () => {
    let customer = new Customer("John", "Cena", ["address1", "address2"], "1111111111", "email@gmail.com", [], 123, new Date(2022, 1, 1));
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Notes is invalid"]);
});

test("Should validate customer with invalid purchases amount", () => {
    let customer = new Customer(
        "John",
        "Cena",
        ["address1", "address2"],
        "1111111111",
        "email@gmail.com",
        ["Note1", "Note2"],
        "123",
        new Date(2022, 1, 1)
    );
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Total Purchases Amount is invalid"]);
});

// test("Should validate customer with null purchases amount", () => {
//     let customer = new Customer(
//         "John",
//         "Cena",
//         ["address1", "address2"],
//         "1111111111",
//         "email@gmail.com",
//         ["Note1", "Note2"],
//         null,
//         new Date(2022, 1, 1)
//     );
//     let validator = new CustomerValidator();
//     expect(validator.Validate(customer)).toEqual([]);
// });

test("Should validate customer with invalid date", () => {
    let customer = new Customer(
        "John",
        "Cena",
        ["address1", "address2"],
        "1111111111",
        "email@gmail.com",
        ["Note1", "Note2"],
        123,
        new Date(2011, 1, 1)
    );
    let validator = new CustomerValidator();
    expect(validator.Validate(customer)).toEqual(["Date is invalid"]);
});
