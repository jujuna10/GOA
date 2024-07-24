// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNum = numbers.map(function(value){
//         return value ** 2
    
// })
// console.log(newNum)


const manualMap = function(arr,func){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i],i))
    }

    return result
}



const numbers = [1,2,3,4,5,6,7,8,9,10]
const newArr = manualMap(numbers,function(num,index){
    if(index % 2 == 0){
       return num ** 2
    }
    return num
})

console.log(newArr)

