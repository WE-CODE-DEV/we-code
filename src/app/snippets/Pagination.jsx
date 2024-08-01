import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const PaginationComponent = styled.div`

    &[data-theme = "dark"]{
        --priBg: 28, 28, 40;
        --pri: #1e2022;
        --sec: #22262f;
    }

    &[data-theme = "light"]{
        --priBg: 28, 28, 40;
        --pri: #fff;
        --sec: #d4d4d8;
    }

    &[data-theme = "custom"]{
        --priBg: 28, 28, 40;
        --pri: #1e293b;
        --sec: #334155;
    }

    .pagination {
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

    
&[data-theme="dark"] .pagination ul li {
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}

&[data-theme="light"] .pagination ul li {
  --tw-text-opacity: 1;
  color: rgb(9 9 11 / var(--tw-text-opacity));
}

&[data-theme="custom"] .pagination ul li {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

.pagination ul li.mid{
  transform: scale(.8);
  opacity: .5;
}

&[data-theme="dark"] .pagination ul li.active{
  animation: make-active-dark .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

@keyframes make-active-dark{
  to {
    transform: scale(1.1);
    border-style: none;
    background-image: linear-gradient(to bottom right, #71717a, #174ce0);
    font-weight: 600;
    color: rgb(250, 250, 250);
    opacity: 1;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
}

&[data-theme="light"] .pagination ul li.active{
  animation: make-active-light .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

@keyframes make-active-light{
  to {
    transform: scale(1.1);
    border-style: none;
    background-image: linear-gradient(to bottom right, #e4e4e7, #a1a1aa);
    font-weight: 700;
    color: #3f3f46;
    opacity: 1;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
}

&[data-theme="custom"] .pagination ul li.active{
  animation: make-active-custom .3s cubic-bezier(0.23, 1, 0.32, 1.2) forwards;
}

@keyframes make-active-custom{
  to {
    transform: scale(1.1);
    border-style: none;
    background-image: linear-gradient(to bottom right, #64748b, #cc703f);
    font-weight: 700;
    color: #fff7ed;
    opacity: 1;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
}
`

const Pagination = ({ theme }) => {
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
                const rotation = `${(index - mid) * 10}deg`;

                liEle.style.transformOrigin = (index - mid) < 0 ? 'right center' : 'left center';
                liEle.style.transform = `rotateY(${rotation}) scale(${scaleFactor})`;
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
        <PaginationComponent data-theme={ theme || 'dark' }>
            <div className="pagination overflow-hidden">
                <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={() => navigatePage(false)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: (theme === 'dark') ? '#7595ee' : (theme === 'light') ? '#71717a' : '#fed7aa', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: (theme === 'dark') ? '#9ca3af' : (theme === 'light') ? '#27272a' : '#fb923c', stopOpacity: 1}} />
                            </linearGradient>
                        </defs>
                        <path d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z" fill="url(#grad1)" />
                    </svg>
                </button>
                <div>
                    <ul ref={paginationULRef} onClick={(event) => navigateTo(event)}></ul>
                </div>
                <button id="nxt-page" aria-label="Next Page" title="Go To Next Page" onClick={() => navigatePage(true)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor: (theme === 'dark') ? '#7595ee' : (theme === 'light') ? '#71717a' : '#fed7aa', stopOpacity: 1}} />
                                <stop offset="100%" style={{stopColor: (theme === 'dark') ? '#9ca3af' : (theme === 'light') ? '#27272a' : '#fb923c', stopOpacity: 1}} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="url(#grad2)" />
                    </svg>
                </button>
            </div>
        </PaginationComponent>
    );
}

export default Pagination;