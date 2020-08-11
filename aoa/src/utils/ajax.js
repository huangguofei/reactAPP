import * as URL from './url';

function getParam() {
    return {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            token: '',
        }
    }
}

function changeURLArg(url, params) {
    let returnUrl = url;
    for (var key in params) {
        returnUrl = setParam(key, params[key]);
    }

    function setParam(arg, arg_val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + arg_val;
        if (returnUrl.match(pattern)) {
            var tmp = '/(' + arg + '=)([^&]*)/gi';
            tmp = returnUrl.replace(eval(tmp), replaceText);
            return tmp;
        } else {
            if (returnUrl.match('[\?]')) {
                return returnUrl + '&' + replaceText;
            } else {
                return returnUrl + '?' + replaceText;
            }
        }
    }

    return returnUrl;
}

function get(urlType, data) {
    const param = {
        method: 'get',
        ...getParam(),
    };
    const _url = data ? changeURLArg(URL[urlType], data) : URL[urlType];

    return fetch(_url, param).then(response => {
        console.log('请求成功：' + response)
        return response;
    }).catch(err => {
        console.log('请求错误：' + err)
        return err;
    })
}

function post(urlType, data) {
    const param = {
        method: 'post',
        ...getParam(),
        body: JSON.stringify(data),
    }
    return fetch(URL[urlType], param).then(response => {
        console.log('请求成功：' + response)
        return response;
    }).catch(err => {
        console.log('请求错误：' + err)
        return err;
    })
}
export default { get, post };