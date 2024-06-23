const AppHeader = () => {
    return(
        <div className="app-header border-b border-dashed border-blue-500 shadow-xl">
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