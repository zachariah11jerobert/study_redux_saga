/* function sayHi(){
    return 'hi'
    
}
const result=sayHi();
console.log(result);

function* sayHello(){
    yield 'first'
    return'hello'
}
const test=sayHello();
console.log(test.next());
console.log(test.next());
console.log(test.next());

const second=sayHello();
for(const iterator of second){

    console.log(iterator);
} */

function* news() {
  yield "something";
  const abc = yield "abc";
  yield abc;
  let final = yield "give me value";
  return "hi";
  return "something";

}

const newGenerator = news();
console.log(newGenerator.next());
console.log(newGenerator.next());
console.log(newGenerator.next("fgg"));
console.log(newGenerator.next());
console.log(newGenerator.next("jhhj"));
console.log(newGenerator.next());
console.log(newGenerator.next());
