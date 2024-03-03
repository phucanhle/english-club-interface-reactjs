const Classes = ({ classes, status }) => {
    const { classname, teacher, date, duration, topic } = classes;

    return (
        <div>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt={`${classname}'s portrait`}
                            />
                        </div>
                        <div className="ml-2">
                            <h2 className="text-xl font-semibold text-gray-800">{classname}</h2>
                            <p className="text-sm text-gray-600">{teacher}</p>
                        </div>
                        <button
                            className="btn"
                            onClick={() => document.getElementById("my_modal_classlist").showModal()}
                        >
                            Class list
                        </button>
                        <dialog id="my_modal_classlist" className="modal">
                            <div className="modal-box">
                                <h1 className="text-xl font-bold text-center my-4">Classlist attendance in {date}</h1>
                                <div className="">
                                    <table className="table overscroll-y-scroll h-32">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Assignments Status</th>
                                                <th>Attended</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover cursor-pointer">
                                                <th>1</th>
                                                <td>Cy Ganderton</td>
                                                <td>Quality Control Specialist</td>
                                                <td>Yes</td>
                                                <td>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <span className="mt-5 badge">Start: {date}</span>
                    <br />
                    <span className="mt-2 badge">Duration: {duration} hours</span>
                    <br />
                    <span className="mt-2 badge badge-primary badge-outline">{topic}</span>
                </div>
            </div>
        </div>
    );
};

export default Classes;
