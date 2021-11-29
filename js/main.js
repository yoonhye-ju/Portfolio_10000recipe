
  var currentScrollTop=0;
    $(document).ready(function(){
      scrollController();
      $(window).scroll(function(){
            scrollController();
      });
    });

    function scrollController(){
    currentScrollTop = $(window).scrollTop();
        if(currentScrollTop > 71) {
    $("header").addClass("fixed");
    $("header a").addClass("txtCh");
    $(".logo img").attr("src", "img/logo_white.png");
                  }else{
    $("header").removeClass("fixed");
    $("header a").removeClass("txtCh");
    $(".logo img").attr("src", "img/logo.png");
          }
    }
    

    function prev() {
      $('.slide li:last').prependTo('.slide');
      $('.slide').css('margin-left', -110);
      $('.slide').stop().animate({ marginLeft: 0});
    }

    function next() {
      $('.slide').stop().animate({ marginLeft: -110}, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
      });
    }

    $(function(){
      $(".icon_right").click(function(){
        prev();
      });
      $(".icon_left").click(function(){
        next();
        });
    });


      $(document).ready(function () {
        var height = $(".notice").height();
        var num = $(".rolling li").length;
        var max = height * num;
        var move = 0;
        function noticeRolling() {
          move += height;
          $(".rolling").animate({ "top": -move }, 600, function () {
            if (move >= max) {
              $(this).css("top", 0);
              move = 0;
            };
          });
        };
        noticeRollingOff = setInterval(noticeRolling, 3000);
        $(".rolling").append($(".rolling li").first().clone());

        $(".rolling_li")(function () {
          noticeRollingOff = setInterval(noticeRolling, 3000);
        });
      });


        function prev2() {
          $('.honor_minibox:last').prependTo('#honorwrap');
          $('#honorwrap').css('margin-left', -250);
          $('#honorwrap').stop().animate({ marginLeft: 0 });
        }

        function next2() {
          $('#honorwrap').stop().animate({ marginLeft: -250}, function () {
            $('.honor_minibox:first').appendTo('#honorwrap');
            $('#honorwrap').css({ marginLeft: 0 });
          });
        }

        $(function () {
          $(".honor_left").click(function () {
            prev2();
          });
          $(".honor_right").click(function () {
            next2();
          });
        });


        function openNav() {
          document.getElementById("myNav").style.width = "100%";
        }
        function closeNav() {
          document.getElementById("myNav").style.width = "0%";
        }
      
      


      $(window).resize(function(){
        if(window.innerWidth>=599){
            $(".menu").show();
        }
    });
