//-----------------------------------方法一：indexof检索-----------------------------------------
function arry(arr){
var a=[]
for(var i=0; i<arr.length;i++){
  if(a.indexOf(arr[i])==-1){
    a.push(arr[i])
    }
  }
return  a
}
var dd=[1,2,3,3,4,5,5]
console.log(arry(dd))
//------------------------------------方法二：