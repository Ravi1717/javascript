function shawinder() {
    console.log('i am shawinder');
}
function ravi(age, callback) {
    console.log("my age is " + age);
    callback();
}
ravi(23, shawinder);