/*
var name='Ravi';
String.prototype.reversed=function(){
    var r='';
    for(var i=this.length-1;i>=0;i--){
        r+=this[i];
    }
    return r;
}
console.log(name.reversed());
*/
/*
function parentfunc(){
    var a=4554;
function nestedfunc(){
    var b=2000;
    return a+b;
}
return nestedfunc();
};
var res=parentfunc();
console.log(res);
*/
/*
function makeadder(a){
    return function(b){
        return a+b;
    };
}
var add5=makeadder(5);
var add20=makeadder(20);
console.log(add20);
*/

/*
function sayHello(name){
    var text='hello' + name;
    var say=function(){
        console.log(text);
    }
    say();
    }
    sayHello('ravi');
*/

function one(){
    var x=12;
    return function(){
        var y=12;
        console.log(x+y);
    }
}
var res=one();
res();































