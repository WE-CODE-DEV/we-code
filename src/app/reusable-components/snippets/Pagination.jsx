import './Pagination.css';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const PaginationComponent = styled.div`
    
`

const Pagination = ({ theme, populateThemes }) => {
    const themes =  [{theme: 'dark', priClr: '#1e2022', secClr: '#333539'}, {theme: 'light', priClr: '#fff', secClr: '#cecece'}, {theme: 'custom', priClr: '#e2e8f0', secClr: '#1e293b'}];

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

    useEffect(() => populateThemes && populateThemes(themes), []);

    useEffect(() => {
        renderPages();
    }, [currentPage]);
    
    return(
        <div className="pagination overflow-hidden">
            <button id="prev-page" aria-label="Previous Page" title="Go To Previous Page" onClick={() => navigatePage(false)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#9ca3af", stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: "#7595ee", stopOpacity: 1}} />
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

export default Pagination;