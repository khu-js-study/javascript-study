// Reference:
// https://cs.slides.com/colt_steele/built-in-data-structures-25

const obj = {};

obj.name = "Lee"; // Insertion, O(1)
Object.keys(obj).find((v) => v === "name"); // Searching, O(N)
console.log(obj.name); // Access, O(1)
delete obj.name; // Removal, O(1)

const arr = [];

arr.push("Lee"); // Insertion, O(1)
arr.find((v) => v === "Lee"); // Searching, O(N)
arr[0]; // Access, O(1)
arr.pop(); // Removal, O(1)

// If we use arr.unshift(), arr.shift() or dynamic allocation, It can make other Isertion, Removal Big O.
