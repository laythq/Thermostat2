var Thermostat = function() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maximumTemperature = 25
}

Thermostat.prototype.returnTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(value) {
  if ((this.temperature + value) > this.maximumTemperature) {
    throw "Maximum temperature breached"
  }
  this.temperature = this.temperature + value
}

Thermostat.prototype.down = function(value) {
  if ((this.temperature - value) < this.minimumTemperature) {
    throw "Minimum temperature is 10 degrees"
  }
  this.temperature = this.temperature - value
}

Thermostat.prototype.powerSaver = function(command) {
  if (command === "on") {
    this.maximumTemperature = 25
    this.powerSaverStatus("on")
  }

  else if (command === "off") {
    this.maximumTemperature = 32
    this.powerSaverStatus("off")
  }
  else throw "Invalid command, choose on or off"
}

Thermostat.prototype.powerSaverStatus = function() {
  if (this.maximumTemperature === 25) {
    return "on"
  }
  else if (this.maximumTemperature === 32) {
    return "off"
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.currentUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage'
  }
  if (this.temperature < 25) {
    return 'mid-usage'
  }
  if (this.temperature > 24) {
    return 'high-usage'
  }
}
