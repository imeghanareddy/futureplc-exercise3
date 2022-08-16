function FizzBuzz(){
  
    for (let i = 1; i<=500 ; i++ ){
  
      if (isPrime(i)){
        console.log('FizzBuzz++');
        
      }
      else if (i % 5 ===0 && i%3 ===0){
        console.log('FIZZBUZZ');
        
      }
      else if(i % 3===0){
  
        console.log('FIZZ');
        
      }
      else if(i % 5===0){
        console.log('Buzz');
      }
      
      else{
        console.log(i);
      }
      
      
    }
    return 
  }
  
  
  
  
  function isPrime(num) {
      for (let i = 2; i * i <= num; i++)
          if (num % i === 0)
            return false; 
      return num > 1;
  }
  
   FizzBuzz()