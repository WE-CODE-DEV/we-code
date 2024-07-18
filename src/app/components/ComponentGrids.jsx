import Pagination from "./snippets/Pagination";
import PaginationAnimation from "./snippets/PaginationAnimation";
import Search from "./snippets/Search";
import GooeyNavigation from "./snippets/GooeyNavigation";
import TogglingSidebar from "./snippets/TogglingSidebar";
import Calendar from "./snippets/Calendar";

import './component-grid.css';

const ComponentGrids = () => {
    return (
        <>
            <div className="component-grids gap-6 pb-6">
                <div className="p-[2px] h-fit rounded-lg bg-gradient-to-tl from-blue-200 to-blue-400 shadow-xl self-center">
                    <div className="flex h-fit flex-col gap-4 lg:gap-6 justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6 lg:p-10 rounded-lg self-center">
                    <h3 className="font-bold text-xl lg:text-2xl">Showcased some of our components</h3>
                    <p className="text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos quidem explicabo sunt nihil quae, ipsa molestias, minima reiciendis ea quo eligendi quibusdam asperiores aliquid, expedita ratione fuga esse autem!</p>
                    <button className="pri-btn self-start relative tracking-wide">Explore now<span className="inline-block w-6 h-6 ml-2 animate-pulse absolute right-4"></span></button>
                    </div>
                </div>
                <ComponentGrid componentName={"Gooey Navigation"}>
                    <GooeyNavigation/>
                </ComponentGrid>
                <ComponentGrid componentName={"Pagination"}>
                    <Pagination/>
                </ComponentGrid>
                <ComponentGrid componentName={"Pagination with Sliding Animation"}>
                    <PaginationAnimation/>
                </ComponentGrid>
                <ComponentGrid componentName={"Calendar"}>
                    <Calendar/>
                </ComponentGrid>
                <ComponentGrid componentName={"Search"}>
                    <Search/>
                </ComponentGrid>
                <ComponentGrid componentName={"Toggling Sidebar"}>
                    <TogglingSidebar/>
                </ComponentGrid>
            </div>
        </>
    );
}

const ComponentGrid = (props) => {
    return(
        <div className="component flex items-center justify-center mt-6">
            <span>{props.componentName}</span>
            {props.children}
        </div>
    );
}

export default ComponentGrids;