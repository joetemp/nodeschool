var pets = ['cat', 'dog', 'rat'];

var total = 0;
var limit =  pets.length;

for (i = 0; i < limit; i++) {
	pets[i] = pets[i] + 's';
	total += i;
}

console.log(pets);
