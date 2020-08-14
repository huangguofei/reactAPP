import axios from 'axios';

axios.defaults.timeout = 10000; //超时


function headers() {
    return {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            token: 'NDM3YzA3NGU4MjU5M2M0YTVjMDczZWY5NjI5Mzk2YTE=',
        }
    }
}


function get(url, data) {

    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data,
            ...headers(),
        }).then(res => {
            console.log('请求成功：' + res)
            resolve(res.data);
        }).catch(err => {
            console.log('请求错误：' + err)
            reject(err);
        });
    })
}

function post(url, data={}) {
    return new Promise(((resolve, reject) => {
        axios.post(url, data,{
            headers: {
                // 'Content-Type': 'application/json',
                token: 'NDM3YzA3NGU4MjU5M2M0YTVjMDczZWY5NjI5Mzk2YTE=',
            }
        }).then(res => {
            console.log('请求成功：' + res)
            resolve(res.data);
        }).catch(err => {
            console.log('请求错误：' + err)
            reject(err);
        });
    }))
}

export {get, post};