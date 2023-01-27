//var i = 0;
//while (i < 22){
//    if (i % 2 === 0){
//        console.log(i);
//    }
//    i++
//}

var aid = 0;
var sam = 0; 
do{
aid += sam; 
sam = parseInt(prompt('Напишите  число: '));
}while (sam> 0);

console.log('Сумма введенных положительных чисел: ', (-aid));