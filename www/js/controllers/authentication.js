var app = angular.module('mealtrack.controllers.authentication', []);

/*********************************************************************
 * LoginCtrl
 *********************************************************************/
app.controller('LoginCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, AuthService) {

	$scope.formData = {
		"email": "",
		"password": ""
	};

	$scope.login = function (form) {
		console.log("LoginCtrl::login");
		if (form.$valid) {
			$ionicLoading.show();
			//TODO
			var ref = new Firebase("https://mealtracker-nncl.firebaseio.com");
			ref.authWithPassword({
			  email    : $scope.formData.email,
			  password : $scope.formData.password
			}, function(error, authData) {
				$ionicLoading.hide();
			  if (error) {
			    $ionicPopup.alert({
			    	title : 'Login failed',
			    	template : error
			    });
			  } else {
			    $state.go('tab.meals');
			  }
			});
		} else {
			console.log('Invalid');
		}
	};

});

/*********************************************************************
 * SignupCtrl
 *********************************************************************/
app.controller('SignupCtrl', function ($scope, $state, $ionicPopup,
										$ionicLoading, AuthService) {

	$scope.formData = {
		"name": "",
		"email": "",
		"password": ""
	};

	$scope.signup = function (form) {
		console.log("SignupCtrl::signup");

		if (form.$valid) {
			$ionicLoading.show();
			var ref = new Firebase("https://mealtracker-nncl.firebaseio.com");

			ref.createUser({
			  email    : $scope.formData.email,
			  password : $scope.formData.password
			}, function(error, userData) {
			  $ionicLoading.hide();

			  if (error) {
			    $ionicPopup.alert({
			    	title : 'Error creating user',
			    	template : error
			    });
			  } else {
			    var success = $ionicPopup.alert({
			    	title : 'YEAP',
			    	template : 'YEEEES!! Well done :)'
			    });

			    success.then(function(){
			    	$state.go('login');
			    });
			  }
			});
		} else {
			console.log('Invalid form');
		}
	};

});