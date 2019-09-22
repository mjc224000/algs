const fs = require("fs");

class IO {
    readInts(url) {
        return new Promise(function (resolve, reject) {
            fs.readFile(url, function (err, data) {
                if (err) {
                    reject(err)
                    return;
                }
                data = data.toString();
                data = data.split('\n')
                data = data.map(function (item) {
                    return parseInt(item);
                })
                resolve(data)
            })
        })
    }

    Out(path, data) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(path, data, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })

        })
    }
}
function Moniter() {
    let mu = process.memoryUsage();
    let log = {}
    for (let key in mu) {
        log[key] = mu[key] / (1024 * 1024) + "MB"
    }
    return log
}

module.exports = {
    IO: new IO(),
    Moniter
}