const name = "Praise Chinma Obia"

let courses = ["html","css","js","design"]

console.log (name,courses)

let length = courses.length

let oddNumber = []
let evenNumber =[]

if (length % 2 == 0) {
  console.log ("evennumberofcourses");
  for (let n = 1; n <= 200; n++)
    {
      if (n % 2 == 0 ) {
          evenNumber.push(n)
      }

    } 
}
else {
    console.log("oddnumberofcourses");
  for (let n = 1; n <= 200; n++)
    {
      if (n % 2 != 0 ) {
          oddNumber.push(n)
      }

    } 

} 
console.log("evenNumber:"+evenNumber);
console.log("oddNumber:"+oddNumber);





