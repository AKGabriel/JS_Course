//Task 1
var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number); // 9 14


//Task 2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); // 5


//Task 3
var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t); // 10 9


//Task 4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number); // {name: "Kolya", number: 67} 67


//Task 5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: {name: "Kolya"}
};


object2.str.number = object1.obj.number;

object2.str.number++;

console.log(object2.str.number); // 1 I corrected logic mistake where object2 = itself;

////////////////////////////////////////////////////////////////////////
//Part 2                             
///////////////////////////////////////////////////////////////////////

//Task 1
var r = '9' + 0; // 90
var r = 9 + '0'; // 90
var r = 4 + 9; // 13
var r = null + 7; // 7
var r = '6' + null; // 6null
var r = '6' + []; // 6
var r = '6' + null; // 6null


//Task 2
/*
false
Why? Let's see..
1/3 = 0.3333333333333333
2/4 = 0.6666666666666666
1+1/3 = 1.3333333333333333
So far, so good, BUT!!!
1+2/3 = 1.6666666666666665 for some dumb reason, rounding specifics? dunno..
and 1+2/3+1/3 = 1.9999999999999998 which isn't equal 2.

P.S. if we change places: 1+1/3+2/3 == 2 - equation becomes true.
*/


//Task 3
var r = 6 && 0 && 7; //0 (false)

var r = -9 && -8; //-8 (true)

var r = 6 && 0 && 7; //0 (false)

var r = "string" && 0; //0 (false)

var r = [] && {} && 7; //7 (true)

var r = [] || 7; //[] (true)

var r = {} || 0; //{} (true)

var r = false || true; //true (true)

var r = "2" > "3"; //false

var r = "ab" <= "fg"; //true

var r = "2k" <= "8l"; //true

var r = "2" != 2; //false

var r = "2" !== 2; //true

//var r = ++2 + 2; //5 but syntax is wrong

//var r = ++2 + 2--; //5

//var r = 1++ - 2--; //-1

////////////////////////////////////////////////////////////////////////
//Part 3                     
///////////////////////////////////////////////////////////////////////

//Task 1
var one = "1" + 2 + 3; //123
var two = 4 + false + "5" + 6; //456 because order matters!
var three = 7 + true + 6 + "8"; // 148
var four = false + true; //1


//Task 2
var t = 0;
var h = 8;

t && h && console.log(9); //0 (false)


//Task 3
var pr = 9;
var g = 0;

(g || pr) && console.log(9); //9 (pr (true))


//Task 4
var i = '1';
var j = 8;
var m = 7;

(m - j) == j; //false
(m - j) === j; //false

(m - 6) && j && console.log('Hi'); //hi (true)


//Task 5
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;
delete obj.i;

console.log(phrase); //hello


//Task 6
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var num = obj.i.y;

obj.i.y = obj.i.y + 1;

console.log(num, obj.i.y); //9 10


//Task 7
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var arr = obj.h;

obj.h[1] = 9;

console.log(arr[1], obj.h[1]); // 9 9