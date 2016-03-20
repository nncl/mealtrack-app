var app = angular.module('mealtrack.controllers.account', []);

/*********************************************************************
 * AccountCtrl
 *********************************************************************/
app.controller('AccountCtrl', function ($scope, $state, $ionicLoading, AuthService) {

	var ref = new Firebase("https://mealtracker-nncl.firebaseio.com");
	var authData = ref.getAuth();

	console.log(authData);

	$scope.formData = {
		email: authData.password.email,
		newemail : null
	};

	$scope.submit = function (form) {
		console.log("AccountCtrl::submit");

		if (form.$valid) {
			$ionicLoading.show();
			var ref = new Firebase("https://mealtracker-nncl.firebaseio.com");
			ref.changeEmail({
			  oldEmail : $scope.formData.email,
			  newEmail : $scope.formData.newemail,
			  password : $scope.formData.password
			}, function(error) {
			  $ionicLoading.hide();

			  if (error === null) {
			    console.log("Email changed successfully");
			  } else {
			    console.log("Error changing email:", error);
			  }
			});
		};
	};


	$scope.logout = function () {
		console.log("AccountCtrl::logout");
		//TODO
	};
});
