module.exports = Collection;

Collection.prototype = {
    append: function (value) {
        if (Array.isArray(value.ar))
        {
            for (let i = 0; i < value.ar.length; i++)
            {
                if (value.ar[i] == null)
                {

                }
                else {
                    this.ar.push(value.ar[i]);
                }
                
            }
            var tmp = new Collection();
            tmp.ar.concat(this.ar);
            
            return tmp;
        }
        else {
            return this.ar.push(value);
        }
        
        
    },
    at: function (index) {
        return this.ar[index];
    },
    values: function () {
        var tmp = [];
        for (let i = 1; i < this.ar.length; i++)
        {
            tmp.push(this.ar[i]);
        }
        return tmp;
    },
    count: function () {
        return this.ar.length - 1;
    },
    removeAt: function (index) {
        var c = this.ar.length;
        if (index == 0) {
            return false;
        }
        if (index > 0 && index < c) {
            this.ar.splice(index, 1);
            return true;
        }   
        else {
            return false;
        }
    }
}
function Collection () {
   
        this.ar = [null];
        
}

Collection.from = function (array) {
    var x = new Collection();
    array.unshift(null);
    x.ar = array;
    return x;
};

