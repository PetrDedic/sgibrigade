function loadtheme() {
    let themestorage = currenttheme;


    if (themestorage == 'dark.css') {
        function current(oldlink) {
    
    
            var newlink = document.createElement("link");
    
    
            newlink.setAttribute("id", "theme");
    
            newlink.setAttribute("rel", "stylesheet");
            newlink.setAttribute("type", "text/css");
            newlink.setAttribute("href", 'dark.css');
    
            document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        }
    } else {
        function current(oldlink) {
    
    
            var newlink = document.createElement("link");
    
    
            newlink.setAttribute("id", "theme");
    
            newlink.setAttribute("rel", "stylesheet");
            newlink.setAttribute("type", "text/css");
            newlink.setAttribute("href", 'light.css');
    
            document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        }
    }
}

