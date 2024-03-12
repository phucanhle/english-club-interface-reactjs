import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import userService from "../../../services/userServices";

const AssignmentsPage = () => {
    const teacherId = useSelector((state) => state.user.userInfo.id);
    const [classList, setClassList] = useState([]);
    const [assignments, setAssignments] = useState([]);

    const [classId, setClassId] = useState("");
    const [deadLine, setDeadline] = useState("");
    const [submit, setSubmit] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [result, setResult] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!classId || !deadLine || !submit || !title || !content || !teacherId) {
            alert("Please fill in all fields");
            return;
        }
        // title, content, date, type, topic, teacher
        const newAssignment = {
            title,
            content,
            date: deadLine,
            topic: classId,
            type: submit,
            teacherId,
        };
        try {
            const result = await userService.sendAssignment(newAssignment);
            alert(result.message);
        } catch (err) {
            alert("Lỗi");
        }
    };

    useEffect(() => {
        const loadClass = async () => {
            const classes = await userService.getClasses();
            setClassList(classes);
        };
        const loadAssignments = async () => {
            const result = await userService.getAssignmentsOfTeacher(teacherId);
            setAssignments(result);
        };

        loadAssignments();
        loadClass();
    }, [result]);

    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Assignments</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 my-10">
                <button className="btn" onClick={() => document.getElementById("my_modal_assignments").showModal()}>
                    Give new assignments
                </button>
                <dialog id="my_modal_assignments" className="modal">
                    <div className="modal-box">
                        <form className="py-4 flex items-center flex-col" onSubmit={handleSubmit}>
                            <h3 className="font-bold text-xl mb-3">Create new assignments</h3>
                            <div className="w-full max-w-xs">
                                <span className="text-bold">Class:</span>
                                <select
                                    className="select select-bordered w-full max-w-xs mt-2"
                                    onChange={(e) => setClassId(e.target.value)}
                                >
                                    <option>-</option>
                                    {classList.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name} - {item.date}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Deadline:</span>
                                <input
                                    type="date"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2"
                                    value={deadLine}
                                    onChange={(e) => setDeadline(e.target.value)}
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold">Submit via:</span>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2"
                                    value={submit}
                                    onChange={(e) => setSubmit(e.target.value)}
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold ">Title Assignments:</span>
                                <input
                                    type="text"
                                    placeholder="Type title here"
                                    className="input input-bordered w-full mt-2"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="w-full mt-5 max-w-xs">
                                <span className="text-bold ">Content Assignments:</span>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Type content here"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                            </div>
                            <button className="btn w-full mt-5 max-w-xs">Thêm</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={() => setResult(!result)}>close</button>
                    </form>
                </dialog>
            </div>
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {assignments &&
                    assignments.map((exam) => (
                        <article
                            key={exam.assignment_id}
                            className="flex max-w-xl flex-col items-start justify-between border rounded-lg p-5"
                        >
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">{exam.date}</time>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <span>{exam.title}</span>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{exam.content}</p>
                            </div>
                            <div className="relative mt-8 flex items-center justify-between gap-x-4 w-full">
                                <div className="text-sm leading-6">
                                    <p className="text-gray-600">Lớp: {exam.topic} </p>
                                    <p className="text-gray-600">Nộp bài qua: {exam.type}</p>
                                </div>
                                {/* <button className="btn btn-error btn-outline">Delete</button> */}
                            </div>
                        </article>
                    ))}
            </div>
        </div>
    );
};
export default AssignmentsPage;
