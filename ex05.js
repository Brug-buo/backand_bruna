for (let i =1; i<=100; i++){
   let resul = ""

   if ( i % 3 === 0){
   resul += "Fizz"
   }
   if ( i % 5 === 0){
   resul += "Buzz"
   }

   console.log(resul || i)
}

