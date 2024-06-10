// for (let i = 1; i < 11; i++){
//     console.log(i)
// }
// let i = 1
// while (i < 11) {
//     console.log(i)
//     i++
// }
// for (let i = 5;  i > 0; i--){
//     console.log("*" .repeat(i))
        
// }
for (let i = 5; i > 0; i--) { 
    let str = ""
    for (let j = i; j > 0; j--) {
        str += "*";
    }
    console.log(str)
}
