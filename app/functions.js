if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
        return arr[0] + ', ' + arr[1] + arr[2];
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(arg1) {
        return function (arg2) {
            return arg1 + ', ' + arg2;
        }
    },

    partial : function() {
        
    },

    useArguments : function() {

    },

    callIt : function() {

    },

    curryIt : function() {

    },

    makeClosures : function() {

    }
  };
});
