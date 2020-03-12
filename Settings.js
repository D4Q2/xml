  function setBackgroundColor(color)
  {
    var settings = Settings.xml;
    parser = new DOMParser();
    var settingsParsed = parser.parseFromString(settings,"text/xml");
    settingsParsed.getElementsByTagName("backgroundColorBody")[0].childNodes[0].nodeValue = color;
  }


   // A function to take us to the donate page
   function donatePage()
   {
     // Code to take us to the donate page
     window.open('https://d4q2.github.io/donate');
   }

   // And for the home page
   function homePage()
   {
     window.open('https://d4q2.github.io/home');
   }


   let menuBool = false;

   function openMenu()
   {
     menuBool = menuBool ? false : true;


     if (menuBool == true)
     {
       var menu = document.getElementById("menu");

       // Create a button (in this case it will be the donate button)
       var donateButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case donate)
        donateButton.innerHTML = "Donate";

        // Change the class to the class for menu buttons and the id to donateButton so we can access it 
        // easier and it can assume previously defined css values
        donateButton.setAttribute("class", "menuButton");
        donateButton.setAttribute("id", "donateButton");

        // Change the onclick value to what we want (in this case a function to take us  to the donate page)
        donateButton.onclick = donatePage;

        // Append donateButton to the menu <div>
        menu.appendChild(donateButton);

        // Move it into the perfect position
        donateButton.style.transform = "translateX(-10px)";


        // And the same process for the home button
        var homeButton = document.createElement("BUTTON");
        homeButton.innerHTML = "home";
        homeButton.setAttribute("class", "menuButton");
        homeButton.setAttribute("id", "homeButton");
        menu.appendChild(homeButton);
        homeButton.style.transform = "translateX(-20px)";
        homeButton.onclick = homePage;
     }

     else
     {
       // Clear our menu div
       document.getElementById("menu").innerHTML = "";

       // Get variable for menu div and make variable for our new openMenu button
       var menu = document.getElementById("menu");
       var menuOpener = document.createElement("BUTTON");
 
       // Specify qualities for our openMenu button
       menuOpener.innerHTML = "Menu";
       menuOpener.setAttribute("class", "openMenu");
       menuOpener.setAttribute("id", "menuOpener");
       menuOpener.onclick = openMenu;

       // Append it to the menu div
       menu.appendChild(menuOpener);
     }
   }

   //Change color of background

   //Declare variables
   var headerHomeChange;
   var defaultColor = "#ffffff";
   // Add event listeners
   window.addEventListener("load", startupHeaderHome, false);
   // Set some things up for the body color changing
   function startupHeaderHome() 
   {
     headerHome = document.querySelector("#headerHome");
     headerHome.value = defaultColor;
     headerHome.addEventListener("input", updateHeaderHome, false);
     headerHome.select();
   }
   // update body background color
   function updateHeaderHome(event) 
   {
     // Our document body   the style background color   and change it to the target value
     document.getElementById("headerHome").style.background = event.target.value;
     document.getElementsByTagName("bodybackgroundcolor")[0].childNodes[0].nodeValue = event.target.value;
   }
