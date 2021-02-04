var response1 = {
    isSuccess: '1',
    arrList: [
        {name: 'zhangsan'},
        {name: 'zhangsan'}
    ]
}

var response2 = {
    isSuccess: '0',
}

function aaaa(req) {
    console.log(req);
    if(req.name == 1) {
        return response1
    } else {
        return response2
    }
}

exports.aaaa = aaaa