if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        arr.forEach(function(el){
            sum += el;
        });
        return sum;
    },

    remove : function(arr, item) {
        arr.splice(arr.indexOf(item), 1);
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop(arr);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice( index, 0, item );
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(el) {
            if(el === item) count++
        });
        return count;
    },

    duplicates : function(arr) {
        var dups = [];
        arr.sort(function(a,b) {
            return a - b;
        });
        var lastEl = "";
        arr.forEach(function(el) {
            if( el === lastEl ) dups.push(el);
            lastEl = el;
        })
        return dups;
    },

    square : function(arr) {
        var squares = [];
        arr.forEach(function (el) {
            squares.push(el*el);
        });
        return squares;
    }
  };
});
