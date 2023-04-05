 //フェードイン（下）
 let fadeinObjects=document.querySelectorAll('.fadein');
 fadeinObjects.forEach(function(fadeIn){
   let windowHeight=window.innerHeight;
   window.addEventListener('scroll',function(){
     let rect=fadeIn.getBoundingClientRect().top;
     let scroll=window.pageYOffset;
     let offset=rect+scroll;
     if(scroll>offset-windowHeight+150){
       fadeIn.classList.add('fadein-active');
     };
   });
 });