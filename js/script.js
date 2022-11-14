function redirect(page){
    location.href = page;
}

function init(){
    var images = document.getElementsByTagName("img")

    var highlightImg = function(src) {
        alert("Works" + src);
    };

    for (var i = 0; i < images.length; i++) {
        let src = images[i].src
        images[i].addEventListener('click', function() {
            highlightImg(src);
        });
    }
}

