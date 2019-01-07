// when the button is clicked the title entered
// and the rating that was selected is also stored
$("#ratebtn").on("click",addFilm);

	function addFilm() {
		var movieTitle = $("#titleinput").val();
		console.log(movieTitle);
		var movieRating = $("#rating").val();
		console.log(movieRating);
		var movieData = $("#rating option:selected").text();
		console.log(movieData);

// delete the examples 
		$("#example1").remove();
		$("#example2").remove();
		

// & replace with new movie title and ratings 
		var bigDiv = $("<div>").appendTo("body");
			$(bigDiv).addClass("row");
		var smallDiv = $("<div>").appendTo(bigDiv);
			$(smallDiv).addClass("mx-auto")
		var movieDiv = $("<div>");
			$(movieDiv).addClass("box mx-2 my-2 px-3 moviediv");
		var myH3 = $("<h3>");
			$(myH3).text(movieTitle);
			$(myH3).addClass("pt-5")
		var rateDiv = $("<div>");
			$(rateDiv).addClass("box mx-2 my-2 px-5 pt-2 ratediv");
		var newH3 = $("<h3>");
			$(newH3).text(movieData);
		var myImg = $("<img>");
			$(myImg).addClass("img-fluid");
			$(myImg).attr("src",movieRating);
		
		$(smallDiv).append(movieDiv);
		$(movieDiv).append(myH3);
		$(smallDiv).append(rateDiv);
		$(rateDiv).append(newH3);
		$(rateDiv).append(myImg);


}