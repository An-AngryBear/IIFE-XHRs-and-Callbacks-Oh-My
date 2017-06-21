var Predator = (function () {
// privately stores the data when loaded
  var carnivores = [];
  var herbivores = [];
  return {
// grabs and makes available carnivore data from JSON files
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText);
        callbackToInvoke(carnivores);
      });
    },
// grabs and makes available herbivore data from JSON files
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();
      loader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText);
        callbackToInvoke(herbivores);
      });
    }
  }
})();
