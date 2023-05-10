document.addEventListener('DOMContentLoaded', () => {
    const imagesSvgThumb = document.querySelectorAll('.gallery-thumbs-vertical object');
    const imagesSvgThumbSlide = document.querySelectorAll('.gallery-thumbs-vertical .svg-slide');
    const imagesSvgSlide = document.querySelectorAll('.gallery-top-vertical .svg-slide');

    if (imagesSvgThumb) {
        imagesSvgSlide[0].classList.remove('d-none');
        imagesSvgThumb.forEach((image, index) => {
            const svg = image.contentDocument.querySelector('svg');

            svg.addEventListener('click', () => setShow(index, imagesSvgSlide));
        });
    }
});

const setShow =  (index, slideSvg) => {
    slideSvg.forEach(el => {
        !el.classList.contains('d-none') && el.classList.add('d-none');
    });
    slideSvg[index].classList.remove('d-none');
    const hideSvg = slideSvg[index].querySelector('.apply-color');
    //console.log(document.getElementById('customColor').value);
    /*const svgs = document.querySelectorAll('.apply-color');
    svgs.forEach(svg => {
        svg.getSVGDocument().getElementById('path0').setAttribute('fill', this.color);
    });*/
}