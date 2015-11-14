var placAndOrder = function(orderNumber) {
	console.log("customer order:", orderNumber);
	cookAndDeliverFood(function () {
		console.log("Placed order", orderNumber);
	});
}

//callback gets called fater 5000 ms
function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}

//simulate web requests
placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);
placeAndOrder(5);
placeAndOrder(6);
