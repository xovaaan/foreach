var number = [10,20,30,40];
for(x=0;x<5;x++){
 console.log(number[x]);
}

number.forEach(function(x){
 console.log(x);
});
var number = [20,30,40,50];
number.forEach(function(x,index,arr){
arr[index] = x+5;
})
console.log(number);