app.config(function($routeProvider){

$routeProvider

.when('/',{
    templateUrl: 'paginas/inicio.html',
    controller:'inicioCtrl'
})

.when('/quienes_somos',{
    templateUrl: 'paginas/quienes_somos.html',
    controller: 'somosCtrl'
})

.when('/servicios',{
    templateUrl: 'paginas/servicios.html',
    controller: 'serviciosCtrl'
})

.when('/localizacion',{
    templateUrl: 'paginas/localizacion.html',
    controller: 'localizacionCtrl'
})

.when('/tarifas',{
    templateUrl: 'paginas/tarifas.html',
    controller: 'tarifasCtrl'
})
.otherwise({
    redirectTo: '/'
})

}); 