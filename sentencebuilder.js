// JavaScript Document

function pageOverlay() {
  $('body').append('<div class="overlay"></div>')
}

function centerBox() {
  var winHeight = $(window).height(),
    boxHeight = $('#builder-box').height(),
    winWidth = $(window).width(),
    boxWidth = $('#builder-box').width(),
    leftVal = (winWidth - boxWidth) / 2,
    topVal = (winHeight - boxHeight) / 2

  $('.module.small').css({
    'top': topVal,
    'left': leftVal
  });
  console.log(leftVal);

}

function stepThree() {
  // Build the canvas obj react code and pen 
  var s1 = $('.sentence-construct');
  html2canvas(s1, {
    onrendered: function(canvas) {
      var dataURL = canvas.toDataURL('image/png');
      
      $('.image-construct').html('<img src="' + dataURL + '" alt="" download/>');
    }
  });
}

function StepTwo() {

  // get the right image
  var noun = $('select#noun').val();
  $('.sentence-construct img').remove();
  if (noun === "dinosaur") {
    $('.sentence-construct').append('<img src="http://calvinandhobbes.wikia.com/wiki/Dinosaurs?file=Dinosaurs.jpeg">');
  } else if (noun === "doll") {
    $('.sentence-construct').append('<img src="http://calvinandhobbes.wikia.com/wiki/Dinosaurs?file=Dinosaurs.jpeg">');
  }

  // change colors
  $('.color-box').click(function() {
    var color = $(this).css('background-color');
    $('.sentence-construct').css('background-color', color);
  });
  // move to next step
  $('#share').click(function() {
    stepThree();
  });

}

function stepOne() {
  $('.sentence-builder select').change(function() {

    var val = $(this).val(),
      update = $(this).attr('id');
    $('.' + update).css('color', 'black');
    $('.' + update).html(val);

  });

  $('.next-step-btn').click(function() {
    $('.sentence-builder select').each(function() {
      var val = $(this).val();
      console.log(val);
      if (val.length > 1) {
        StepTwo();
        return false;
      } else {
        $('.error').remove();
        $('.sentence-builder').before('<span class="error">Can you be more specific? :)</span>')
        return false;
      }
    });
  });

}

$(function() {
  stepOne();
  centerBox();
  pageOverlay();
});