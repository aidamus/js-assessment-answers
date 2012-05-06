if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'use!underscore' ], function(_) {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible the 3 and 5, the function should return
      // 'fizzbuzz';
      // otherwise the function should return the number
      if( num % 5 === 0 ) {
        if( num % 3 === 0 ) {
          return 'fizzbuzz';
        }
        return 'buzz';
      } else if ( num % 3 === 0 ) {
        return 'fizz';
      }

      return num;
    },

    or : function(a, b) {
      return a||b;
    },

    and : function(a, b) {
      return a && b; 
    }
  };
});
