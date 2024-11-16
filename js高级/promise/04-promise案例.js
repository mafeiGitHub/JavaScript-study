
// import { XMLHttpRequest } from 'xmlhttprequest';
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function ajax(url) {
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('get',url)
        xhr.responseType = 'json'
        xhr.onload = function() {
            if (this.status===200) {
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}
ajax("./api/foo.json").then(function(res) {
    console.log('1');
    console.log(res)
},function(err) {
    console.log('2');
    console.log(err)
})   