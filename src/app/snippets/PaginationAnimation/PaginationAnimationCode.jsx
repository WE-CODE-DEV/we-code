const darkThemeCSS = `/* Dark Theme */
    --pri: rgb(30, 32, 34);
    --txtClr: #a1a1aa;
    --themeLiBg: linear-gradient(to bottom right, #52525b, #174ce0);
    --themeLiClr: #e4e4e7;
`;

const lightThemeCSS = `/* Light Theme */
    --pri: #fff;
    --txtClr: #52525b;
    --themeLiBg: linear-gradient(to bottom right, #e4e4e7, #a1a1aa);
    --themeLiClr: #27272a;
`;

const customThemeCSS = `/* Custom Theme */
    --pri: #0f172a;
    --txtClr: #94a3b8;
    --themeLiBg: linear-gradient(to bottom right, #64748b, #475569);
    --themeLiClr: #f1f5f9;
`;

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagination with Sliding Animation</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="container">
        <div class="pagination-component">
            <div class="pagination-anim">
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page"></button>
                <div>
                    <span>Page</span>
                    <ul>
                        <li>1</li>
                    </ul>
                    <span>of 10</span>
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
.pagination-component * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    
.pagination-component{
    width: fit-content;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 auto;
    z-index: 1;
        
    \${themeCode}\
}

.pagination-component button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
}

.pagination-anim{
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.375rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: var(--pri);
    box-shadow: rgba(30, 32, 34, 0.4) 0px 2px 4px, rgba(30, 32, 34, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.pagination-anim > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    font-weight: 600;
    color: var(--txtClr);
}

.pagination-anim ul {
    position: relative;
    display: flex;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
}

.pagination-anim ul li {
    position: absolute;
    inset: 0px;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transform: translateY(0);
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.pagination-anim ul li{
    background-image: var(--themeLiBg);
    color: var(--themeLiClr);
    font-weight: 600;
}

.pagination-anim[data-to='next'] ul li:nth-of-type(2){
    transform: translateY(100%);
    animation: move-to-initial .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

.pagination-anim[data-to='next'] ul li:nth-of-type(1){
    transform: translateY(-100%);
}

@keyframes move-to-initial{
    to{
        transform: translateY(0%);
    }
}

.pagination-anim[data-to='previous'] ul li:nth-of-type(1){
    transform: translateY(-100%);
    animation: move-to-initial .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

.pagination-anim[data-to='previous'] ul li:nth-of-type(2){
    transform: translateY(100%);
}

.pagination-anim button {
    height: 1.5rem;
    width: 1.5rem;
    color: rgb(113 113 122 / 1);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    position: relative;
}

.pagination-anim button::before{
    content: '';
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom right, #9ca3af, #7595ee);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.pagination-anim button#prev-page{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
}

.pagination-anim button#nxt-page{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%23000'/%3E%3C/svg%3E%0A");
}

`;

const jsCode = `
const paginationContainer = document.querySelector('.pagination-anim');
const previousPage = document.getElementById('prev-page');
const nextPage = document.getElementById('nxt-page');

let currentPage = 1;

const totalNoOfPages = 10;

let isDebouncing = false;
const debounceTime = 500;

const debounce = (func, delay) => {
    let timeoutId;
    
    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const navigatePage = (bool) => {
    const container = paginationContainer.querySelector('div ul');
    const oldLiEle = container.querySelector('li');

    const newLiEle = document.createElement('li');
    newLiEle.textContent = currentPage;

    paginationContainer.setAttribute('data-to', bool ? 'next': 'previous');

    bool ? container.appendChild(newLiEle) : container.insertBefore(newLiEle, oldLiEle);

    newLiEle.addEventListener('animationend', event => {
        container.removeChild(oldLiEle);
        paginationContainer.removeAttribute('data-to');
    }, {once: true});
}

previousPage.addEventListener('click', debounce(() => {            
    currentPage = (currentPage - 1) >= 1 ? currentPage - 1 : totalNoOfPages;
    navigatePage(false);
}, debounceTime));

nextPage.addEventListener('click', debounce(() => {            
    currentPage = (currentPage + 1) <= totalNoOfPages ? currentPage + 1 : 1;
    navigatePage(true);
}, debounceTime));

`;

const reactCode = `
import "./styles.css";

import { useRef } from "react";

const PaginationAnimation = () => {
    const paginationULRef = useRef(null);

    const currentPage = useRef(1);

    const totalNoOfPages = 10;

    let isDebouncing = false;
    const debounceTime = 500;

    const debounce = (func, delay) => {
        let timeoutId;
        
        return (...args) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const navigatePage = (bool) => {
        const container = paginationULRef.current.querySelector('div ul');

        const oldLiEle = container.querySelector('li');

        const newLiEle = document.createElement('li');
        newLiEle.textContent = currentPage.current;

        paginationULRef.current.setAttribute('data-to', bool ? 'next': 'previous');

        bool ? container.appendChild(newLiEle) : container.insertBefore(newLiEle, oldLiEle);

        newLiEle.addEventListener('animationend', () => {
            container.removeChild(oldLiEle);
            paginationULRef.current.removeAttribute('data-to');
        }, {once: true});
    }

    const navigateBasedOnBtn = debounce((bool) => {
        if(bool){
            currentPage.current = (currentPage.current + 1) <= totalNoOfPages ? (currentPage.current + 1) : 1;
        }
        else{
            currentPage.current = (currentPage.current - 1) >= 1 ? (currentPage.current - 1) : totalNoOfPages;
        }
        navigatePage(bool);
    }, debounceTime);

    return(
        <div className="pagination-component">
            <div className="pagination-anim" ref={paginationULRef}>
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={()=>navigateBasedOnBtn(false)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                            fill="#000" />
                    </svg>
                </button>
                <div>
                    <span>Page</span>
                    <ul>
                        <li>1</li>
                    </ul>
                    <span>of 10</span>
                </div>
                <button id="nxt-page" aria-label="Next Page" title="Go To Next Page" onClick={()=>navigateBasedOnBtn(true)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="#000" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default PaginationAnimation;

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