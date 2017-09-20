var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.girlPoints = 0;
	$scope.boyPoints = 0;
	$scope.isRevealed = false;
	$scope.gender = {};
	
	$scope.questions = [
		{ question:'Do you think you are having a girl?', indicator: 'G' },
		{ question:'Do you think you are having a boy?', indicator: 'B' },
		{ question:'Have you had increased acne since being pregnant?', indicator: 'G' },
		{ question:'Is your age plus the year of conception an even number?', indicator: 'G' },
		{ question:"Was baby's heartbeat < 140 bpm?", indicator: 'B' },
		{ question:'Have you had bad morning sickness after the first trimester?', indicator: 'G' },
		{ question:'Are you carrying your baby high?', indicator: 'G' },
		{ question:'Have you been craving salty foods?', indicator: 'B' },
		{ question:'Have you been craving sweet foods?', indicator: 'G' },
		{ question:'Has your husband gained weight during your pregnancy?', indicator: 'G' },
		{ question:'Has your face become noticeably rounder during the pregnancy?', indicator: 'G' },
		{ question:'Have you had strong emotional mood swings?', indicator: 'G' },	
		{ question:'Have you become more of a klutz recently?', indicator: 'B' },
		{ question:'Is your skin drier than usual?', indicator: 'B' },	
		{ question:'Have your feet been unreasonably cold?', indicator: 'B' },
		{ question:'Have you suffered from headaches recently?', indicator: 'B' },		
	]

	$scope.qIndex = 0;
	$scope.currentQuestion = $scope.questions[$scope.qIndex];
	
	$scope.answerQuestion = function(response) {
		//responses: true:1, false:-1, n/a:0
		if ((response == 1 && $scope.currentQuestion.indicator == 'B') || (response == -1 && $scope.currentQuestion.indicator == 'G'))
		{
			$scope.boyPoints++;
		}
		if ((response == 1 && $scope.currentQuestion.indicator == 'G') || (response == -1 && $scope.currentQuestion.indicator == 'B'))
		{
			$scope.girlPoints++;
		}
		
		$scope.qIndex++;
		if($scope.qIndex < $scope.questions.length)
		{
			// next question
			$scope.currentQuestion = $scope.questions[$scope.qIndex];
		}
		else
		{
			// Gender Reveal
			if($scope.girlPoints > $scope.boyPoints)
			{
				// girl
				$scope.gender.announcement = "It's a GIRL!!!";
				$scope.gender.color = {"color":"pink"};
			} 
			else if($scope.girlPoints < $scope.boyPoints)
			{
				// boy
				$scope.gender.announcement = "It's a BOY!!!";
				$scope.gender.color = {"color":"blue"};
			} 
			else 
			{
				// inconclusive
				$scope.gender.announcement = "Whomp, whomp... The wisdom of the ages let you down. You'll have to wait until baby comes to find out the gender.";
				$scope.gender.color = {"color":"purple"};
			}
			
			$scope.isRevealed = true;
		}
	}
});