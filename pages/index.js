var app=angular.module('myApp',[],function($provide){
    $provide.provider("CustomerService",function(){
        this.$get=function(){
            return {
                name:"zhangsan",
                age:"25"
            }
        }
    });
    /**
     * 可以返回任何对象
     */
    $provide.factory("CustomerServiceFactory",function(){
        return [1,2,4,5,6];
    });
    /**
     * 返回对象
     */
    $provide.service("CustomerServiceService",function(){
        return ["123","ee"];
    })

});
/**
 * 模块里可以直接定义Service 和 factory 和 上边用法一样
 */
app.factory("factory1",function(){
    return [3,4,5,6];
})
app.controller('myController', function($scope,CustomerService,CustomerServiceFactory,CustomerServiceService,factory1) {
    $scope.cart=[{
        id:101,
        name:'android',
        quantity:3,
        price:2400
    },{
        id:102,
        name:'iphone',
        quantity:1,
        price:4400
    },{
        id:104,
        name:'imac',
        quantity:3,
        price:12400
    },{
        id:104,
        name:'lenove',
        quantity:2,
        price:2400
    }];
    var findItemIndex=function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key
            }
        });
        return index;
    }
    $scope.totalPrice=function(){
        var total=0.0;
        angular.forEach($scope.cart,function(item){
            total+=parseInt(item.quantity)*item.price;
        });
        return total;
    }
    $scope.totalQuantity=function(){
        var total=0.0;
        angular.forEach($scope.cart,function(item){
            total+=parseInt(item.quantity);
        });
        return total;
    }
    $scope.deleteItem=function(id){
            $scope.cart.splice(findItemIndex(id),1);
    }
    $scope.reduce=function(id){
        var index=findItemIndex(id);
        if(index!=-1){
            if($scope.cart[index].quantity>=1){
                $scope.cart[index].quantity--;
            }
        }
    };
    $scope.add=function(id){
        var index=findItemIndex(id);
        if(index!=-1){
            $scope.cart[index].quantity++;
        }
    };
    $scope.$watch('cart',function(newValue,oldvalue){
       angular.forEach(newValue,function(item,key){
           if(item.quantity<1)item.quantity=0;
       });
    },true);
    alert(CustomerService.name+CustomerServiceFactory+CustomerServiceService+factory1 )
});
