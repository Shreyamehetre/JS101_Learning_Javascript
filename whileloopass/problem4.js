let a=1;
let b=100;
sum=0;
count=0;
while(a<=100){
  if(a%2==0){
    sum=sum+a;
    count++;
  }
  a++;
}console.log(sum/count);