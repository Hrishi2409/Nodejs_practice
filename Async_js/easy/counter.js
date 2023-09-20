// using setInterval() funtion
// function count(){
//     let c=0
//     setInterval(()=>{
//     c++;
//     console.log(c);
// },1000)
// }
// count();

//using setTimeout() function

// function count_2(){
//     let c=0;
    
// }
let c=0;
function count_2(c){
    c++;
    console.log(c);
    count_2(c);  
}
setTimeout(count_2(c),1000);
