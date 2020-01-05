var name='Ravi';
String.prototype.reversed=function(){
    var r='';
    for(var i=this.length-1;i>=0;i--){
        r+=this[i];
    }
    return r;
}
console.log(name.reversed());
