app.controller("summary",summary);
summary.$inject = ["$scope"];
function summary($scope) {
    $scope.summary_one = "I am from summary ctrl";
}