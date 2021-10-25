let x = Math.floor(Math.random()* (10**5)) ;
console.log(x)
let negative =false
let reverse = x.toString()

if(reverse[0]==='-'){
    negative=true
    reverse=reverse.slice(1,reverse.length)
} 
reverse = reverse.split("").reverse().join()
while(reverse.includes(",")){
    reverse =reverse.replace(",","")
}
if(negative){
console.log("the reversed integer is " ,-1*parseInt(reverse))

}else{
    console.log("the reversed integer is ", parseInt(reverse))
}
