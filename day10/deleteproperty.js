function removeProperty(obj, key) {
  delete obj[key];
  // your code here
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined