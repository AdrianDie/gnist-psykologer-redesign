(function(){
  var nav=document.getElementById('nav'),burger=document.querySelector('.burger'),scrim=document.querySelector('.scrim'),close=document.querySelector('.drawer-close');
  function set(o){nav.classList.toggle('open',o);scrim.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
  burger.addEventListener('click',function(){set(true)});
  close.addEventListener('click',function(){set(false)});
  scrim.addEventListener('click',function(){set(false)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:0});
  els.forEach(function(e){io.observe(e)});
})();
