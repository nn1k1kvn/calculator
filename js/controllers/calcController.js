var calcApp = angular.module('calcApp', [])
    .run(function($rootScope) {
    $rootScope.moduleName = "calcApp";
    $rootScope.message = "Модуль подключен";
});

calcApp.controller("calcController", function ($scope) {

	  $scope.servises = [{
	  	ID: 1,
        name: 'Потребительский кредит',
        chosen: false,
    },{
    	ID: 2,
        name: 'Автокредит',
        chosen: false,
    },{
    	ID: 3,
        name: 'Кредит под залог недвижимости',
        chosen: false,  
    }]

    $scope.choseServise = function (ID) {
       // ID = parseInt(ID); // преобразуем введенное значение к числу


        $scope.servises.forEach(function(servise, i, servises) {

         (servise.ID==ID)? servise.chosen = true : servise.chosen= false ; // переключатель

        /*
        	if (servise.ID==ID){
        		servise.chosen= true ;
        	}	else {
        		 servise.chosen= false ;
        	}

        	*/
        		
         console.log( i + ": " +  servise.ID +":"+ servise.name + ":" + servise.chosen);
        });


       
        
    }

});
