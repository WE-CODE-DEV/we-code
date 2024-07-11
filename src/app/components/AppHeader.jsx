const AppHeader = () => {
    return(
        <div className="app-header bg-gradient-to-br from-blue-200/50 to-blue-400/50 sticky top-0 z-10 backdrop-blur-xl rounded-b-xl shadow-sm">
            <nav className="flex items-center justify-between min-h-16 py-2 wrapper mx-auto my-0">
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