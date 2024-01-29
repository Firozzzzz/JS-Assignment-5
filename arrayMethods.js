const array1 = ['apple','samsung','mi','oneplus','oppo']
const array2 = ['spiderman','ironman','superman','batman']
const array3 = [11,12,13,14,15]
const array4 = ['red','green','blue','yellow','white','black']

// Q1.Concat //

let arrayConcat = array1.concat(array2)
//console.log(arrayConcat)

// Q2.Every //

let N = array3.every(function (num){
    if(num>=13){
        return true
    }
})
//console.log(N);

// Q3.Fill //

//let f = array2.fill('blackpanther')
//console.log(f)

// Q4.Find //


// Q5.Find Index //

let fIx = array3.findIndex((num)=>{return num>=13})
//console.log(fIx);

// Q6.Flat //

let myArray = [1,2,[3,4,[5,6]]];
let ftArray = myArray.flat(2);
//console.log("Flat array:", ftArray);

// Q7.ForEach //

array1.forEach((name)=>{
  //console.log(name);
})

// Q8.Includes //

//console.log(array1.includes('oneplus'))

// Q9.IndexOf //

//console.log(array2.indexOf('ironman'))

// Q10.Join //

//console.log(array2.join('-'))

// Q11.LastIndexOf //

//console.log(array1.lastIndexOf('samsung'))

// Q12.Pop //

array1.pop();
//console.log(array1);

// Q13.Push //

array2.push('thor','hulk')
//console.log(array2);

// Q14.Reverse //

array2.reverse();
//console.log(array2)

// Q15.Unshift //

array3.unshift(10);
//console.log(array3)

// Q16.Shift //

array1.shift()
//console.log(array1)

// Q17.Slice //

let sLc =array4.slice(2,5)
//console.log(sLc)

// Q18.Some //

const even = (element) => element % 2 === 0;
//console.log(array3.some(even));

// Q19.Sort //

//console.log(array3.sort())

// Q20.Splice //

array4.splice(1,0,"orange")
//console.log(array4)

// Q21.ToString //

//console.log(array4.toString())

// Q22.Filter //

let fItr = array3.filter((num)=>{

  if(num>16){
    return num
  }

})

//console.log(fItr);

// Q23.Reduce //

let reducedvalue = array3.reduce((acc,num)=>{
  return acc+num
})
//console.log(reducedvalue);


// Q24.Map //

let mp =array3.map((num)=>{
  return num**2
})
//console.log(mp)
