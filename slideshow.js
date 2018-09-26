/* global $ */

$ (function() {
  var page = 0;
  var lastPage = parseInt($(".main-slide img").length-1);
  
  $(".main-slide img").css("display","none");
  
  $(".main-slide img").eq(page).css("display","block");
  
  
  function changePage() {
    $(".main-slide img").fadeOut(2000);
    $(".main-slide img").eq(page).fadeIn(2000);
  };
  
  var Timer;
  function startTimer() {
    Timer = setInterval(function() {
      if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
    }, 6000);
  }
  
  function stopTimer() {
    clearInterval(Timer);
  }
    
  startTimer();
  
  $(".main-slide-btn #left a").click(function() {
    stopTimer();
    startTimer();
    if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
  });
  
  $(".main-slide-btn #right a").click(function() {
    stopTimer();
    startTimer();
    if(page === 0) {
        page = lastPage;
        changePage();
      } else {
        page --;
        changePage();
      };
  });
  
});

// for (var i=0; i<3; i++) {
//   var _subslides = ['sub-slide1', 'sub-slide2', 'sub-slide3'];
  
//   $ (function() {
//   var page = 0;
//   var lastPage = parseInt($("." +　'_subslides[i]' + " img").length-1);
  
//   $("." +　'_subslides[i]' + " img").css("display","none");
  
//   $("." +　'_subslides[i]' + " img").eq(page).css("display","block");
  
//   function changePage() {
//     $("." +　'_subslides[i]' + " img").fadeOut(1000);
//     $("." +　'_subslides[i]' + " img").eq(page).fadeIn(1000);
//   };
  
//   var Timer;
//   function startTimer() {
//     Timer = setInterval(function() {
//       if(page === lastPage) {
//         page = 0;
//         changePage();
//       } else {
//         page ++;
//         changePage();
//       };
//     }, 5000);
//   }
  
//   function stopTimer() {
//     clearInterval(Timer);
//   }
    
//   startTimer();
  
//   });
// }


$ (function() {
  var page = 0;
  var lastPage = parseInt($(".sub-slide1 img").length-1);
  
  $(".sub-slide1 img").css("display","none");
  
  $(".sub-slide1 img").eq(page).css("display","block");
  
  function changePage() {
    $(".sub-slide1 img").fadeOut(2000);
    $(".sub-slide1 img").eq(page).fadeIn(2000);
  };
  
  var Timer;
  function startTimer() {
    Timer = setInterval(function() {
      if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
    }, 5000);
  }
  
  function stopTimer() {
    clearInterval(Timer);
  }
    
  startTimer();
  
  $(".sub-slide-btn1 #left a").click(function() {
    stopTimer();
    startTimer();
    if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
  });
  
  $(".sub-slide-btn1 #right a").click(function() {
    stopTimer();
    startTimer();
    if(page === 0) {
        page = lastPage;
        changePage();
      } else {
        page --;
        changePage();
      };
  });
  
  });
  
  
  $ (function() {
  var page = 0;
  var lastPage = parseInt($(".sub-slide2 img").length-1);
  
  $(".sub-slide2 img").css("display","none");
  
  $(".sub-slide2 img").eq(page).css("display","block");
  
  function changePage() {
    $(".sub-slide2 img").fadeOut(2000);
    $(".sub-slide2 img").eq(page).fadeIn(2000);
  };
  
  var Timer;
  function startTimer() {
    Timer = setInterval(function() {
      if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
    }, 6000);
  }
  
  function stopTimer() {
    clearInterval(Timer);
  }
    
  startTimer();
  
  $(".sub-slide-btn2 #left a").click(function() {
    stopTimer();
    startTimer();
    if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
  });
  
  $(".sub-slide-btn2 #right a").click(function() {
    stopTimer();
    startTimer();
    if(page === 0) {
        page = lastPage;
        changePage();
      } else {
        page --;
        changePage();
      };
  });
  
  });
  
  
  $ (function() {
  var page = 0;
  var lastPage = parseInt($(".sub-slide3 img").length-1);
  
  $(".sub-slide3 img").css("display","none");
  
  $(".sub-slide3 img").eq(page).css("display","block");
  
  function changePage() {
    $(".sub-slide3 img").fadeOut(2000);
    $(".sub-slide3 img").eq(page).fadeIn(2000);
  };
  
  var Timer;
  function startTimer() {
    Timer = setInterval(function() {
      if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
    }, 7000);
  }
  
  function stopTimer() {
    clearInterval(Timer);
  }
    
  startTimer();
  
  $(".sub-slide-btn3 #left a").click(function() {
    stopTimer();
    startTimer();
    if(page === lastPage) {
        page = 0;
        changePage();
      } else {
        page ++;
        changePage();
      };
  });
  
  $(".sub-slide-btn3 #right a").click(function() {
    stopTimer();
    startTimer();
    if(page === 0) {
        page = lastPage;
        changePage();
      } else {
        page --;
        changePage();
      };
  });
  
  });