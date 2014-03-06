var TestNetworkSnapshot = LocalSnapshot.extend(function() {
    return {
        /* Public */
        
        getActiveCells: function(callback) {
            var self = this;

            setTimeout(function() {
                callback(null, _.clone(self.activeCells));
            }, 1500);
        },

        getPredictiveCells: function(callback) {
            var self = this;

            setTimeout(function() {
                callback(null, _.clone(self.predictiveCells));
            }, 2500);
        }
    };
});
