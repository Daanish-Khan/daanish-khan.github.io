	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "almonds",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	}, 
	{
		name: "heavy cream",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "frozen pizza",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 7.99
	},
	{
		name: "nutella",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 4.99
	},
	{
		name: "ice cream",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 6.99
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 4.99
	},
	{
		name: "apples",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.99
	},
	{
		name: "steak",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 15.00
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicCheck) {
	let prod = []
	for (let i=0; i<prods.length; i+=1) {
		if (organicCheck) {
			if ((restriction == "LactoseIntolerant") && (prods[i].organic == true) && (prods[i].lactoseFree == true)){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
			else if ((restriction == "NutAllergies") && (prods[i].organic == true) && (prods[i].nutFree == true)){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
			else if (restriction == "None" && (prods[i].organic == true)){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
		} else {
			if ((restriction == "LactoseIntolerant") && (prods[i].lactoseFree == true)){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
			else if ((restriction == "NutAllergies") && (prods[i].nutFree == true)){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
			else if (restriction == "None"){
				prod.push({
					name: prods[i].name,
					price: prods[i].price
				});
			}
		}
	}

	var sorted_prod = prod.sort((a, b) => b.price - a.price);

	return sorted_prod;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
