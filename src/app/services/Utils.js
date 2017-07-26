import Constants from './Constants';


let requestPromise = (method, url, body) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(body);
    });
}

export class Request {
    static Get(url, body) {
        return requestPromise('GET', Constants.BaseUrl + url, body);
    }

    static Post(url, body) {
        return requestPromise('POST', Constants.BaseUrl + url, body);
    }
}