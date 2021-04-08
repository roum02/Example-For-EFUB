//1부터 5까지의 자연수 배열을 생성합니다
//배열 안의 모든 자연수에 3을 곱한 후 짝수만 출력합니다. 

const arr = [1, 2, 3, 4, 5];
const newarr = arr.map(num => num * 3);

for(var n = 0; n < newarr.length; n++){
  if(newarr[n]%2 == 0){
    console.log(newarr[n])
  }
}