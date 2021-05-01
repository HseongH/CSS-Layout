layout.createObj('preview');

layout.preview.imageValidation = function(url, elem) {
    if (!url) {
        layout.preview.removeImage(layout.selectedBox);
        layout.selectedBox.classList.remove('image-box');
        layout.displayed.hideElement(layout.displayed.enterImg);
        layout.displayed.enterImgIsHide();

        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            if (elem === layout.preview.imgURL) {
                layout.preview.imagePreview(url);
                return;
            }

            layout.enterImg.enterImg();
        } else {
            layout.displayed.showElement(layout.preview.warning);
            layout.preview.warning.querySelector('.warning__text').innerText = '이미지 주소가 유효하지 않습니다.';

            return false;
        }
    }
}

layout.preview.warningDisplay = function(image) {
    if (!image) return;

    image.onload = function() {
        const naturalSize = image.naturalWidth;
        const boxSize = layout.selectedBox.offsetWidth;

        if (naturalSize < boxSize) {
            layout.displayed.showElement(layout.preview.warning);
            layout.preview.warning.querySelector('.warning__text').innerText = '이미지 크기가 작아 깨질 수 있습니다.';
            return;
        } 
        
        layout.displayed.hideElement(layout.preview.warning);
    }
}

layout.preview.removeImage = function(imgCon=layout.preview.showImg) {
    if (!imgCon.querySelector('img')) return;

    const image = imgCon.querySelector('img');
    imgCon.removeChild(image);
}

layout.preview.imagePreview = function(url) {
    layout.preview.removeImage();

    const enterImg = new Image;
    enterImg.setAttribute('src', url);
    enterImg.alt = 'image';
    
    layout.preview.warningDisplay(enterImg);
    layout.preview.showImg.insertBefore(enterImg, layout.preview.showImg.firstChild);

    layout.preview.showImg.classList.add('preview');
}

layout.preview.imgURL = document.getElementById('input--image-url');
layout.preview.showImg = document.querySelector('.show-image');
layout.preview.warning = document.querySelector('.warning');

layout.preview.imgURL.addEventListener('change', function() {
    layout.preview.imageValidation(this.value, this);
});
layout.preview.imgURL.addEventListener('click', layout.preview.imgURL.select);
