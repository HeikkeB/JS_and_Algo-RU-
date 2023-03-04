const obj = { x: 15 };

function first() {
   return this.x; // 15
}

function second() {
		return first(); // Вернёт undefined, а нужно 15
}