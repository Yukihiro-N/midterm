var prime = function(n) {
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}
   var prime = true;
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {prime = false}
   }

   return prime;
} 