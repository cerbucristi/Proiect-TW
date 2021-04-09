var acc = document.getElementsByClassName("accordion-info");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion-active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginBottom = "0vh";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.marginBottom = "4vh"
        } 
    });
}