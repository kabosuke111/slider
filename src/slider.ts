//typescript
import * as data from "./data/data.json";
import {DomData} from './index';
let slide_point: number = 0;

export function slider(props: DomData) {
    const group = document.getElementsByClassName("slider_box")[0];
    const item = document.getElementsByClassName("slider_item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    

    for(let i = 0; i < item.length; i++ ) {
        item[i].setAttribute('style', `padding: ${props.itemMargin}px; width: ${props.itemWidth}px;`);
    }

    next.addEventListener('click', () => {
        if(!slide_point) {
            slide_point = item[0].clientWidth;
        } else {
            slide_point = slide_point + item[0].clientWidth;
        }
        group.setAttribute('style', `left: -${slide_point}px`);
    });

    prev.addEventListener('click', () => {
        if(!slide_point) {
            slide_point = 0;
        } else {
            slide_point = slide_point - item[0].clientWidth;
        }
        group.setAttribute('style', `left: -${slide_point}px`);
       
    });
    console.log(props.dataLength);





};