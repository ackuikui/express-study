const {aaaa} = require("./api/ajaxaaa");



function route(pathname, req) {
    console.log(pathname)
    switch(pathname) {
        case '/ajaxaaa': return aaaa(req)
        case '/ajaxbbb': return aaaa(req)
    }
}

exports.route = route;