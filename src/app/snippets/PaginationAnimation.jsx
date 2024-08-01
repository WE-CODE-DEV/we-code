// import './PaginationAnimation.css';
import { useRef } from 'react';
import styled from 'styled-components';

const PaginationComponent = styled.div`
z-index: 1;

&[data-theme="dark"]{
  --pri: rgb(30, 32, 34);
  --txtClr: #a1a1aa;
}

&[data-theme="light"]{
  --pri: #fff;
  --txtClr: #52525b;
}

&[data-theme="custom"]{
  --pri: #0f172a;
  --txtClr: #94a3b8;
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

&[data-theme="dark"] .pagination-anim ul li{
  background-image: linear-gradient(to bottom right, #52525b, #174ce0);
  color: rgb(228,228,231);
}

&[data-theme="light"] .pagination-anim ul li{
  background-image: linear-gradient(to bottom right, #e4e4e7, #a1a1aa);
  color: #27272a;
}

&[data-theme="custom"] .pagination-anim ul li{
  background-image: linear-gradient(to bottom right, #64748b, #475569);
  color: #f1f5f9;
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
}
`;

const PaginationAnimation = ({ theme }) => {
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
        <PaginationComponent data-theme={theme || 'dark'}>
            <div className="pagination-anim" ref={paginationULRef}>
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={()=>navigateBasedOnBtn(false)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#9ca3af", stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: "#7595ee", stopOpacity: 1}}/>
                        </linearGradient>
                        </defs>
                        <path
                            d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                            fill="url(#grad3)" />
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
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#7595ee", stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: "#9ca3af", stopOpacity: 1}}/>
                        </linearGradient>
                        </defs>
                        <path
                            d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="url(#grad4)" />
                    </svg>
                </button>
            </div>
        </PaginationComponent>
    );
}

export default PaginationAnimation;