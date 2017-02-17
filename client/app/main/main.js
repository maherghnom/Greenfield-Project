angular.module('otbo5ly.main', [])

.controller('MainController', function ($scope, $window, $location, Users, OrderService) {
  $scope.data = {};

  	Users.getTodayCookings().then(function(data){
  		$scope.data.cookings = data;
  	});

  	// Users.getTopCookers().then(function(data){
  	// 	$scope.data.cookers = data;
  	// });

  	$scope.setOrder = function(UserID, cookerID, cookNameID, FullName, cookName){
		OrderService.setOrder({UserID: UserID, cookerID : cookerID,
			 cookNameID: cookNameID, FullName : FullName, cookName: cookName});
	}

})