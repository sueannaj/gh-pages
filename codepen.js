// much credit goes to https://edupala.com/copy-div-content-clipboard/
window.onclick = function(e) {
    var clickedElementId = e.srcElement.id;
    var clickedElement = document.getElementById(clickedElementId);
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(clickedElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    
    var swatchAlertElement = document.getElementById('swatchAlert');
    swatchAlertElement.classList.add("fade-in-out");
    setTimeout(function(){swatchAlertElement.classList.remove("fade-in-out")}, 1750);
}
