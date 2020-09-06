/*
*  Jules Garcia Ripple-effects.js
*/
document.addEventListener("DOMContentLoaded", function(event) { 
    var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://privateechat.000webhostapp.com/Espace/ripple.css';
        head.appendChild(link);
        if(document.querySelectorAll('body[ripple-composant]')){
        var linkc  = document.createElement('link');
        linkc.rel  = 'stylesheet';
        linkc.type = 'text/css';
        linkc.href = 'http://privateechat.000webhostapp.com/Espace/rippleComposant.css';
        head.appendChild(linkc);
        }
    var typeElement = document.querySelectorAll('button[ripple-type]');
    Array.prototype.forEach.call(typeElement, function (el) {
      var type= el.getAttribute('ripple-type');
      el.classList.add("ripple-"+type);
    });
     var colorE = document.querySelectorAll('[color]');
    Array.prototype.forEach.call(colorE, function (el) {
        var colorV= el.getAttribute('color');
        el.style.color = colorV;
    });
     var typeElement = document.querySelectorAll('img[ripple-image]');
    Array.prototype.forEach.call(typeElement, function (el) {
      var px= el.getAttribute('ripple-image');
      el.style.width = px+"px";
    });
    var element = document.querySelectorAll('[ripple]');
    Array.prototype.forEach.call(element, function (b) {
        if(b.getAttribute('ripple-event')){
            var ev = b.getAttribute('ripple-event');
            b.addEventListener(ev, createRipple);
        }else{
        b.addEventListener('click', createRipple);
        }
    });
    function createRipple (e) {
        var circle = document.createElement('div');
        this.appendChild(circle);
        var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
        var rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';
    circle.classList.add('ripple');
    if(this.getAttribute('ripple-time')){
        var time =this.getAttribute('ripple-time');
        time = parseInt(time);
      if (isNaN(time)) { time=1000; }
      if(this.getAttribute('ripple-opacity')){
    var opacity = this.getAttribute('ripple-opacity');
            opacity = parseInt(opacity);
      if (isNaN(opacity) || opacity > 10 || opacity < 0) { opacity=1; }
     var final = Math.round(opacity/10);
    this.lastChild.animate([
       { opacity: final }, 
      { opacity: '0' },
    ],time);
    }else{
    this.lastChild.animate([
       { opacity: '1' }, 
      { opacity: '0' },
    ],time);
    }
    this.lastChild.animate([
       { transform: 'scale(0)' }, 
      { transform: 'scale(2.5)' },
    ],time);
    
    }else if(this.getAttribute('ripple-opacity')){
    var opacity = this.getAttribute('ripple-opacity');
            opacity = parseInt(opacity);
      if (isNaN(opacity) || opacity > 10 || opacity < 0) { opacity=1; }
      var final = Math.round(opacity/10);
    this.lastChild.animate([
       { opacity: final }, 
      { opacity: '0' },
    ],500);
        
    }else{
    circle.classList.add('ripple-time-default')    
    }
        var r = this.childNodes;
        var pos = r.length -1;
        var r = r[pos];
        var color =this.getAttribute('ripple-color');
        if(color==null||color==""){
            color = "#2323238c";
        }
        r.classList.add(color);
        r.style.background=color;
        if(this.getAttribute('ripple-back')){
            var remove = this.getAttribute('ripple-back');
            if(remove == "true"){
                if(this.childNodes[2]){
                     this.removeChild(this.childNodes[1]);
                }
                }
            }else{
                
            }
        
    }
});
