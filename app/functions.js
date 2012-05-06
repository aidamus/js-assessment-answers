if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
        return arr[0] + ', ' + arr[1] + arr[2];
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function() {
        var arg1 = arguments[0];
        return function (arg2) {
            return arg1 + ', ' + arg2;
        }
    },

    partial : function() {
        var fn = arguments[0];
        var args = Array.prototype.slice.call( arguments, 1 );
        return function (punctuation) {
            return fn(args[0],args[1],punctuation);
        };
    },

    useArguments : function() {
        var argumentSum = 0;
        for ( var i=0; i < arguments.length; i++ ) {
            argumentSum += arguments[i];
        }
        return argumentSum;
    },

    callIt : function() {
        var fn = arguments[0];
        var args = Array.prototype.slice.call( arguments, 1 );
        return fn.apply(null,args);
    },

    curryIt : function() {
        var fn = arguments[0];
        var args = Array.prototype.slice.call( arguments, 1 );
        return function() {
            var newArgs = Array.prototype.slice.call( arguments );
            var allArgs = args.concat(newArgs);
            return fn.apply(null, allArgs);
        };        
    },

    makeClosures : function() {
        var arr = arguments[0];
        var funcArray = [];
        arr.forEach(function (el) {
           funcArray.push(function () {
               return el*el;
           });
        });
        return funcArray;
    }
  };
});
