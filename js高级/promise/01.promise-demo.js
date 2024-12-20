/*setTimeout(function (){
    var a = 'hello';
    setTimeout(function (){
        var b = ' ningjing';
        setTimeout(function (){
            var c = ' I love YOU';
            console.log(a+b+c);
        },10)
    },10)
},10)*/

function concatStr1(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(str)
        }, 10)
    })
}

const promise = concatStr1('')
promise.then((value) => {
    value += 'hello '
    return value
}).then((value) => {
    value += 'lagou '
    return value
}).then((value) => {
    value += 'I love U'
    console.log(value)
    return value
})
