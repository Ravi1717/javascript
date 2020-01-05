
/*
function makePerson(first,last){
    return{
        first:first,
        last:last,
    };
};
function personfullname(person){
    return person.first + " " + person.last;
}
function reversename(person){
    return person.last + " " + person.first;
}
var s=makePerson('ravi','verma');
console.log(reversename(s));
*/
/*
function makePerson(first,last){
    return{
        first:first,
        last:last,
        Fullname:function(){
            return this.first +' '+ this.last;
        },
        Fullnamereverse:function(){
            return this.last +" "+ this.first;
        },
    };
};
var s=makePerson('ravi', 'verma');
console.log(s.Fullname());
*/

function person(first,last){
    this.first=first;
    this.last=last;
}
person.prototype.fullname=function(){
    return this.first + " " + this.last;
}
person.prototype.namereverse=function(){
    return this.last + " " + this.first;
};
var n1=new person('ravi','verma');
console.log(n1.fullname());

