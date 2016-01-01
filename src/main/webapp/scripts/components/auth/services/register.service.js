'use strict';

angular.module('nailitApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


