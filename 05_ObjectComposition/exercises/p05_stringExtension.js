/**
 * Created by Ivaylo on 5/23/2018.
 */

(function () {

    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if(this.length <= n){
            return this.toString();
        }
        let wordArr = this.split(' ');
        let result = '';
        for (let word of wordArr) {
            if(result.length + word.length + 1 >= n){
                return result.trim() + '...';
            }
            result += word + ' ';
        }
    };

    String.prototype.replaceAll = function (find, replace) {
        let str = this;
        return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
    };

    String.format = function (str, ...params) {
        let regex = /{(\d+)}/g;
        let match = regex.exec(str);
        let matches = [];
        while (match !== null) {
            matches.push(match);
            match = regex.exec(str);
        }
        matches.forEach(m => {
            let target = params[m[1]];
            if(target){
                str = str.toString().replaceAll(m[0], target);
            }
        });
        return str;
    }
})()




console.log(String.format('The {1} {2} fox', 'A' , 'B', 'Z', " "));