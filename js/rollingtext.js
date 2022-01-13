$(function(){
  //변수설정
  var list = $("#txtlist"); //리스트몸체
  var listN = $("#txtlist li").length; //리스트자식갯수
  var timer; //타이머변수
  var nowNum = null; //현재인덱스
  var speed = 1500; //타이머속도
  //var animating = false; //동작여부
  list.data('top',$('#ctrl > .top'));
  list.data('btm',$('#ctrl > .bottom'));
  list.data('play',$('#ctrl > .play'));
  list.data('pause',$('#ctrl > .pause'));
  
  //초기설정
  $("#txtlist li:eq(0)").addClass('active');
  $("#txtlist").addClass('ing'); //진행중임을 암시하는 클래스

  //이벤트설정
  list.bind({
      mouseenter:function(){
          if($(this).hasClass('ing')){
              clearInterval(timer);
              timer =0;
          }else{
              
          }
      },
      
      mouseleave:function(){
          if($(this).hasClass('ing')){
               timer = setInterval(auto, speed);  
          }else{
              
          } 
      }
  });
  
  list.data('top').click(function(){
      //alert("위쪽 클릭");
      if(list.hasClass('ing')){
           list.removeClass('ing');   
      }
      if(timer !=0){
          clearInterval(timer);
          timer = 0;
      }
      nowNum = $("#txtlist li.active").index();
      if(nowNum >= listN-1){
          nowNum = 0;
      }else{
          nowNum ++;         
      }
      slide(nowNum);
      return false;
  });
  
  list.data('btm').click(function(){
      //alert("아래쪽 클릭");
      if(list.hasClass('ing')){
           list.removeClass('ing');   
      }
      if(timer !=0){
          clearInterval(timer);
          timer = 0;
      }
      nowNum = $("#txtlist li.active").index();
      if(nowNum <= 0){
          nowNum = listN-1;
      }else{
          nowNum --;         
      }
      slide(nowNum);
      return false;
  });
  
  list.data('play').click(function(){
      //alert("재생 클릭");
      if(list.hasClass('ing')){
         
      }else{
         list.addClass('ing');
      }
      if(timer !=0){
          clearInterval(timer);
          timer = 0;
      }
      timer = setInterval(auto, speed);
      return false;
  });
  
  list.data('pause').click(function(){
      //alert("일시정지 클릭");
      if(list.hasClass('ing')){
           list.removeClass('ing'); 
           clearInterval(timer);
           timer = 0; 
      }else{

      }
  
      return false;
  });
  
  //함수설정
  function slide(idx){
      list.animate({top:-idx * 140});
      list.find(">li.active").removeClass('active');
      list.find(">li").eq(idx).addClass('active');
  }

  function auto(){
      var Num = $("#txtlist li.active").index();
      if(Num >= listN-1){
          Num = 0;
      }else{
          Num ++;         
      }
      slide(Num);
  }
  
  timer = setInterval(auto, speed);

});