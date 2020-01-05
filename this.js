
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
console.log (s.Fullnamereverse());