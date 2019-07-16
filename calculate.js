// !Create a function that logs the result of adding two numbers (ed

const addFunction = function(a,b) {
    c = a + b
    console.log(c)
}

addFunction(2,2);

const multFunction = (num1, num2) => console.log (num1 * num2);
multFunction(7,7)


const calculate = (num1, num2, funky) => {
    funky(num1, num2);
};

calculate(15, 15, addFunction)
calculate(15, 15, multFunction)

