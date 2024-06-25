import './Search.css';
import { useRef, useState } from 'react';

const Search = () => {
    const searchResultsRef = useRef(null);

    const searchEleContainerRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const [typedValue, setTypedValue] = useState('');
    
    const defaultTxt = 'The quick brown fox jumps over the lazy dog';

    let debounceTimeout;

    const LoadingTemp = () => {
        return(
            <li className='loading-li'>
                <div className="leading-loading animate-pulse" aria-hidden="true"></div>
                <div className="content-loading">
                    <span aria-hidden="true" className="animate-pulse"></span>
                    <span aria-hidden="true" className="animate-pulse"></span>
                    <span aria-hidden="true" className="animate-pulse"></span>
                </div>
            </li>
        );
    }

    const SearchResult = () => {
        const matchFound = defaultTxt.toLowerCase().includes(typedValue.toLowerCase());

        const startIndex = defaultTxt.toLowerCase().indexOf(typedValue.toLowerCase());
        const endIndex = startIndex + typedValue.length;
        
        return (
            <>
                {
                    matchFound ? 
                    <li>
                        <div className="leading"></div>
                        <div className="content">
                            <p>
                                {defaultTxt.slice(0, startIndex)}
                                <span>{defaultTxt.slice(startIndex, endIndex)}</span>
                                {defaultTxt.slice(endIndex)}
                            </p>
                        </div>
                    </li> 
                    : <li>No results found...</li>
                }
            </>
        );
    }

    const searchInputEvent = (e) => {
        clearTimeout(debounceTimeout);

        const value = e.target.value;

        setTypedValue(value);

        debounceTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        setIsLoading(true);
    }

    return (
        <>
            <div className="search-container">
            <div className="search" ref={searchEleContainerRef} data-state="searching">
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
                    {isLoading ? <LoadingTemp/> : <SearchResult/>}
                </ul>
            </div>
        </div>
        </>
    );
}

export default Search;