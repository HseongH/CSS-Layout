layout.createObj('preview');

layout.preview.warningDisplay = function(image) {
    if (!image) return;

    image.onload = function() {
        const naturalSize = image.naturalWidth;
        const boxSize = layout.selectedBox.offsetWidth;

        if (naturalSize < boxSize) {
            layout.displayed.showElement(layout.preview.warning);
        } else {
            layout.displayed.hideElement(layout.preview.warning);
        }
    }
}

layout.preview.removeImage = function(imgCon=layout.preview.showImg) {
    if (!imgCon.querySelector('img')) return;

    const image = imgCon.querySelector('img');
    imgCon.removeChild(image);
}

layout.preview.imagePreview = function() {
    layout.preview.removeImage();

    if (!this.value) {
        layout.preview.showImg.classList.remove('preview');
        return;
    }

    const enterImg = document.createElement('img');
    enterImg.src = this.value;
    enterImg.alt = 'image';

    layout.preview.showImg.classList.add('preview');
    layout.preview.showImg.insertBefore(enterImg, layout.preview.showImg.firstChild);

    layout.preview.warningDisplay(enterImg);
}

layout.preview.imgURL = document.getElementById('input--image-url');
layout.preview.showImg = document.querySelector('.show-image');
layout.preview.warning = document.querySelector('.warning');

layout.preview.imgURL.addEventListener('change', layout.preview.imagePreview);
layout.preview.imgURL.addEventListener('click', layout.preview.imgURL.select);
