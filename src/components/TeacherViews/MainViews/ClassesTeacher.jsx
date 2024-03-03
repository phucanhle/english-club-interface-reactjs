import Classes from "../Classes";
const ClassesView = ({ classes }) => {
    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Classes</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 my-10">
                <button className="btn" onClick={() => document.getElementById("my_modal_2").showModal()}>
                    Create new class
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form className="py-4 flex items-center flex-col">
                            <h3 className="font-bold text-xl mb-3">Create new class</h3>
                            <div className="w-full max-w-xs">
                                <span className="text-bold">Class name:</span>
                                <select className="select select-bordered w-full max-w-xs mt-2">
                                    <option selected>Complementary Class</option>
                                    <option>Social Club</option>
                                    <option>Encouter</option>
                                </select>
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Date to start:</span>
                                <input
                                    type="date"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Topic:</span>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold ">Duration:</span>
                                <input
                                    type="number"
                                    placeholder="Type number here"
                                    className="input input-bordered w-full mt-2"
                                    min={1}
                                />
                            </div>
                            <button className="btn w-full mt-5 max-w-xs">Thêm</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
            <hr />
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Lớp của tôi" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                        {classes.map((item, index) => (
                            <Classes key={index} classes={item} status={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesView;
