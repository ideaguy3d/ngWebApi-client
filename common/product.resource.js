/**
 * Created by Julius Alvarado on 1/26/2017.
 */
(function(){
    "use strict";

    var common = angular.module('common.services');
    common.factory('jaProductResource', ['$resource', 'appSettings', productResource]);
    
    function productResource($resource, appSettings) {
        return $resource(appSettings.serverPath + 'api/products/:id');
    }

}());