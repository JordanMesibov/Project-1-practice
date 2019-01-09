var Book1 = {
  title : "Station+Eleven",
  author : "Emily+St+John+Mandel"
}
console.log(Book1);

var Book2 = {
  title: "Uprooted",
  author : "Naomi+Novik"
}
console.log(Book2);

function displayBook1Review() {
  var queryURL = "http://idreambooks.com/api/books/reviews.json?q=" + Book1.title + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
  console.log(queryURL);
  console.log(Book1.title);
  console.log(Book1.author);
  //make the ajax call to the iDreamBooks API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("The response to the ajax call is below");
    console.log(response);
    $("#reviews-display").prepend(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
    $("#reviews-display").append(response.book.critic_reviews[0].snippet);
    $("#reviews-display").append(`<br><br>Source: ${response.book.critic_reviews[0].source}`);
    var reviewLink = response.book.critic_reviews[0].review_link;
    $("#reviews-display").append(`<br><br>To read on: `).append(reviewLink);
    //Now I just need to figure out how to make the variable reviewLink get printed to the page as a link instead of plain text
  })


}

displayBook1Review(Book1);