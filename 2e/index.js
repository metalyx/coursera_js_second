const { rejects } = require("assert");

/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var array_of_promises = [];
    for (let i = 0; i < operations.length; i++)
    {
        let promise = new Promise(function (resolve, reject) {
            operations[i](function(error, data){
                if (error){ 
                    reject(error);
                }
                if (error == null){
                    resolve(data);
                }
            });
        });
        array_of_promises.push(promise);    
    }
    Promise.all(array_of_promises)
    .then(data => callback(null, data))
    .catch(error => callback(error));
};


