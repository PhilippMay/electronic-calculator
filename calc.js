var app = angular.module("calcApp", []);

app.controller("displayCtrl", function ($scope) {

    var flag = 0;
    var sum = [];
    var multi = [];
    var divide = [];
    var sub = [];
    $scope.display = "";
    $scope.updDisplay = function (val) {

        $(".display").css("font-size", "32px");

        if ($scope.display.toString().length > 9) {
            $(".display").css("font-size", "18px");
        }
        if ($scope.display.toString().length > 17) {
            $(".display").css("font-size", "12px");
        }
        if ($scope.display.toString().length > 24) {
            $scope.display = "limit reached";

        }
        if (flag === 0) {
            $scope.display += val;
        } else {
            flag = 0;
            $scope.display = val;
        }

    };
    $scope.result = function () {

        if (sum.length > 0) {
            sum.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = sum.reduce(function (a, b) {
                return a + b
            });
            sum = [];
        } else if (multi.length > 0) {
            multi.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = multi.reduce(function (a, b) {
                return a * b
            });
            multi = [];
        } else if (sub.length > 0) {
            sub.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = sub.reduce(function (a, b) {
                return a - b
            });
            sub = [];
        } else if (divide.length > 0) {
            divide.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = divide.reduce(function (a, b) {
                return a / b
            });

        };

        console.log($scope.display.toString().length);
        if ($scope.display.toString().length > 10) {
            $(".display").css("font-size", "18px");
        }

    };
    $scope.sum = function () {
        $scope.result();
        sum.push(parseFloat($scope.display));
        flag = 1;
        console.log(sum)
    };
    $scope.sub = function () {
        $scope.result();
        sub.push(parseFloat($scope.display));
        flag = 1;
    };
    $scope.multi = function () {
        $scope.result();
        multi.push(parseFloat($scope.display));
        flag = 1;
    };
    $scope.divide = function () {
        $scope.result();
        divide.push(parseFloat($scope.display));
        flag = 1;
    };
    $scope.cancel = function () {
        $scope.display = "";
        flag = 0;
        sum = [];
        multi = [];
        divide = [];
        sub = [];
    };
    $scope.sign = function () {
        if ($scope.display[0] !== "-") {
            $scope.display = "-" + $scope.display;
        }
    };
    $scope.percent = function () {

        if (sum.length > 0) {
            sum.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = sum[0] + (sum[1] * sum[0] / 100);
            sum = [];
        } else if (multi.length > 0) {
            multi.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = multi[0] * (multi[1] * multi[0] / 100);
            multi = [];
        } else if (sub.length > 0) {
            sub.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = sub[0] - (sub[1] * sub[0] / 100);
            sub = [];
        } else if (divide.length > 0) {
            divide.push(parseFloat($scope.display));
            flag = 1;
            $scope.display = divide[0] / (divide[1] * divide[0] / 100);

        };

    }




});