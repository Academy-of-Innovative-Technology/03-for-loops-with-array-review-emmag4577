var arrayItems = ["Apple", "Banana", "Cherry", "Dragonfruit", "Pear", "Watermelon", "Grapes"];


function updateArrayDisplay() {
    document.getElementById("arrayDisplay").innerText = arrayItems.join(", ");
  }

  function showArray() {
    var text = "";
    for (var i = 0; i < arrayItems.length; i++) {
      text += arrayItems[i] + "<br>";
    }
    document.getElementById("output").innerHTML = text;
  }

  function showReverse() {
    var text = "";
    for (var i = arrayItems.length - 1; i >= 0; i--) {
      text += arrayItems[i] + "<br>";
    }
    document.getElementById("output").innerHTML = text;
  }

  function addUnshift() {
    var value = document.getElementById("addValue").value;
    if (value !== "") {
      arrayItems.unshift(value);
      updateArrayDisplay();
      document.getElementById("addValue").value = "";
    }
  }

  function addPush() {
    var value = document.getElementById("addValue").value;
    if (value !== "") {
      arrayItems.push(value);
      updateArrayDisplay();
      document.getElementById("addValue").value = "";
    }
  }

  function removeShift() {
    arrayItems.shift();
    updateArrayDisplay();
  }

  function removePop() {
    arrayItems.pop();
    updateArrayDisplay();
  }

  updateArrayDisplay();