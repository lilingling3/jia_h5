/**
 * Created by linlin on 2017/5/22.
 */
module.exports = function (k) {
    return new Promise(function (resolve, reject) {
        window.initTheMap = function () {
            console.log("amap,,,,,,,,,amap,,,,,,,,,,,amap");
            resolve(AMap)
        }
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = 'http://webapi.amap.com/maps?v=1.3&callback=initTheMap&key=' + k
        //script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
    })
}
