hypocriteApp.service('HypocritesService', ['$http', '$q', function($http, $q) {

    this.getHypocrites = function() {
        var d = $q.defer();
        $http.get('/hypocrites.json').success(
            
            function success(data, status, headers, config) {
                console.log(" function hit on gethypocrites service")
                
                if (status == 200) {
                    d.resolve(data);
                } else {
                    d.reject(data);
                }
            }).error(
            
            function error(data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    };

}]);