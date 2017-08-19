
function myFunction() {
  var hourly = document.getElementById("hourly").value;
  var time  = document.getElementById('time').value;
  //check the right value is in the text fields
  if(isNaN(time)||isNaN(hourly)){
  document.getElementById("results").innerHTML = "Please enter only numbers in the text fields";
    return;
  }
  //new values for print
  var perDay = hourly*(time/60);
  var perWeek = perDay*5;
  var perYear = perWeek*52;
  document.getElementById("results").innerHTML = "Looks like you made $" + perDay.toFixed(2)+ " poopin today. \t If you used the restroom this same amount of time each workday you would make $"+perWeek.toFixed(2)+" per week and $"+perYear.toFixed(2)+" per year for your toliet time."
  
  
} 