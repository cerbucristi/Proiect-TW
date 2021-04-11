function responsiveIcon() {
    var x = document.getElementById("navigation-bar");
  
    if (x.className === "topnav")
        x.className += " responsive";
    else x.className = "topnav";
  }
  
  function onLogoClick() {
    window.open("index.html", "_self");
  }
  
  function onMemberClick() {
    window.open("staff.html", "_self");
  }