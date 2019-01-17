$(function(){
  $(".btn").click(function(){
    var typeInput = $(".food-type").val();
    var distanceInput = parseInt( $(".distance").val() );
    var hourInput = $(".hours").val();
    var reject = "Eat at home!"

  if(typeInput === "american") {
    if (distanceInput >= 5 && (hourInput === "lunch" || hourInput === "dinner")) {
      $(".show").text("American Food");
    } else {
      $(".show").text(reject);
    }
  }

  else if(typeInput === "italian") {
      if(distanceInput >= 10 && hourInput === "breakfast") {
        $(".show").text("Italian Breakfast");
      } else {
        $(".show").text(reject);
      }
  }

  else if(typeInput === "mexican") {
        if(distanceInput >= 10 && (hourInput === "lunch" || hourInput === "dinner")) {
          $(".show").text("Mexican Food");
        } else {
          $(".show").text(reject);
        }
  }

  else {
        if(distanceInput >= 15 && (hourInput === "dinner")){
          $(".show").text("Dessert Place");
        } else {
          $(".show").text(reject);
        }
  }

    });
  });
