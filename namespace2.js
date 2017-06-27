/// <reference path ="namespace1.ts" />
var Food;
(function (Food) {
    var Vegetarian = (function () {
        function Vegetarian() {
        }
        Vegetarian.prototype.display = function () {
            console.log('Name of food is : Veg biryani');
        };
        return Vegetarian;
    }());
    Food.Vegetarian = Vegetarian;
})(Food || (Food = {}));
var vege = new Food.Vegetarian();
vege.display();
