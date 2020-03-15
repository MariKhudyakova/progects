var elem = document.getElementById("btn");

elem.addEventListener("click", () => {
    var mention = document.createElement("a");
    mention.textContent = "https://github.com";
    mention.setAttribute("title", "Click me!");
    mention.setAttribute("class", "mention");
    mention.setAttribute("href", "https://github.com")
    document.body.appendChild(mention);
}, false);