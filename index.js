//1
function countToTwenty(){
    for(let i = 1; i <= 20; i++){
    console.log(i);  
  }
}

// countToTwenty()
//2
function countFromTwenty(){
    for(let i = 20; i >= 1; i--){
    console.log(i);  
  }
}
function countFromTwenty(){
    for(let i = 20; i >= 1; i-= 1){
    console.log(i);  
  }
}
// countFromTwenty()

//3
function countToN(N){
    for(let i = 1; i <= N; i++){
    console.log(i);  
  }
}
// countToN(16)

//4
function countFromN(N){
    for(let i = N ; i >= 1; i--){
    console.log(i);  
  }
}
// countFromN(9)

//5
function countEveryOdd(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 != 0)
    console.log(i);
  }
}

function countEveryOdd(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 === 1)
    console.log(i);
  }
}

countEveryOdd(10)