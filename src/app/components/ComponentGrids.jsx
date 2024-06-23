import Pagination from "./snippets/Pagination";
import PaginationAnimation from "./snippets/PaginationAnimation";

const ComponentGrids = () => {
    return (
        <div className="component-grids gap-12 lg:gap-8">
            <div className="flex h-fit flex-col gap-4 lg:gap-6 justify-center bg-gradient-to-br from-blue-200 to-blue-400 p-6 lg:p-10 rounded-lg shadow-xl border border-blue-400 self-center">
            <h3 className="font-bold text-xl lg:text-2xl">Showcased some of our components</h3>
            <p className="text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos quidem explicabo sunt nihil quae, ipsa molestias, minima reiciendis ea quo eligendi quibusdam asperiores aliquid, expedita ratione fuga esse autem!</p>
            <button className="pri-btn self-start relative tracking-wide">Explore now<span class="inline-block w-6 h-6 ml-2 animate-pulse absolute right-4"></span></button>
            </div>
            <div className="component"><span>Gooey Navigation</span></div>
            <ComponentGrid componentName={"Pagination"}>
                <Pagination/>
            </ComponentGrid>
            <ComponentGrid componentName={"Pagination with Sliding Animation"}>
                <PaginationAnimation/>
            </ComponentGrid>
            {/* <div className="component"><span>Pagination 2</span></div> */}
            <div className="component"><span>Calendar</span></div>
            <div className="component"><span>Search</span></div>
            <div className="component"><span>Sidebar Navigation</span></div>
        </div>
    );
}

const ComponentGrid = (props) => {
    return(
        <div className="component flex items-center justify-center">
            <span>{props.componentName}</span>
            {props.children}
        </div>
    );
}

export default ComponentGrids;