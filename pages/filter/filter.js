/**
 * Created by amc on 2016/8/7.
 */
var app=angular.module('myApp',[]);
app.factory("data", function () {
    return {
        name:'zhangsna',
        age:23,
        salary:3456,
        com:[1,2,4,5,6,7,8],
        sex:"MALE",
        city:[{
            name:"上海",
            py:"shanghai"
        },{
            name:"北京",
            py:"beijing"
        }]
    }
});
app.controller('myController',function($scope,data,$filter){

    $scope.data=data;
   var num= $filter('number')(100000);
    console.log(num);
});