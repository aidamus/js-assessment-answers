if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function() {
    	this.newName = arguments[1];
    	this.newGreeting = arguments[0];
    	var self = this;

    	var module = (function () {
    		
    		return {
	    		name: self.newName,
	    		greeting: self.newGreeting,
	    		sayIt: function () {
	    			return this.greeting + ', ' + this.name;
	    		}
    		};
    	})();

    	return module;
    }
  };
});

