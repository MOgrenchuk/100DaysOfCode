let car = {
	color: 'green',
	maxSpeed: 250,
	audio: {
		brand: 'Sony',
		speakers: 12
	}
};

car.color = 'red';

console.log(typeof car.audio.brand);

console.log(car.audio.brand);