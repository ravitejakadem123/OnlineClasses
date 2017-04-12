app.config(config);
config.$inject=["$routeProvider"];
function config($routeProvider) {
    $routeProvider
        .when("/page_one/:param1/:param2/:param3",{
            templateUrl:"templates/page_one.html",
            controller:"page_one"
        })

        .when("/page_two/:param1/:param2/:param3",{
            templateUrl:"templates/page_two.html",
            controller:"page_two"
        })

        .otherwise("/page_one/:param1/:param2/:param3",{
            templateUrl:"templates/page_one.html",
            controller:"page_one"
        });
}