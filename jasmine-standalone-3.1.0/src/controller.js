
$( document ).ready(function() {
  var thermostat = new Thermostat()

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + 'London' + '&appid=9daf5b75983737ffdad5d657c602861b&units=metric', function(data) {
    $('#temperature').text(data.main.temp)

  $( "#temperature-up" ).click(function() {
    // debugger;
      if ((thermostat.temperature + 1) > thermostat.maximumTemperature) {
        alert( "Maximum Temperature Breached!" );
      // event.preventDefault();
      }
        thermostat.up(1)
        showTemp()
  })

  $( "#temperature-down" ).click(function() {
    if ((thermostat.temperature - 1) < thermostat.minimumTemperature) {
      alert( "Minimum Temperatre Breached!")
    }
    thermostat.down(1)
    showTemp()
  })

  $( "#temperature-reset" ).click(function() {
    thermostat.reset()
    showTemp()
  })

  $( "#powersaving-on" ).click(function() {
    thermostat.powerSaver("on")
    showPower()
  })

  $( "#powersaving-off").click(function() {
    thermostat.powerSaver("off")
    showPower()
  })

  $ ("#power-saving-status").text(function() {
    thermostat.powerSaverStatus()
  })

  $ ("#current-city").change(function() {
    var city = $('#current-city').val()
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9daf5b75983737ffdad5d657c602861b&units=metric', function(data) {
      $('#temperature').text(data.main.temp)
    })

  })

})

  $("#power-saving-status").text(thermostat.powerSaverStatus())
  $("#current-temp").text(thermostat.temperature)

  showTemp = function() {
    $("#current-temp").text(thermostat.temperature)
  }

  showPower = function() {
    $("#power-saving-status").text(thermostat.powerSaverStatus())
  }

  // alert = function() {
  //   alert( "The link will no longer take you to jquery.com" );
  // }

});
