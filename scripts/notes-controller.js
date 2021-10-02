function loadNotes() {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var defaultHeightA = 797;
    var defaultHeightB = 822;
    var defaultHeightC = 1197;
    var variableHeight = 70;
  } else {
    var defaultHeightA = 597;
    var defaultHeightB = 697;
    var defaultHeightC = 922;
    var variableHeight = 25;
  }

  console.log("Current 1: ", NotesCurrent1);
  console.log("Current 2: ", NotesCurrent2);

  // ***** CURRENT COURSE 1 NOTES CONTROLLER ***** //

  // WEEK 1
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 1) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W1) {
      if (NotesCurrent1.W1[day] != "" && NotesCurrent1.W1[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W1[day].split("+")[0];
        var link = NotesCurrent1.W1[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W1[day] != "" && NotesCurrent1.W1[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W1[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 2) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W2) {
      if (NotesCurrent1.W2[day] != "" && NotesCurrent1.W2[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W2[day].split("+")[0];
        var link = NotesCurrent1.W2[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W2[day] != "" && NotesCurrent1.W2[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W2[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 2

  // WEEK 3
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 3) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W3) {
      if (NotesCurrent1.W3[day] != "" && NotesCurrent1.W3[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W3[day].split("+")[0];
        var link = NotesCurrent1.W3[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W3[day] != "" && NotesCurrent1.W3[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W3[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 3

  // WEEK 4
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 4) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W4) {
      if (NotesCurrent1.W4[day] != "" && NotesCurrent1.W4[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W4[day].split("+")[0];
        var link = NotesCurrent1.W4[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W4[day] != "" && NotesCurrent1.W4[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W4[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 4

  // WEEK 5
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 5) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W5) {
      if (NotesCurrent1.W5[day] != "" && NotesCurrent1.W5[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W5[day].split("+")[0];
        var link = NotesCurrent1.W5[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W5[day] != "" && NotesCurrent1.W5[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W5[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 5

  // WEEK 6
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 6) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W6) {
      if (NotesCurrent1.W6[day] != "" && NotesCurrent1.W6[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W6[day].split("+")[0];
        var link = NotesCurrent1.W6[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W6[day] != "" && NotesCurrent1.W6[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W6[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 6

  // WEEK 7
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 7) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W7) {
      if (NotesCurrent1.W7[day] != "" && NotesCurrent1.W7[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W7[day].split("+")[0];
        var link = NotesCurrent1.W7[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W7[day] != "" && NotesCurrent1.W7[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W7[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 7

  // WEEK 8
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 8) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W8) {
      if (NotesCurrent1.W8[day] != "" && NotesCurrent1.W8[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W8[day].split("+")[0];
        var link = NotesCurrent1.W8[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W8[day] != "" && NotesCurrent1.W8[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W8[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 8

  // WEEK 9
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 9) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W9) {
      if (NotesCurrent1.W9[day] != "" && NotesCurrent1.W9[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W9[day].split("+")[0];
        var link = NotesCurrent1.W9[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W9[day] != "" && NotesCurrent1.W9[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W9[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 9

  // WEEK 10
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 10) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W10) {
      if (NotesCurrent1.W10[day] != "" && NotesCurrent1.W10[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W10[day].split("+")[0];
        var link = NotesCurrent1.W10[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W10[day] != "" && NotesCurrent1.W10[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W10[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 10

  // WEEK 11
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 11) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W11) {
      if (NotesCurrent1.W11[day] != "" && NotesCurrent1.W11[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W11[day].split("+")[0];
        var link = NotesCurrent1.W11[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W11[day] != "" && NotesCurrent1.W11[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W11[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 11

  // WEEK 12
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 12) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W12) {
      if (NotesCurrent1.W12[day] != "" && NotesCurrent1.W12[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W12[day].split("+")[0];
        var link = NotesCurrent1.W12[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W12[day] != "" && NotesCurrent1.W12[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W12[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 12

  // WEEK 13
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 13) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W13) {
      if (NotesCurrent1.W13[day] != "" && NotesCurrent1.W13[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W13[day].split("+")[0];
        var link = NotesCurrent1.W13[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W13[day] != "" && NotesCurrent1.W13[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W13[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 13

  // WEEK 14
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 14) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W14) {
      if (NotesCurrent1.W14[day] != "" && NotesCurrent1.W14[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W14[day].split("+")[0];
        var link = NotesCurrent1.W14[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W14[day] != "" && NotesCurrent1.W14[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W14[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 14

  // WEEK 15
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 15) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W15) {
      if (NotesCurrent1.W15[day] != "" && NotesCurrent1.W15[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W15[day].split("+")[0];
        var link = NotesCurrent1.W15[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W15[day] != "" && NotesCurrent1.W15[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W15[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 15

  // WEEK 16
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 16) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W16) {
      if (NotesCurrent1.W16[day] != "" && NotesCurrent1.W16[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W16[day].split("+")[0];
        var link = NotesCurrent1.W16[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W16[day] != "" && NotesCurrent1.W16[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W16[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 16

  // WEEK 17
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 17) {
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent1.W17) {
      if (NotesCurrent1.W17[day] != "" && NotesCurrent1.W17[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent1.W17[day].split("+")[0];
        var link = NotesCurrent1.W17[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      } else if (NotesCurrent1.W17[day] != "" && NotesCurrent1.W17[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent1.W17[day] + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 17

  // ***** CURRENT COURSE 2 NOTES CONTROLLER ***** //

  // WEEK 1
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 1) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W1) {
      if (NotesCurrent2.W1[day] != "" && NotesCurrent2.W1[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W1[day].split("+")[0];
        var link = NotesCurrent2.W1[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W1[day] != "" && NotesCurrent2.W1[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W1[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 2) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W2) {
      if (NotesCurrent2.W2[day] != "" && NotesCurrent2.W2[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W2[day].split("+")[0];
        var link = NotesCurrent2.W2[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W2[day] != "" && NotesCurrent2.W2[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W2[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 2

  // WEEK 3
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 3) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W3) {
      if (NotesCurrent2.W3[day] != "" && NotesCurrent2.W3[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W3[day].split("+")[0];
        var link = NotesCurrent2.W3[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W3[day] != "" && NotesCurrent2.W3[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W3[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 3

  // WEEK 4
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 4) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W4) {
      if (NotesCurrent2.W4[day] != "" && NotesCurrent2.W4[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W4[day].split("+")[0];
        var link = NotesCurrent2.W4[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W4[day] != "" && NotesCurrent2.W4[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W4[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 4

  // WEEK 5
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 5) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W5) {
      if (NotesCurrent2.W5[day] != "" && NotesCurrent2.W5[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W5[day].split("+")[0];
        var link = NotesCurrent2.W5[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W5[day] != "" && NotesCurrent2.W5[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W5[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 5

  // WEEK 6
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 6) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W6) {
      if (NotesCurrent2.W6[day] != "" && NotesCurrent2.W6[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W6[day].split("+")[0];
        var link = NotesCurrent2.W6[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W6[day] != "" && NotesCurrent2.W6[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W6[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 6

  // WEEK 7
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 7) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W7) {
      if (NotesCurrent2.W7[day] != "" && NotesCurrent2.W7[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W7[day].split("+")[0];
        var link = NotesCurrent2.W7[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W7[day] != "" && NotesCurrent2.W7[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W7[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 7

  // WEEK 8
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 8) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W8) {
      if (NotesCurrent2.W8[day] != "" && NotesCurrent2.W8[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W8[day].split("+")[0];
        var link = NotesCurrent2.W8[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W8[day] != "" && NotesCurrent2.W8[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W8[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 8

  // WEEK 9
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 9) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W9) {
      if (NotesCurrent2.W9[day] != "" && NotesCurrent2.W9[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W9[day].split("+")[0];
        var link = NotesCurrent2.W9[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W9[day] != "" && NotesCurrent2.W9[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W9[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 9

  // WEEK 10
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 10) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W10) {
      if (NotesCurrent2.W10[day] != "" && NotesCurrent2.W10[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W10[day].split("+")[0];
        var link = NotesCurrent2.W10[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W10[day] != "" && NotesCurrent2.W10[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W10[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 10

  // WEEK 11
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 11) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W11) {
      if (NotesCurrent2.W11[day] != "" && NotesCurrent2.W11[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W11[day].split("+")[0];
        var link = NotesCurrent2.W11[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W11[day] != "" && NotesCurrent2.W11[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W11[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 11

  // WEEK 12
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 12) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W12) {
      if (NotesCurrent2.W12[day] != "" && NotesCurrent2.W12[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W12[day].split("+")[0];
        var link = NotesCurrent2.W12[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W12[day] != "" && NotesCurrent2.W12[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W12[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 12

  // WEEK 13
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 13) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W13) {
      if (NotesCurrent2.W13[day] != "" && NotesCurrent2.W13[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W13[day].split("+")[0];
        var link = NotesCurrent2.W13[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W13[day] != "" && NotesCurrent2.W13[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W13[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 13

  // WEEK 14
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 14) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W14) {
      if (NotesCurrent2.W14[day] != "" && NotesCurrent2.W14[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W14[day].split("+")[0];
        var link = NotesCurrent2.W14[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W14[day] != "" && NotesCurrent2.W14[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W14[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 14

  // WEEK 15
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 15) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W15) {
      if (NotesCurrent2.W15[day] != "" && NotesCurrent2.W15[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W15[day].split("+")[0];
        var link = NotesCurrent2.W15[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W15[day] != "" && NotesCurrent2.W15[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W15[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 15

  // WEEK 16
  if (document.getElementById("courseCurrent2-Selector").selectedIndex == 16) {
    $("#courseCurrent2-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in NotesCurrent2.W16) {
      if (NotesCurrent2.W16[day] != "" && NotesCurrent2.W16[day].indexOf("+") != -1) {
        counter++;
        var newSpan = document.createElement('span');
        var title = NotesCurrent2.W16[day].split("+")[0];
        var link = NotesCurrent2.W16[day].split("+")[1];
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      } else if (NotesCurrent2.W16[day] != "" && NotesCurrent2.W16[day].indexOf("+") == -1) {
        counter++;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "<b>" + String(day) + "</b>" + ": " + NotesCurrent2.W16[day] + "<br/>";
        document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent2-Notes").appendChild(newSpan);
    } else {
      console.log(counter)
      document.getElementById("courseCurrent2-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 16

}

function loadedTabletop() {
  $("#courseInfoTitle").html("<b>Current Course Information</b>");
  $("#courseInfoTitleFall").html("<b>Past Courses</b>");
  loadNotes();
}
