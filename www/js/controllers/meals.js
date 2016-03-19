var app = angular.module('mealtrack.controllers.meals', []);


/*********************************************************************
 * MealListCtrl
 *********************************************************************/
app.controller('MealListCtrl', function ($scope, $ionicLoading, MealService) {

	$scope.meals = MealService;

	// $ionicLoading.show();
	$scope.meals.load().then(function () {
		// $ionicLoading.hide();
	});

	$scope.refreshItems = function () {
		$scope.meals.refresh().then(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.nextPage = function () {
		$scope.meals.next().then(function () {
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};

});

/*********************************************************************
 * MealCreateCtrl
 *********************************************************************/
app.controller('MealCreateCtrl', function ($scope,
                                           $state,
                                           $ionicPopup,
                                           $ionicLoading,
                                           $cordovaCamera,
                                           MealService) {

	$scope.resetFormData = function () {
		$scope.formData = {
			'title': '',
			'category': '',
			'calories': 29,
			'picture': null
		};
	};
	$scope.resetFormData();


	$scope.trackMeal = function (form) {
		console.log("MealCreateCtrl::trackMeal");
		//TODO
	};

	// TODO: in production, add CAMERA instead of PHOTOLIBRARY
	$scope.addPicture = function () {
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY, // in production: CAMERA
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 480,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function(imageData){
			$scope.formData.picture = imageData;
		}, function error(err){
			console.log('Error');
			console.log(err);
			$ionicPopup.alert({
				title : 'Error getting picture',
				subTitle : 'We had a problem trying to get picture, please try again'
			});
		});


		//TODO


	};

});