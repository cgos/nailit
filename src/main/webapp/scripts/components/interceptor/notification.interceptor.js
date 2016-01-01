 'use strict';

angular.module('nailitApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-nailitApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-nailitApp-params')});
                }
                return response;
            }
        };
    });
