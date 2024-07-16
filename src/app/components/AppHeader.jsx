const AppHeader = ({sticky}) => {
    console.log(sticky);
    return(
        <div className={sticky ? 'app-header make-sticky' : 'app-header'}>
            <nav className="flex items-center justify-between min-h-14 py-2 wrapper mx-auto my-0 transition-all">
            <h1 className="text-lg font-extrabold uppercase text-transparent bg-gradient-to-br from-blue-500 to-blue-800 bg-clip-text">&lt;We Code/&gt;</h1>
            <ul className="flex gap-4 uppercase">
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
            </nav>
        </div>
    );
}

export default AppHeader;