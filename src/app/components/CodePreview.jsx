import Slider from "./snippets/Slider";

const CodePreview = () => {
    return(
        <section className="clipboard wrapper py-10 flex flex-col gap-4 min-h-svh">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Copy what you need</h2>
              <p>Preview, customize and copy it, it's that simple</p>
              <div>
                <div className="flex gap-4">
                  <div className="min-w-52 border border-blue-600">
                    <ul>
                      <li>Preview it</li>
                      <li>Customize it</li>
                      <li>Copy the code</li>
                    </ul>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="component min-h-96">
                        <Slider/>
                    </div>
                    {/* <div className="screen w-full h-full min-h-96 bg-[rgb(30,32,34)] rounded-xl shadow-2xl p-4">
                      <div className="w-full h-full flex flex-col">
                        <div className="screen-header flex items-center gap-6">
                          <ul className="flex gap-2 translate-y-[-.5rem]">
                            <li className="w-3 h-3 bg-red-500 rounded-full"></li>
                            <li className="w-3 h-3 bg-yellow-500 rounded-full"></li>
                            <li className="w-3 h-3 bg-green-500 rounded-full"></li>
                          </ul>
                          <div className="overflow-x-auto overflow-y-hidden lg:overflow-visible mr-2">
                            <ul className="tabs flex gap-2">
                              <li className="tab active html"><span>index.html</span></li>
                              <li className="tab css"><span>styles.css</span></li>
                              <li className="tab js"><span>index.js</span></li>
                              <li className="tab react"><span>app.jsx</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="screen-body flex-1 rounded-xl overflow-auto">

                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
    );
}

export default CodePreview;