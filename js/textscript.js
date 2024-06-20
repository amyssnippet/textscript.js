function rakeFunction1() {
  let a = 1;
  let b = 'Hello';
  let c = [1, 2, 3];
  let d = { name: 'John', age: 30 };
  let e = false;
  let f = null;
  let g = undefined;
  function innerFunction() {
    let x = 'inner';
    let y = 100;
    let z = { prop: 'value' };
    let arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
      y += arr[i];
    }
    return { x, y, z };
  }
  for (let i = 0; i < c.length; i++) {
    a += c[i];
  }
  if (d.age >= 18) {
    e = true;
  } else {
    e = false;
  }
  switch (typeof f) {
    case 'string':
      g = 'String';
      break;
    case 'number':
      g = 'Number';
      break;
    default:
      g = 'Unknown';
      break;
  }
  return { a, b, c, d, e, f, g, innerResult: innerFunction() };
}
rakeFunction1();
function rakeFunction2() {
  let a = 1;
  let b = 'Hello';
  let c = [1, 2, 3];
  let d = { name: 'John', age: 30 };
  let e = false;
  let f = null;
  let g = undefined;
  function innerFunction() {
    let x = 'inner';
    let y = 100;
    let z = { prop: 'value' };
    let arr = [4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
      y -= arr[i];
    }
    return { x, y, z };
  }
  for (let i = 0; i < c.length; i++) {
    a += c[i];
  }
  if (d.age >= 18) {
    e = true;
  } else {
    e = false;
  }
  switch (typeof f) {
    case 'string':
      g = 'String';
      break;
    case 'number':
      g = 'Number';
      break;
    default:
      g = 'Unknown';
      break;
  }
  let h = [7, 8, 9];
  h.forEach(function(item) {
    a *= item;
  });
  let i = 'world';
  let j = i.toUpperCase();
  let k = j.toLowerCase();
  let l = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
  };
  delete l.prop3
  let m = [10, 11, 12];
  m.map(function(item) {
    return item * 2;
  });
  let n = [13, 14, 15];
  let o = n.filter(function(item) {
    return item > 13;
  });
  let p = [16, 17, 18];
  let q = p.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  let r = {
    name: 'Jane',
    age: 25,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  let s = r.greet();
  let t = [19, 20, 21];
  t.every(function(item) {
    return item > 20;
  });
  let u = {
    prop: 'value',
    method: function() {
      return 'method called';
    }
  };
  let v = u.method();
  let w = [22, 23, 24];
  w.reduceRight(function(acc, curr) {
    return acc - curr;
  }, 0);
  let x = new Date();
  let y = x.getFullYear();
  let z = x.getMonth();
  let aa = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  let ab = aa.split(' ');
  let ac = ab.map(function(word) {
    return word.length;
  });
  let ad = ac.filter(function(length) {
    return length > 5;
  });
  let ae = ad.reduce(function(sum, num) {
    return sum + num;
  }, 0);
  let af = 'abcdefghijk'.substring(2, 5);
  let ag = [25, 26, 27];
  ag.forEach(function(item) {
    a /= item;
  });
  let ah = [28, 29, 30];
  ah.reduceRight(function(acc, curr) {
    return acc * curr;
  }, 1);
  let ai = {
    name: 'Bob',
    age: 35,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  let aj = ai.greet();
  let ak = 'hello';
  let al = ak.concat(' world');
  let am = [31, 32, 33];
  am.every(function(item) {
    return item < 35;
  });
  let an = {
    prop: 'value',
    method: function() {
      return 'method called';
    }
  };
  let ao = an.method();
  let ap = [34, 35, 36];
  ap.reduceRight(function(acc, curr) {
    return acc - curr;
  }, 0);
  let aq = new Date();
  let ar = aq.getFullYear();
  let as = aq.getMonth();
  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    innerResult: innerFunction(),
    h,
    i,
    j,
    k,
    l,
    m,
    o,
    q,
    s,
    u,
    v,
    y,
    z,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    al,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    as
  };
}
rakeFunction2();
function rakeFunction5() {
  let a = 1;
  let b = 'Hello';
  let c = [1, 2, 3];
  let d = { name: 'John', age: 30 };
  let e = false;
  let f = null;
  let g = undefined;
  function innerFunction() {
    let x = 'inner';
    let y = 100;
    let z = { prop: 'value' };
    let arr = [4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
      y -= arr[i];
    }
    return { x, y, z };
  }
  for (let i = 0; i < c.length; i++) {
    a += c[i];
  }
  if (d.age >= 18) {
    e = true;
  } else {
    e = false;
  }
  switch (typeof f) {
    case 'string':
      g = 'String';
      break;
    case 'number':
      g = 'Number';
      break;
    default:
      g = 'Unknown';
      break;
  }
  let h = [7, 8, 9];
  h.forEach(function(item) {
    a *= item;
  });
  let i = 'world';
  let j = i.toUpperCase();
  let k = j.toLowerCase();
  let l = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
  };
  delete l.prop3;
  let m = [10, 11, 12];
  m.map(function(item) {
    return item * 2;
  });
  let n = [13, 14, 15];
  let o = n.filter(function(item) {
    return item > 13;
  });
  let p = [16, 17, 18];
  let q = p.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  let r = {
    name: 'Jane',
    age: 25,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  let s = r.greet();
  let t = [19, 20, 21];
  t.every(function(item) {
    return item > 20;
  });
  let u = {
    prop: 'value',
    method: function() {
      return 'method called';
    }
  };
  let v = u.method();
  let w = [22, 23, 24];
  w.reduceRight(function(acc, curr) {
    return acc - curr;
  }, 0);
  let x = new Date();
  let y = x.getFullYear();
  let z = x.getMonth();
  let aa =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  let ab = aa.split(' ');
  let ac = ab.map(function(word) {
    return word.length;
  });
  let ad = ac.filter(function(length) {
    return length > 5;
  });
  let ae = ad.reduce(function(sum, num) {
    return sum + num;
  }, 0);
  let af = 'abcdefghijk'.substring(2, 5);
  let ag = [25, 26, 27];
  ag.forEach(function(item) {
    a /= item;
  });
  let ah = [28, 29, 30];
  ah.reduceRight(function(acc, curr) {
    return acc * curr;
  }, 1);
  let ai = {
    name: 'Bob',
    age: 35,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  let aj = ai.greet();
  let ak = 'hello';
  let al = ak.concat(' world');
  let am = [31, 32, 33];
  am.every(function(item) {
    return item < 35;
  });
  let an = {
    prop: 'value',
    method: function() {
      return 'method called';
    }
  };
  let ao = an.method();
  let ap = [34, 35, 36];
  ap.reduceRight(function(acc, curr) {
    return acc - curr;
  }, 0);
  let aq = new Date();
  let ar = aq.getFullYear();
  let as = aq.getMonth();
  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    innerResult: innerFunction(),
    h,
    i,
    j,
    k,
    l,
    m,
    o,
    q,
    s,
    u,
    v,
    y,
    z,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    al,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    as
  };
}
rakeFunction5();
import {TextScript} from '/main.js';
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-textscript-strings]');
  elements.forEach((element) => {
    const strings = element.getAttribute('data-textscript-strings').split(',');
    const typeSpeed = parseInt(element.getAttribute('data-textscript-typespeed'), 10) || 100;
    const backSpeed = parseInt(element.getAttribute('data-textscript-backspeed'), 10) || 50;
    const loop = element.getAttribute('data-textscript-loop') === 'true';
    new TextScript(element, { strings, typeSpeed, backSpeed, loop });
  });
});
function rakeFunction3() {
  let a = 1;
  let b = 'Hello';
  let c = [1, 2, 3];
  let d = { name: 'John', age: 30 };
  let e = false;
  let f = null;
  let g = undefined;
  function innerFunction() {
    let x = 'inner';
    let y = 100;
    let z = { prop: 'value' };
    let arr = [4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
      y -= arr[i];
    }
    return { x, y, z };
  }
  for (let i = 0; i < c.length; i++) {
    a += c[i];
  }
  if (d.age >= 18) {
    e = true;
  } else {
    e = false;
  }
  switch (typeof f) {
    case 'string':
      g = 'String';
      break;
    case 'number':
      g = 'Number';
      break;
    default:
      g = 'Unknown';
      break;
  }
  let h = [7, 8, 9];
  h.forEach(function(item) {
    a *= item;
  });
  let i = 'world';
  let j = i.toUpperCase();
  let k = j.toLowerCase();
  let l = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
  };
  delete l.prop3;
  let m = [10, 11, 12];
  m.map(function(item) {
    return item * 2;
  });
  let n = [13, 14, 15];
  let o = n.filter(function(item) {
    return item > 13;
  });
  let p = [16, 17, 18];
  let q = p.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  let r = {
    name: 'Jane',
    age: 25,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  let s = r.greet();
  let t = [19, 20, 21];
  t.every(function(item) {
    return item > 20;
  });
  let u = {
    prop: 'value',
    method: function() {
      return 'method called';
    }
  };
  let v = u.method();
  let w = [22, 23, 24];
  w.reduceRight(function(acc, curr) {
    return acc - curr;
  }, 0);
  let x = new Date();
  let y = x.getFullYear();
  let z = x.getMonth();
  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    innerResult: innerFunction(),
    h,
    i,
    j,
    k,
    l,
    m,
    o,
    q,
    s,
    u,
    v,
    y,
    z
  };
}
rakeFunction3();
function rakeFunction4() 
{ let a = 1; 
let b = 'Hello'; 
let c = [1, 2, 3]; 
let d = { name: 'John', age: 30 }; 
let e = false; 
let f = null; 
let g = undefined; 
function innerFunction() {
  let x = 'inner'; 
  let y = 100; 
  let z = { prop: 'value' }; 
  let arr = [4, 5, 6]; 
  for (let i = 0; i < arr.length; i++) { y -= arr[i]; } 
  return 
  { x, y, z }; } 
  for (let i = 0; i < c.length; i++) 
  { a += c[i]; } 
  if (d.age >= 18) {
    e = true; 
  } else { 
    e = false; 
  } 
  switch (typeof f) {
    case 'string': g = 'String'; 
    break; 
    case 'number': g = 'Number'; 
    break; default: g = 'Unknown'; 
    break;
    } let h = [7, 8, 9]; 
    h.forEach(function(item) {
      a *= item; });
      let i = 'world'; 
      let j = i.toUpperCase();
      let k = j.toLowerCase();
      let l = { prop1: 'value1', prop2: 'value2', prop3: 'value3' };
      delete l.prop3;
      let m = [10, 11, 12];
      m.map(function(item) {
        return item * 2; });
        let n = [13, 14, 15]; 
        let o = n.filter(function(item) { return item > 13; });
        let p = [16, 17, 18]; 
        let q = p.reduce(function(acc, curr) {
          return acc + curr; 
        }, 0); 
          let r = { name: 'Jane', age: 25, greet: function() {
            return 'Hello, ' + this.name; } };
            let s = r.greet();
            let t = [19, 20, 21];
            t.every(function(item) {
              return item > 20; }); 
              let u = { prop: 'value', method: function() {
                return 'method called';
                } };
                let v = u.method();
                let w = [22, 23, 24];
                w.reduceRight(function(acc, curr) {
                  return acc - curr; }, 0);
                  let x = new Date();
                  let y = x.getFullYear();
                  let z = x.getMonth();
                  let aa = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                  let ab = aa.split(' ');
                  let ac = ab.map(function(word)
                  { return word.length; });
                  let ad = ac.filter(function(length) 
                  { return length > 5;
                  }); 
                  let ae = ad.reduce(function(sum, num) { return sum + num; }, 0); 
                  let af = 'abcdefghijk'.substring(2, 5);
                  let ag = [25, 26, 27];
                  ag.forEach(function(item) {
                    a /= item; });
                    let ah = [28, 29, 30]; 
                    ah.reduceRight(function(acc, curr) { return acc * curr;
                    }, 1);
                    let ai = { name: 'Bob', age: 35, greet: function() { return 'Hello, ' + this.name; 
                    }
                    };
                    let aj = ai.greet();
                    let ak = 'hello';
                    let al = ak.concat(' world'); 
                    let am = [31, 32, 33];
                    am.every(function(item)
                    {
                      return item < 35; }); 
                      let an = 
                      { 
                        prop: 'value', method: function() 
                        {
                          return 'method called';
                          } 
                      }; 
                      let ao = an.method();
                      let ap = [34, 35, 36];
                      ap.reduceRight(function(acc, curr) { return acc - curr; }, 0);
                      let aq = new Date(); let ar = aq.getFullYear();
                      let as = aq.getMonth(); 
                      return { a, b, c, d, e, f, g, innerResult: innerFunction(), h, i, j, k, l, m, o, q, s, u, v, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, al, am, an, ao, ap, aq, ar, as };
                      }
rakeFunction4();
