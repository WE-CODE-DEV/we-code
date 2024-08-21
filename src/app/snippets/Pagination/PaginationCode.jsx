const darkThemeCSS = `/* Dark Theme */
    --priBg: 28, 28, 40;
    --pri: #1e2022;
    --sec: #22262f;
    --liClr: rgb(212 212 216);
    --activeClr: rgb(250, 250, 250);
    --activeBg: linear-gradient(to bottom right, #71717a, #174ce0);
    --svgBgClr: linear-gradient(to bottom right, #7595ee, #9ca3af);
`;

const lightThemeCSS = `/* Light Theme */
    --priBg: 28, 28, 40;
    --pri: #fff;
    --sec: #d4d4d8;
    --liClr: rgb(9 9 11);
    --activeClr: #3f3f46;
    --activeBg: linear-gradient(to bottom right, #e4e4e7, #a1a1aa);
    --svgBgClr: linear-gradient(to bottom right, #71717a, #27272a);
`;

const customThemeCSS = `/* Custom Theme */
    --priBg: 28, 28, 40;
    --pri: #1e293b;
    --sec: #334155;
    --liClr: rgb(248 250 252);
    --activeClr: #fff7ed;
    --activeBg: linear-gradient(to bottom right, #64748b, #cc703f);
    --svgBgClr: linear-gradient(to bottom right, #fed7aa, #fb923c);
`;

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagination</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="container">
        <div class="pagination-container">
            <div class="pagination overflow-hidden">
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page"></button>
                <div>
                    <ul></ul>
                </div>
                <button id="nxt-page" aria-label="Next Page" title="Go To Next Page"></button>
            </div>
        </div>
    </div>
    <script src="./index.js"></script>
</body>
</html>
`;

const cssCode = `
.pagination-container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pagination-container{
    \${themeCode}\

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.pagination {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: var(--pri);
    perspective: 400px;
    box-shadow: rgba(var(--priBg), 0.4) 0px 2px 4px, rgba(var(--priBg), 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.pagination button {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    color: rgb(113 113 122);
    opacity: 0.75;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    border: none;
    outline: none;
    background: unset;
}

#prev-page{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    background-image: var(--svgBgClr);
}

#nxt-page{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    background-image: var(--svgBgClr);
}

.pagination button:hover {
    opacity: 1;
}

.pagination button:nth-of-type(1){
    transform: rotateY(-15deg);
}

.pagination button:nth-of-type(1):active{
    transform: rotateY(-15deg) scale(.8);
}

.pagination button:nth-of-type(2){
    transform: rotateY(15deg);
}

.pagination button:nth-of-type(2):active{
    transform: rotateY(15deg) scale(.8);
}

.pagination div {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,.5), #000, rgba(0,0,0,.5));
    mask-image: linear-gradient(to right, rgba(0,0,0,.5), #000, rgba(0,0,0,.5));
}

.pagination ul {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.pagination ul li {
    display: flex;
    height: 1.75rem;
    width: 2rem;
    min-width: 2rem;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
            user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: var(--sec);
    animation: li-anim .3s ease .3s;
}

.pagination ul li.mid{
    transform: scale(.8);
    opacity: .5;
}


.pagination ul li {
    color: var(--liClr);
}

.pagination ul li.mid{
    transform: scale(.8);
    opacity: .5;
}

.pagination ul li.active{
    animation: make-active .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

@keyframes make-active{
    to {
        transform: scale(1.1);
        border-style: none;
        background-image: var(--activeBg);
        font-weight: 700;
        color: var(--activeClr);
        opacity: 1;
        box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
}

`;

const jsCode = `
const noOfPages = 10;
const showOnly = 5;
let currentPage = 1;

let scaleRange = 0.05;
const opacityRange = 0.2;

const paginationUL = document.querySelector('.pagination ul');
const prevBtn = document.getElementById('prev-page');
const nxtBtn = document.getElementById('nxt-page');

const renderPages = () => {
    paginationUL.innerHTML = '';

    const mid = Math.floor(showOnly / 2);

    for (let index = 0; index < showOnly; index++) {
        const liEle = document.createElement('li');
        liEle.classList.add('page-item');

        let textToBeRendered;

        // Calculate the text to be rendered
        if (currentPage <= mid) {
            textToBeRendered = (currentPage + index - mid - 1 + noOfPages) % noOfPages + 1;
        }else{
            textToBeRendered = (currentPage - mid + index - 1) % noOfPages + 1;

        }

        liEle.textContent = textToBeRendered;

        if (index !== mid) {
            const scaleFactor = 1 - Math.abs(index - mid) * scaleRange;
            const opacityFactor = 1 - Math.abs(index - mid) * opacityRange;
            const rotation = \`\${(index - mid) * 10}deg\`;

            liEle.style.transformOrigin = (index - mid) < 0 ? 'right center' : 'left center';
            liEle.style.transform = \`rotateY(\${rotation}) scale(\${scaleFactor})\`;
            liEle.style.opacity = opacityFactor;
        }
        else{
            liEle.classList.add('mid','active');
        }

        paginationUL.appendChild(liEle);
    }
}

let debounce;

paginationUL.addEventListener('click', (event) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        if (event.target.tagName === 'LI') {
            currentPage = +event.target.textContent;
            renderPages();
        }
    }, 300);
});

const navigatePage = (goToNxtPage) => {
    if(goToNxtPage){
        currentPage = currentPage < noOfPages ? currentPage + 1 : 1;
    }
    else{
        currentPage = currentPage > 1 ? currentPage - 1 : noOfPages;
    }

    renderPages();
}

renderPages();

prevBtn.addEventListener('click', () => navigatePage(false));
nxtBtn.addEventListener('click', () => navigatePage(true));

`;

const reactCode = `
import "./styles.css";

import { useState, useRef, useEffect} from 'react';

const Pagination = () => {  
    const paginationULRef = useRef(null);

    const noOfPages = 10;
    const showOnly = 5;
    const [currentPage, setCurrentPage] = useState(1);

    let scaleRange = 0.05;
    const opacityRange = 0.2;

    const renderPages = () => {
        paginationULRef.current.innerHTML = '';

        const mid = Math.floor(showOnly / 2);

        for (let index = 0; index < showOnly; index++) {
            const liEle = document.createElement('li');
            liEle.classList.add('page-item');

            let textToBeRendered;

            // Calculate the text to be rendered
            if (currentPage <= mid) {
                textToBeRendered = (currentPage + index - mid - 1 + noOfPages) % noOfPages + 1;
            }else{
                textToBeRendered = (currentPage - mid + index - 1) % noOfPages + 1;

            }

            liEle.textContent = textToBeRendered;

            if (index !== mid) {
                const scaleFactor = 1 - Math.abs(index - mid) * scaleRange;
                const opacityFactor = 1 - Math.abs(index - mid) * opacityRange;
                const rotation = \`\${(index - mid) * 10}deg\`;

                liEle.style.transformOrigin = (index - mid) < 0 ? 'right center' : 'left center';
                liEle.style.transform = \`rotateY(\${rotation}) scale(\${scaleFactor})\`;
                liEle.style.opacity = opacityFactor;
            }
            else{
                liEle.classList.add('mid','active');
            }

            paginationULRef.current.appendChild(liEle);
        }

    }

    const navigatePage = (goToNxtPage) => {
        if(goToNxtPage){
            setCurrentPage((prevPage) => prevPage < noOfPages ? prevPage + 1 : 1);
        }
        else{
            setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : noOfPages);
        }

        renderPages();
    }

    let debounce;

    const navigateTo = (event) => {
        clearTimeout(debounce);

        debounce = setTimeout(() => {
            if(event.target.tagName === 'LI'){
                setCurrentPage(+event.target.textContent);
            }
        }, 300);
    }

    useEffect(() => {
        renderPages();
    }, [currentPage]);
    
    return(
        <div class="pagination-container">
            <div className="pagination overflow-hidden">
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={() => navigatePage(false)}></button>
                <div>
                    <ul ref={paginationULRef} onClick={(event) => navigateTo(event)}></ul>
                </div>
                <button id="nxt-page" aria-label="Next Page" title="Go To Next Page" onClick={() => navigatePage(true)}></button>
            </div>
        </div>
    );
}

export default Pagination;
`;

const codeMap = {
    0: [[htmlCode, 'html', 'index.html', 'html'], [cssCode, 'css', 'styles.css', 'css'], [jsCode, 'javascript', 'index.js', 'js']],
    1: [[reactCode, 'javascript', 'app.js', 'react'], [cssCode, 'css', 'styles.css', 'css']]
};

const themes = {
  dark: darkThemeCSS,
  light: lightThemeCSS,
  custom: customThemeCSS
}

export { htmlCode, cssCode, jsCode, reactCode, themes, codeMap};