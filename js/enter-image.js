layout.createObj('enterImg');

layout.enterImg.enterImg = function() {
    const imgBox = layout.selectedBox;

    layout.preview.removeImage(imgBox);

    const enterImg = document.createElement('img');
    enterImg.src = layout.preview.imgURL.value;
    enterImg.alt = 'image';

    imgBox.appendChild(enterImg);
    imgBox.classList.add('image-box');

    layout.displayed.hideElement(layout.displayed.enterImg);
    layout.displayed.enterImgIsHide();
}

layout.enterImg.enterImgBtn = document.querySelector('.btn--enter-image');
layout.enterImg.enterImgBtn.addEventListener('click', layout.enterImg.enterImg);
