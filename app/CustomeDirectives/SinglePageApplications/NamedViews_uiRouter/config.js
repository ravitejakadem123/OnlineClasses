app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("page_one",{
        url:"/page_one",
        views:{
            '':{
                templateUrl:"templates/page_one.html",
                controller:"page_one"
            },
            "sub_view_one@page_one":{
                templateUrl:"templates/cal.html",
                controller:"cal"
            },
            "summary@page_one":{
                templateUrl:"templates/summary.html",
                controller:"summary"
            }
        }

    })
        .state("page_two",{
            url:"/page_two",
            templateUrl:"templates/page_two.html",
            controller:"page_two"
        });

    $urlRouterProvider.otherwise("/page_one");
}