parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({1:[function(require,module,exports) {
var n=0,i=20;function e(){createCanvas(window.innerWidth,window.innerHeight),angleMode(DEGREES),background(50),fill(255)}function o(){var e=137.5*n,o=i*sqrt(n),t=o*cos(e)+width/2,r=o*sin(e)+height/2;fill(n%1e3+130,n%900,n%256+50),noStroke(),ellipse(t,r,5,5),n++}
},{}]},{},[1])
//# sourceMappingURL=/phyllotaxis.6c191875.map