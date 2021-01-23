//typescript

interface SliderData {
    itemMargin: number,
    itemWidth: number,
    dataLength: number,
}

let slide_point: number = 0;

export function slider() {
    const slider = document.getElementById('slider');
    const slider_data: SliderData = {
        itemMargin: parseInt(slider.dataset.margin),
        itemWidth: parseInt(slider.dataset.width),
        dataLength: 0,
    }

    const group = document.getElementsByClassName("slider_box")[0];
    const item = document.getElementsByClassName("slider_item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    let anim_frag = true;
    
    for(let i = 0; i < item.length; i++ ) {
        item[i].setAttribute('style', `padding: ${slider_data.itemMargin}px; width: ${slider_data.itemWidth}px;`);
    }

    group.addEventListener('transitionstart', () => {
        anim_frag = false;
        if(slide_point > 0) {
            roop(item[0].clientWidth * item.length);
        }
    });

    group.addEventListener('transitionend', () => {
        anim_frag = true;
        if(slide_point > 0) {
        } else {
            roop(0)
        }

        if(slide_point == -(item[0].clientWidth * item.length / 2) || slide_point == (item[0].clientWidth * item.length / 2)){
            group.setAttribute('style', `left: 0px; transition:none`);
            slide_point = 0;
        }
    });

    next.addEventListener('click', () => {
        if(anim_frag){
            slide_point = slide_point - item[0].clientWidth;
            group.setAttribute('style', `left: ${slide_point}px;transition:0.5s`);
        }    
    });

    prev.addEventListener('click', () => {
        if(anim_frag){
            slide_point = slide_point + item[0].clientWidth;
            group.setAttribute('style', `left: ${slide_point}px;transition:0.5s`);
        }
    });

    function roop (numb: number) {
        const copy = document.getElementsByClassName('slider_group-copy')[0];
        copy.setAttribute(`style`, `left: -${numb}px`);
    }
};