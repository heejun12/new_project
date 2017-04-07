var v = 1;
var n = 1;
var maxlen = function (t) {
    let temp;
    while (n % t != 0) {
        v = (v * 10) + 1;
        n = v % t;
        temp = v.toString();
    }

    temp = temp.length;
    return temp;
};
    
console.log(maxlen(7));

// t값이 들어왔을때 10진수로 표현할때 1로만 표현될 수 있는 가장 작은 수