/// <reference path ="namespace1.ts" />
namespace Food {
	export class Vegetarian implements Veg{
		 display(){
			console.log('Name of food is : Veg biryani');
		}
	}
}

let vege = new Food.Vegetarian();
	vege.display();