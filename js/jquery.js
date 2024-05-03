$(document).ready(function () {
  $(".gnb_mo").click(function () {
    $(".sub_wrap").slideToggle(500);
  });

  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    var sec_7_top = $(".section_7").offset().top;

    if (pageY >= sec_7_top) {
      $(".section_7 img:last-child").fadeIn(2500);
    } else {
      $(".section_7 img:last-child").fadeOut(1500);
    }
  });

  $(".con_wrap_9_pc .con_2").hover(
    function () {
      $(".con_wrap_9_pc .con_2 p").slideDown(500);
    },
    function () {
      $(".con_wrap_9_pc .con_2 p").css({
        display: "none",
      });
    }
  );

  $(".con_wrap_9_pc .con_3").hover(
    function () {
      $(".con_wrap_9_pc .con_3 p").slideDown(500);
    },
    function () {
      $(".con_wrap_9_pc .con_3 p").css({
        display: "none",
      });
    }
  );

  $(".section_10 .btn")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".section_10 .btn").removeClass("btn_active");
      $(this).addClass("btn_active");

      $(".section_10 img").removeClass("img_active_10");
      $(".section_10 img").eq(i).addClass("img_active_10");
    });

  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    var sec_10_top = $(".section_10").offset().top;

    if (winTop > sec_10_top - 150) {
      $(".section_10 .container_mo img:nth-child(2)").addClass("img_active_10");
    } else {
      $(".section_10 .container_mo img:nth-child(2)").removeClass(
        "img_active_10"
      );
    }
  });

  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    var sec_11_top = $(".section_11 .container").offset().top;

    if (winTop >= sec_11_top) {
      $(".section_11 .con_wrap .wrap").removeClass("img_active_11");
      $(".section_11 .con_wrap .wrap:nth-child(1)").addClass("img_active_11");
    }

    if (winTop >= sec_11_top + 200) {
      $(".section_11 .con_wrap .wrap").removeClass("img_active_11");
      $(".section_11 .con_wrap .wrap:nth-child(2)").addClass("img_active_11");
    }

    if (winTop >= sec_11_top + 400) {
      $(".section_11 .con_wrap .wrap").removeClass("img_active_11");
      $(".section_11 .con_wrap .wrap:nth-child(3)").addClass("img_active_11");
    }
  });

  $(".section_12 .tab")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".section_12 .tab").removeClass("tab_active_12");
      $(this).addClass("tab_active_12");

      $(".section_12 .con_box").hide();
      $(".section_12 .con_box").eq(i).show();
    });

  $(".section_14 .tab")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".section_14 .tab").removeClass("tab_active_14");
      $(this).addClass("tab_active_14");

      $(".section_14 .con_box").hide();
      $(".section_14 .con_box").eq(i).show();
    });

  $(".section_16 .tab")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".section_16 h5").slideUp();
      // $(this).find("h5").stop().slideToggle(500);
      $(".section_16 .tab").eq(i).find("h5").stop().slideDown();
      // stop()은 중복되서 이벤트 안들어가게 해줌
      // slidetoggle로 클릭할때마다 접었다폈다 가능 + 동시에 다른 애들은 쏙 들어가게

      $(".section_16 .tab").removeClass("tab_active_16");
      $(this).addClass("tab_active_16");

      $(".section_16 .p_2").removeClass("block");
      $(".section_16 .tab").eq(i).find(".p_2").addClass("block");

      $(".section_16 .p_1").removeClass("none");
      $(".section_16 .tab").eq(i).find(".p_1").addClass("none");

      $(".section_16 img").fadeOut();
      $(".section_16 img").eq(i).fadeIn();
    });

  $(".section_17 .tab")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".section_17 .option").removeClass("option_active_17");

      $(".section_17 .tab").removeClass("tab_active_17");
      $(this).addClass("tab_active_17");

      $(".section_17 .left_wrap .img_wrap").hide();
      $(".section_17 .left_wrap .img_wrap").eq(i).show();

      $(".section_17 .left_wrap .img_wrap img").hide();
      $(".section_17 .left_wrap .img_wrap")
        .eq(i)
        .find("img:nth-child(1)")
        .show();

      $(".section_17 .select").hide();
      $(".section_17 .select").eq(i).show();
    });

  $(".section_17 .option")
    .each(function (num_2) {
      $(this).attr("data-num", num_2);
    })
    .click(function () {
      var a = $(this).attr("data-num");

      $(".section_17 .option").removeClass("option_active_17");
      $(this).addClass("option_active_17");

      $(".section_17 img").hide();
      $(".section_17 img").eq(a).show();
    });

  // $(".section_17 .select_2 .option")
  //   .each(function (num) {
  //     $(this).attr("data-num", num);
  //   })
  //   .click(function () {
  //     var i = $(this).attr("data-num");

  //     $(".section_17 .select_2 .option").removeClass("option_active_17");
  //     $(this).addClass("option_active_17");

  //     $(".section_17 .img_wrap_2 img").hide();
  //     $(".section_17 .img_wrap_2 img").eq(i).show();
  //   });

  $("footer .top_menu")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $("footer .menu_wrap").eq(i).find(".sub_wrap_f").slideToggle(500);
      console.log(i);
    });
}); //end
