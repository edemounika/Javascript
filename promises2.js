function loadScript(src) {
    if(src == "3.js" || src == "2.js") return Promise.reject(src+" is rejected not resolved")
    return Promise.resolve(src+" is resolved");
}
  
loadScript("1.js").then((res) => {
    console.log(res)
    return loadScript("2.js")
}).then(res => {
    console.log(res)
    return loadScript("3.js")
}).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})