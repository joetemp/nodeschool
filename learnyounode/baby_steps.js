var result = 0                              		// This variable is going to hold the result of our calculations.

for (var i = 2; i < process.argv.length; i++)       // This for loop iterates through the arguments our program is given.
	result += Number(process.argv[i])               /* Every time the for loop is run, it takes the args, turns them into numbers 
													   and adds them to result. */

console.log(result)                                 // This obviously just logs result to the console.  

