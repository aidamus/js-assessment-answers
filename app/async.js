define(function() {
  return {
    async : function() {
    	var promise = {
    		then:function (callback) {
    			callback(true);
    		}
    	};
    	return promise;
    },

    manipulateRemoteData : function(url) {

		var promise = {
			then: function (callback){
    		    	$.getJSON(url)
                    .success(function (data) {
                        var items = [];
                        data.people.forEach(function(el) {
                            items.push(el.name);
                        });
                        callback(items.sort());
                    }); 
			}
		};

		return promise;

    }
  };
});
