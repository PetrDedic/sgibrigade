let theme = "theme";
let check = document.getElementById("theme").getAttribute("href");


localStorage.setItem('storagetheme', check);




function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");


    newlink.setAttribute("id", "theme");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

    let theme = "theme";
    let check = document.getElementById("theme").getAttribute("href");

    localStorage.setItem('storagetheme', check);
    const currenttheme = localStorage.getItem('storagetheme');

    console.log(currenttheme);

}

