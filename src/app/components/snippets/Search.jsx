import './Search.css';
import { useRef, useState } from 'react';

const Search = () => {
    const searchResultsRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    
    const defaultTxt = 'The quick brown fox jumps over the lazy dog';

    let debounceTimeout;

    const LoadingTemp = () => {
        return(
            <li className='loading-li'>
                <div class="leading-loading animate-pulse" aria-hidden="true"></div>
                <div class="content-loading">
                    <span aria-hidden="true" class="animate-pulse"></span>
                    <span aria-hidden="true" class="animate-pulse"></span>
                    <span aria-hidden="true" class="animate-pulse"></span>
                </div>
            </li>
        );
    }

    const handleSearchInput = (event) => {
        const value = event.target.trim();
        const isValid = value.length > 0;
        const searchResults = searchResultsRef.current.querySelector('ul');
    }

    const searchInputEvent = (event) => {
        // clearTimeout(debounceTimeout);
        // debounceTimeout = setTimeout((event)=>handleSearchInput(event), 500);
    }

    return (
        <>
            <div className="search-container">
            <div className="search">
                <label>
                    <input type="text" placeholder="Search..." id="search-input" role="searchbox" aria-label="Search input" onInput={searchInputEvent}/>
                    <button id="clear-search" aria-label="Clear search">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16 8-8 8m4-4 4 4M8 8l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <div className="search-svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </label>
            </div>
            <div className="search-results" aria-live="polite" role="list" aria-label="Search results" ref={searchResultsRef}>
                <ul>
                    {isLoading && <LoadingTemp/>}
                </ul>
            </div>
        </div>
        </>
    );
}

export default Search;