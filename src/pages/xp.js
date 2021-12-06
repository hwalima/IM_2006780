$(function(){
    let sonido = new Audio('https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/sonidos%2FWindows-XP-Critical-Stop.mp3?alt=media&token=a34df060-6fcb-4fc6-8141-38ae735c3b10');
    $('.alert .alertHead').mousedown(function () {
      var mv = 10;
      $(this).mousemove(function (e) {
        mv++;
        $(this).parent().css({
          top: e.pageY,
          left: e.pageX,
          transform: `translate(-50%, -${$(this).outerHeight() / 2}px)`
        });
        if (mv >= 10) {
          var clon = $(this).parent().clone();
          $(clon).addClass('shadow');
          $('body').append(clon);
          mv = 0;
        }
      })
      $(this).mouseup(function () {
        $(this).off('mousemove');
        $(this).off('mouseup');
        $(this).off('mouseleave');
      })
      $(this).mouseleave(function () {
        $(this).off('mousemove');
        $(this).off('mouseup');
        $(this).off('mouseleave');
      })
    })
    $('.alert .boton').click(function(){
      sonido.play();
    })
  })