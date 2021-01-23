//typescript
import "./css/style.scss";
import * as data from "./data/data.json";
import { slider } from "./slider";

export interface DomData {
    itemMargin: number,
    itemWidth: number,
    dataLength: number,
}

interface BtnText {
    prev: string;
    next: string;
}

const dom_data: DomData = {
    itemMargin: 10,
    itemWidth: 200,
    dataLength: 0,
}

const btnText: BtnText = {
    'prev': '◀︎',
    'next': '▶︎'
}

interface ListData {
    main: HTMLElement | null;
    mainFrag: DocumentFragment | null;
    div: HTMLElement & {className: string;}  | null; 
    ul: HTMLElement & {className: string;}  | null;
    frag: DocumentFragment | null;
    figcaptionInner: Text;
    list: HTMLElement & {className: string;} | null;
    link: HTMLElement & {className: string;} | null;
    figcaption: HTMLElement & {className: string;} | null;
    fig: HTMLElement & {className: string;} | null;
    image: HTMLElement & {className: string;src: string} | null;
}

interface ListParts {
    frag: DocumentFragment | null;
    btnNext: HTMLElement & {id:string;className: string;} | null;
    btnPrev: HTMLElement & {id:string;className: string;} | null;
}

(function(){
    const dataImage = data.imageData;
    const list_data: ListData = {main: null,mainFrag: null,frag: null,div: null,ul: null,figcaptionInner: null,list: null,link: null,figcaption: null,fig: null,image: null};
    const list_parts: ListParts = {frag: null, btnNext: null, btnPrev: null};
    list_data.div = Object.assign(document.createElement('div'), {className: `slider_box`});
    list_data.main = document.getElementById('slider');
    list_data.mainFrag = document.createDocumentFragment();
    list_data.frag = document.createDocumentFragment();
    list_parts.frag = document.createDocumentFragment();
    
    for(let j = 0; j < 2; j++){
        if(j === 0){
            list_data.ul = Object.assign(document.createElement('ul'), {className: `slider_group slider_group_origin`});
        } else {
            list_data.ul = Object.assign(document.createElement('ul'), {className: `slider_group slider_group_copy`});
        }

        for (let key of dataImage) {
            list_data.figcaptionInner = document.createTextNode(key.title);
            list_data.list = Object.assign(document.createElement('li'), {className: 'slider_item'});
            list_data.link = Object.assign(document.createElement('a'), {className: 'slider_link'});
            list_data.fig = Object.assign(document.createElement('figure'), {className: 'slider_image_group'});
            list_data.image = Object.assign(document.createElement('img'), {className: 'slider_image_item', src: key.url, alt: key.title});
            list_data.figcaption = Object.assign(document.createElement('figcaption'), {className: 'slider_image_caption'});
    
            list_data.figcaption.appendChild(list_data.figcaptionInner);
            list_data.fig.appendChild(list_data.image);
            list_data.fig.appendChild(list_data.figcaption);
            list_data.link.appendChild(list_data.fig);
            list_data.list.appendChild(list_data.link);
            list_data.frag.appendChild(list_data.list);
        }
        list_data.ul.appendChild(list_data.frag);
        list_data.mainFrag.appendChild(list_data.ul);
    }
    list_parts.btnPrev = Object.assign(document.createElement('button'), {id:'prev', className:'slider_button button_prev'});
    list_parts.btnPrev.textContent = btnText.prev;
    list_parts.btnNext = Object.assign(document.createElement('button'), {id:'next', className:'slider_button button_next'});
    list_parts.btnNext.textContent = btnText.next;
    list_parts.frag.appendChild(list_parts.btnPrev);
    list_parts.frag.appendChild(list_parts.btnNext);
    
    list_data.main.appendChild(list_parts.frag);
    list_data.div.appendChild(list_data.mainFrag);
    list_data.main.appendChild(list_data.div);
    dom_data.dataLength = dataImage.length;
    slider(dom_data);
})();