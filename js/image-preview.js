layout.createObj('preview');

layout.preview.imagePreview = function() {
    if (layout.preview.showImg.querySelector('img')) {
        const image = layout.preview.showImg.querySelector('img');
        layout.preview.showImg.removeChild(image);
    }

    if (!this.value) return;

    const enterImg = document.createElement('img');
    enterImg.src = this.value;
    enterImg.alt = 'image';

    layout.preview.showImg.classList.add('preview');
    layout.preview.showImg.insertBefore(enterImg, layout.preview.showImg.firstChild);
}

layout.preview.imgURL = document.getElementById('input--image-url');
layout.preview.showImg = document.querySelector('.show-image');
layout.preview.warning = document.querySelector('.warning');

layout.preview.imgURL.addEventListener('change', layout.preview.imagePreview);
layout.preview.imgURL.addEventListener('click', layout.preview.imgURL.select);
