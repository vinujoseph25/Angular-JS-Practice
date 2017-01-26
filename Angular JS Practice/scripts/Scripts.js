/// <reference path="angular.min.js" />
/// <reference path="angular.js" />

var myApp = angular
				.module("myModule", [])
				.controller("myController", function ($scope) {
				    var employees = [
						{ name: "Vinu", dateOfBirth: new Date("December 10 1991"), gender: "Male", salary: 55000 },
						{ name: "Vishnu", dateOfBirth: new Date("January 10 1991"), gender: "Male", salary: 60000 },
						{ name: "Arjun", dateOfBirth: new Date("March 10 1991"), gender: "Male", salary: 75000 },
						{ name: "Hiren", dateOfBirth: new Date("July 10 1991"), gender: "Male", salary: 85000 },
						{ name: "Aaron", dateOfBirth: new Date("October 10 1991"), gender: "Male", salary: 45000 }
				    ];
				    $scope.employees = employees;
				});