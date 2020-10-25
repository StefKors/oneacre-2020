// Content Width
function contentWidth() {
  var wW = $(window).width();
  var lW = $('.oa_logo').outerWidth();
  var cW = $('.oa_content');
  var nW = wW - lW - 80;
  var nM = wW - nW;

  cW.width(nW + 40);
  cW.css('margin-left', nM - 40);
  $('.oa_title').css('padding-left', (nM + 40));
}


// Functions | On Load | On Resize
$(function() {
  contentWidth();
  $(window).resize(function() {
    contentWidth();
  });
});

// Draggable Image
$(function() {
  $('.oa_img_drag').draggable();
});


$('#close, .oa_right_mobile').click(function() {
  $('#close').toggleClass('rotated');
  // $('.oa_right')
});

var oaLogo = $('.oa_logo');
var oaLogoInner = $('.oa_logo_inner');

// ------------ Logo scroll calculation ------------

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


$(window).scroll(function() {
	// ------------ Get the data ------------ //
	var pageRange = $('.oa_footer').position().top + $('.oa_footer').height();
	var scrollPosition = $(document).scrollTop() + $(window).height();

  var pos = map (scrollPosition, $(window).height(), ($(document).height() - $(window).height()), 0, (pageRange - $(window).height()))

	var oaLogoMargin = map(pos, 0, pageRange, 0,  362)

  if (oaLogoMargin >= 362) {
    var oaLogoMargin = 362;
  }
  oaLogoInner.css('margin-top', oaLogoMargin);

});


// ------------ Logo Text Hide ------------
var oaLogoColor = $('.oa_logo_color');

$(window).scroll(function() {
  if ($(window).scrollTop() < 100) {
    oaLogoColor.css('opacity', 1);
  } else if ($(window).scrollTop() + $(window).height() == $(document).height() || $('.oa_footer').hasClass('oa_footer_fixed')) {
    oaLogoColor.css('opacity', 1);
  } else {
    oaLogoColor.css('opacity', 0);
  }
});

$(document).ready(function() {

  $(window).scroll(function(e) {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent * 100);

    $('#scrollPercentLabel>span').html(scrollPercentRounded);
    repositionLabel();
  });

  $(window).resize(function() {
    repositionLabel();
  });

  function repositionLabel() {
    $('#scrollPercentLabel').css({
      position: 'fixed',
      left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
      top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
    });
  }

  repositionLabel();

});

// ------------ Logo Text Hide on Hover ------------
$(".oa_logo").mouseenter(function() {
  if (oaLogoColor.css('opacity') == 0) {
    oaLogoColor.css('opacity', 1);
  } else {
    oaLogoColor.css('opacity', 1);
  }
}).mouseleave(function() {
  if (oaLogoColor.css('opacity') == 1 && $(window).scrollTop() >= 100) {
    oaLogoColor.css('opacity', 0);
  } else {
    oaLogoColor.css('opacity', 0);
  }
});

// --------------- mediaQuery windowresize -------------------- //

$(window).ready(function() {
	if ($(window).width() <= 768) {
		$(".oa_logo_color").empty();
	}
	else {
		$("#oa_logo_p1").html('one acre');
		$("#oa_logo_p2").html('.online');
	}
});


$(window).resize(function() {
	if ($(window).width() <= 768) {
		$(".oa_logo_color").empty();
	}
	else {
		$("#oa_logo_p1").html('one acre');
		$("#oa_logo_p2").html('.online');
	}
});

// ------------ Background Canvas ------------ //
(function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d');

	// resize the canvas to fill browser window dynamically
	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		function drawStuff() {
			var vW = $(window).width();
			var vH = $('canvas').height();
			var pW = Math.round(Math.random() * (vW - 1) + 1);
			var pH = Math.round(Math.random() * (vH - 1) + 1);
			context.fillStyle = "rgba(255,255,255,0.35)";
			context.fillRect(pW, pH, 2, 2);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
			context.fillRect(Math.round(Math.random() * (vW - 1) + 1), Math.round(Math.random() * (vH - 1) + 1), 1, 1);
		}
		$(window).scroll(function() {
			drawStuff();
		})
	}
	resizeCanvas();

})();
