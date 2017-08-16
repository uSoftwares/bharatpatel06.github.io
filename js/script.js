$(document).ready(function(){
	$(".ratings").each(function(){
		var rating = $(this).attr("rate");
		var rateString="";
		for(var i=0; i<10; i++)
		{
			if(i < rating)
				rateString +='<i class="fa fa-star hidden-xs" aria-hidden="true"></i>';
			else
				rateString +='<i class="fa fa-star-o hidden-xs" aria-hidden="true"></i>';
		}
		rateString +='<i class="fa fa-trophy visible-xs" aria-hidden="true">'+rating+'</i>';
		$(this).html(rateString);
	});

	///////////////////////////////////////////////////////////Load My Works////////////////////////////////////////////////

	var flag=0;
		if(flag==0)
		{
			flag=1;
			var yql = encodeURIComponent("select * from xml where url='https://codepen.io/bharatpatel/popular/feed/'");

			yql = "https://query.yahooapis.com/v1/public/yql?q="+yql+"&format=json&callback=?"
			$.getJSON(yql, function(data) {
				var items = data.query.results.rss.channel.item;
				for(var i=0; i<6; i++)
				{
					var parser = new DOMParser(), doc = parser.parseFromString(items[i].description, "text/xml");
					var imgSrc = items[i].link+"/image/large.png";
					$(".loadRSS").append("<div class='workTabs col-xs-4 col-md-4 text-center'><a target='_blank' href='"+items[i].link.replace('/pen/', '/full/')+"'><img src="+imgSrc+" alt='"+items[i].subject+"'><br>"+ items[i].subject +"</a></div>");
					if((i+1)%3 == 0)
						$(".loadRSS").append("<div class='clearfix'></div>");
					// if((i+1)%2 == 0)
					// 	$(".loadRSS").append("<div class='clearfix hidden-md hidden-lg'></div>");
				}
			}, "jsonp");
		}

	///////////////////////////////////////////////////////////Load My Works////////////////////////////////////////////////


});