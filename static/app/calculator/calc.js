var app = angular.module('mainApp');

app.controller('calCtrl',['$state','$scope',function($state,$scope){
  //dropdown container
  $scope.activities = [
    {name: 'Little to no exercise', multiply: 1.2},
    {name: 'Light exercise (1–3 days per week)', multiply: 1.375}, 
    {name: 'Moderate exercise (3–5 days per week)', multiply: 1.55},
    {name: 'Heavy exercise (6–7 days per week)', multiply: 1.725},
    {name: 'Very heavy exercise (twice per day, extra heavy workouts)', multiply: 1.9}
  ];
  //dropdown container
  $scope.goals = [
    {name: 'Lose weight - 1lb per week', alt: 'tone', cals: 500}, 
    {name: 'Lose weight - 2lb per week', alt: 'tone', cals: 1000},
    {name: 'Gain weight - 1lb per week', alt: 'bulk', cals: -500},
    {name: 'Gain weight - 2lb per week', alt: 'bulk',cals: -1000},
    {name: 'Maintain weight', alt: 'tone', cals: 0}
  ];
  //function to get total BMR
  $scope.bmr = function() {
    let standard = (parseInt($scope.weight, 10) * 10) +
          (parseInt($scope.height) * 6.25) - 
          (parseInt($scope.age) * 5); //both genders only differ on the last addition or subtraction
    
      if($scope.gender === 'male'){
        return  standard + 5
      } else if ($scope.gender === 'female'){
        return standard - 161
      } else {
        return //break out and angular number validation will take care of NaN 
      }
    };
  //function to get total dailys cals
  $scope.cals = function() {
    if(Number($scope.bmr) !== NaN && $scope.selectedActivity != null && $scope.selectedGoal != null){
    return $scope.bmr() * Number($scope.selectedActivity.multiply) - Number($scope.selectedGoal.cals)
    } else {
      return
      };
  };
  //of daily cals how much should be protein
  $scope.proteinCals = function(){
   return  $scope.cals() * .55
  };
  //as above for carbs
  $scope.carbsCals = function(){
    return $scope.cals() * .25
  };
  //as above for fat
  $scope.fatCals = function(){ 
    return $scope.cals() * .2
  };
 
  
  //for each meal type, what % of the above should each contain
  $scope.breakfast = [
    {name: 'protein', value: function(){return $scope.proteinCals() * 0.0252 / 4}}, 
    {name: 'carbs', value: function(){return $scope.carbsCals() * .0933 / 4}},
    {name: 'fat', value: function(){return $scope.fatCals() * 0.3467 / 8}}
  ]; 
  $scope.snack = [
    {name: 'protein', value: function(){return $scope.proteinCals() * 0.0573 / 4}}, 
    {name: 'carbs', value: function(){return $scope.carbsCals() * .1295 / 4}},
    {name: 'fat', value: function(){return $scope.fatCals() * 0.04 / 8}}
  ]; 
  $scope.mainMeal = [
    {name: 'protein', value: function(){return $scope.proteinCals() * 0.4014 / 4}}, 
    {name: 'carbs', value: function(){return $scope.carbsCals() * .2591 / 4}},
    {name: 'fat', value: function(){return $scope.fatCals() * 0.2666 / 8}}
  ]; 
  //end of meal section
  
}]);