import { useState } from "react";
import Classes from "../Classes";
import userService from "../../../services/userServices";
import { useSelector } from "react-redux";

const ClassesView = ({ classes }) => {
    const teacherId = useSelector((state) => state.user.userInfo.id);
    const [topic, setTopic] = useState("");
    const [level, setLevel] = useState("");
    const [timeEnd, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [className, setClassName] = useState("");
    const [date, setStartDate] = useState("");
    const [timeStart, setStartTime] = useState("");
    const [classList, setClassList] = useState([]);
    const [maxStudent, setMaxStudent] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!className || !date || !topic || !timeStart || !timeEnd || !level || !location) {
            alert("Please fill in all fields");
            return;
        }

        switch (className) {
            case "Complementary Class":
                setMaxStudent(12);
                break;
            case "Social Club":
                setMaxStudent(20);
                break;
            case "Encounter":
                setMaxStudent(5);
                break;
            default:
                setMaxStudent("0"); // Set a default value if necessary
                break;
        }

        // Call API or perform action to create new class
        const newClass = {
            teacherId,
            className,
            date,
            topic,
            timeStart,
            timeEnd,
            maxStudent,
            level,
            location,
        };

        try {
            const result = await userService.createClass(newClass);

            alert(result.message);
            // Update class list
            setClassList([...classList, result]);
        } catch (error) {
            console.error("Error creating class:", error);
        }

        setClassName("");
        setStartDate("");
        setTopic("");
        setStartTime("");
        setEndTime("");
    };

    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Classes</h2>
                <hr />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 my-10">
                <button className="btn" onClick={() => document.getElementById("my_modal_classes").showModal()}>
                    Create new class
                </button>
                <dialog id="my_modal_classes" className="modal">
                    <div className="modal-box">
                        <form className="py-4 flex items-center flex-col" onSubmit={handleSubmit}>
                            <h3 className="font-bold text-xl mb-3">Create new class</h3>
                            <div className="w-full max-w-xs">
                                <span className="text-bold">Class name:</span>
                                <select
                                    className="select select-bordered w-full max-w-xs mt-2"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                >
                                    <option value="">Select Class Name</option>
                                    <option value="Complementary Class">Complementary Class</option>
                                    <option value="Social Club">Social Club</option>
                                    <option value="Encounter">Encounter</option>
                                </select>
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Date to start:</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Min level:</span>
                                <input
                                    type="number"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Location:</span>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Topic:</span>
                                <input
                                    type="text"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Start time:</span>
                                <input
                                    type="time"
                                    value={timeStart}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">End time:</span>
                                <input
                                    type="time"
                                    value={timeEnd}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <button className="btn w-full mt-5 max-w-xs">Create</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
            </div>
            <hr />
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="My classes" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                        {classes.map((classItem, index) => (
                            <Classes key={index} classes={classItem} status={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesView;
