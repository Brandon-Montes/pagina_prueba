var app = angular.module('webDinamica',['ngRoute']);

app.controller('mainCtrl',['$scope','$http', function($scope,$http){

    //copiar el menu en la var..
    $scope.navbar = "paginas/menu.html"; 

    $scope.boton = "paginas/boton.html"; 

    $scope.setActive = function(opc){
        $scope.minicio = ""; 
        $scope.msomos = "";
        $scope.mservicios = ""; 
        $scope.mtarifas = ""; 
        $scope.mlocalizacion =""; 

        $scope[opc] = "active"; 
    }
 
}]);

