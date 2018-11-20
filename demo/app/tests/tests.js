var Onfido = require("nativescript-onfido").Onfido;
var onfido = new Onfido();

describe("greet function", function() {
    it("exists", function() {
        expect(onfido.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(onfido.greet()).toEqual("Hello, NS");
    });
});