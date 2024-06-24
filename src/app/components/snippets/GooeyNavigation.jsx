import './GooeyNavigation.css';
import { useEffect, useRef } from 'react';

const GooeyNavigation = () => {
    const navigationRef = useRef(null);

    const prevIndex = useRef(0);

    const moveStrip = (element, index) => {
        const {x: elementX, width: elementWidth} = element.getBoundingClientRect();
    
        const linkPadding = +navigationRef.current.querySelector('.moving-strip').getAttribute('data-padding');
    
        navigationRef.current.style.setProperty('--movingStripWidth', `${elementWidth + linkPadding}px`);
    
        const navigationX = navigationRef.current.getBoundingClientRect().x;
    
        const fromX = `${(elementX - navigationX) - (linkPadding / 2)}px`;
    
        element.classList.add('active');
    
        navigationRef.current.style.setProperty('--movingStripX', fromX);
    
        navigationRef.current.style.setProperty('--rotateTo', `${index - prevIndex.current}deg`);
        
        setTimeout(() => {
            navigationRef.current.style.setProperty('--rotateTo', 0);
        }, 250);
        
        prevIndex.current = index;
    }

    const navigateTo = (event) => {
        const link = event.target.closest('li');

        const links = navigationRef.current.querySelectorAll('li');

        if(link){
            links.forEach(link => link.classList.remove('active'));

            const index = Array.from(links).indexOf(link);

            moveStrip(link, index);
        }
    }

    useEffect(()=>{
        moveStrip(navigationRef.current.querySelector('li'), 0);
    }, []);

    return (
        <nav className="gooey-nav" ref={navigationRef} onClick={(event) => navigateTo(event)}>
            <div className="moving-strip" data-padding="8"></div>
            <ul>
                <li className="active" data-title="Home" title="Home">
                    <a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M15 18H9M21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></path></g></svg>
                    </a>
                </li>
                <li data-title="Works" title="Works">
                    <a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-7.682-.422.498-.56-.498.56Zm15.364 0-.498-.56.498.56ZM7.955 22.684a.75.75 0 1 0 .09-1.498l-.09 1.498ZM2.25 12c0 1.874 0 3.83.169 5.466.085.82.215 1.589.422 2.244.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008-.164-.52-.28-1.178-.36-1.948-.16-1.543-.161-3.415-.161-5.312h-1.5ZM12 22.75c2.102 0 3.746.001 5.027-.152 1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84-1.17.14-2.709.142-4.849.142v1.5Zm-3.955-1.564c-1.714-.103-2.614-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295l.09-1.498Zm12.205-8.799c0 1.832-.013 3.616-.178 5.08-.082.731-.2 1.353-.36 1.845-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61.206-.628.338-1.362.426-2.144.176-1.562.186-3.432.187-5.247h-1.5Z" fill="currentColor"></path><path d="m14.66 14.202 3.004-.901m-8.324.9L3.332 12.4c-.595-.179-.893-.268-1.082-.482a1.002 1.002 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502.13-.16.275-.305.434-.434C3.934 5 5.159 5 7.609 5h8.782c2.45 0 3.675 0 4.502.673.16.13.305.275.434.434.673.827.673 2.052.673 4.502 0 .622 0 .932-.15 1.175a.996.996 0 0 1-.1.134c-.15.17-.369.26-.75.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32" stroke="currentColor" strokeWidth="1.5"></path><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                    </a>
                </li>
                <li data-title="Why Me?" title="Why Me?">
                    <a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                    </a>
                </li>
                <li data-title="About Me" title="About Me">
                    <a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="m4.01 8.367-.372-.652.373.652Zm2.492.5.648-.377-.648.377Zm-3.3 1.886-.647.378.648-.378Zm4.495-7.38.648-.378-.648.378Zm.842 1.443-.648.378.648-.378Zm1.877 4.71a.75.75 0 0 0 1.296-.756l-1.296.755Zm-2.878 2.607a.75.75 0 1 0 1.296-.756l-1.296.756Zm-3.14-6.875-.648.378.647-.378Zm7.44-2.327.648-.378-.648.378Zm2.526 4.33.648-.377-.648.378Zm1.683 2.888.373.651a.75.75 0 0 0 .275-1.029l-.648.378Zm.968-4.395a.75.75 0 1 0 1.296-.756l-1.296.756Zm3.174 3.953.648-.378-.648.378ZM6.99 17.25l.648-.378-.648.378Zm9.967 2.003-.373-.65.373.65ZM13.784 15.3a.75.75 0 0 0 1.296-.756l-1.296.756Zm6.563-6.81a.75.75 0 0 0-1.296.755l1.296-.755ZM8.987 20.18a.75.75 0 0 0 .72-1.316l-.72 1.316Zm4.902-.635a.75.75 0 0 0 .222 1.484l-.222-1.484ZM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775l.745 1.303Zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.303ZM7.05 3.75l.842 1.444 1.296-.756-.842-1.443-1.296.755Zm.842 1.444 2.525 4.331 1.296-.755-2.525-4.332-1.296.756Zm.943 6.183L7.15 8.49l-1.296.755 1.684 2.888 1.296-.756ZM7.15 8.49 5.045 4.88l-1.295.756 2.104 3.61L7.15 8.49ZM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22l.744 1.303ZM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357L4.833 2.22Zm6.357 1.088 2.526 4.332 1.296-.756-2.526-4.331-1.296.755Zm2.526 4.332 1.684 2.887 1.295-.756-1.683-2.887-1.296.756ZM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774L9.72 3.08ZM8.974 1.78c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.302Zm6.57 3.747c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774l.745 1.302Zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358l-.745-1.302ZM2.555 11.131l3.788 6.497 1.296-.756-3.788-6.497-1.296.756Zm16.986-1.046c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575l-1.296.756Zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802l1.296-.756Zm3.971-5.3.49.84 1.296-.756-.49-.84-1.296.756Zm-9.345 9.619a5.32 5.32 0 0 1-2.067-1.992l-1.296.756a6.82 6.82 0 0 0 2.644 2.552l.72-1.316Zm6.88-.262a7.755 7.755 0 0 1-2.697.943l.222 1.484a9.257 9.257 0 0 0 3.219-1.125l-.745-1.302Z" fill="currentColor"></path></svg>
                    </a>
                </li>
                <li data-title="Contact Me" title="Contact Me">
                    <a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeWidth="1.5"><path d="M17 12a5 5 0 1 0-4.478-2.774.817.817 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.817.817 0 0 1 .574.067A4.98 4.98 0 0 0 17 12Z"></path><path d="M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14.156 14.156 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382" strokeLinecap="round"></path></g></svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default GooeyNavigation;