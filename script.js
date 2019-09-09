var imageInput = document.getElementById('image-upload');
imageInput.onchange = loadInput;

function loadInput(event) {

    //load image
    var imageElement = document.getElementById('image');
    var imageFile = event.target.files[0];
    imageElement.setAttribute('src', URL.createObjectURL(imageFile));

    //generate random image manipulation
    Caman("#image", function () {
        this.sharpen(randomNumber(100, 5000))
            .saturation(randomNumber(100, 5000))
            .vibrance(randomNumber(0, 100))
            .noise(randomNumber(0, 50))
            .render(function () {
                var image = this.toBase64();
                var result = document.getElementById('result');
                result.innerHTML = `<img id="image" src="${image}" />`;
            });
    });
};

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}