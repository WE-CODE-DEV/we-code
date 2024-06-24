import './PaginationAnimation.css';
import { useRef, useState } from 'react';

const PaginationAnimation = () => {
    const paginationULRef = useRef(null);

    const currentPage = useRef(1);

    const totalNoOfPages = 10;

    let isDebouncing = false;
    const debounceTime = 300;

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
        <div className="pagination-anim" ref={paginationULRef}>
            <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={()=>navigateBasedOnBtn(false)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#9ca3af", stopOpacity: 1}}/>
                        <stop offset="100%" style={{stopColor: "#7595ee", stopOpacity: 1}}/>
                      </linearGradient>
                    </defs>
                    <path
                          d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                          fill="url(#grad1)" />
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
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#7595ee", stopOpacity: 1}}/>
                        <stop offset="100%" style={{stopColor: "#9ca3af", stopOpacity: 1}}/>
                      </linearGradient>
                    </defs>
                    <path
                        d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="url(#grad2)" />
                </svg>
            </button>
        </div>
    );
}

export default PaginationAnimation;