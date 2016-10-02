$(document).ready(function(){
  
  var quotextract =  function() {
    return $.ajax({
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			headers: {
				'X-Mashape-Key': 'nA4ofDihgRmshn3FrXGjqR3GlWzZp1XYkXrjsnw3kvVLZGgxCj'
			},
			method: 'POST',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
		})
	};
  
  function randomColorChange(){
    return '#'+(Math.floor(Math.random()*16777216)&0xFFFFFF).toString(16);
};
  
  var quotepush = function(data)
      {
     var quote = encodeURIComponent(data.quote);
        
     var author = data.author;
        
     var tweetUrl = "https://twitter.com/intent/tweet?text=" + quote;
        
        $('.quote').text(data.quote);
        $('.author').text(data.author);
        $('.btntweet').attr('href',tweetUrl);
        
      };
  $('.btnReload').on('click', function() {
		var reloadBtn = $(this);
		reloadBtn.prop('disabled', true).children('i').addClass('fa-spin');
		quotextract().done(function(data) {
		quotepush(data);
			reloadBtn.prop('disabled', false).children('i').removeClass('fa-spin');
      
      var rand_color = randomColorChange();
    $("#body-color").css('background-color', rand_color);  
    $(".quote").css('color',rand_color);
    $(".author-txt").css('color',rand_color);
    $(".fa").css('color',rand_color);
		});
});
});