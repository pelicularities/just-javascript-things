const hello = 'hello (global)';
const goodbye = 'goodbye (global)'
console.log(hello);
console.log(goodbye);

const outerArrowFunction = () => {
  const hello = 'hello (outerArrowFunction)';
  const goodbye = 'goodbye (outerArrowFunction)';
  console.log(hello);
  console.log(goodbye);
  const innerArrowFunction = () => {
    const hello = 'hello (innerArrowFunction)';
    console.log(hello);
    console.log(goodbye);
  }
  innerArrowFunction();
  console.log(hello);
  console.log(goodbye);
}

function outerDeclaredFunction() {
  const hello = 'hello (outerDeclaredFunction)';
  const goodbye = 'goodbye (outerDeclaredFunction)';
  console.log(hello);
  console.log(goodbye);
  function innerDeclaredFunction() {
    const hello = 'hello (innerDeclaredFunction)';
    console.log(hello);
    console.log(goodbye);
  }
  innerDeclaredFunction();
  console.log(hello);
  console.log(goodbye);
}

if (true) {
  // console.log(hello);
  const hello = 'hello (if block)';
  console.log(hello);
  console.log(goodbye);
}

while (true) {
  console.log(hello2);
  var hello2 = 'hello (while block)';
  console.log(hello);
  console.log(goodbye);
  break;
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  const hello = `hello (forEach callback, iteration ${number})`;
  console.log(hello);
  console.log(goodbye);
});

console.log(hello);
console.log(goodbye);
outerArrowFunction();
outerDeclaredFunction();