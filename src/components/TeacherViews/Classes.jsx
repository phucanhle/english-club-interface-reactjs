import { useSelector } from "react-redux";
import userService from "../../services/userServices";
import { useEffect, useState } from "react";
const Classes = ({ classes, status }) => {
    const teacherId = useSelector((state) => state.user.userInfo.id);
    const { id, name, teacher, date, timeStart, timeEnd, lesson_details } = classes;
    const [lesson, setLesson] = useState([]);

    const handleAttend = async (e) => {
        const studentId = e.target.name;
        const classId = id;

        await userService.takeAttendance(classId, studentId, 1);
    };
    useEffect(() => {
        const loadClasses = async () => {
            const teacherClass = await userService.getStudentInTeacherClass(teacherId, id);
            setLesson(teacherClass);
        };
        loadClasses();
    }, []);

    return (
        <div>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt={`${name}'s portrait`}
                            />
                        </div>
                        <div className="ml-2">
                            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                            <p className="text-sm text-gray-600">{teacher}</p>
                        </div>
                        <button
                            className="btn"
                            onClick={() => document.getElementById(`my_modal_classlist_${date}`).showModal()}
                        >
                            Class list
                        </button>
                        <dialog id={`my_modal_classlist_${date}`} className="modal">
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
                                                <th>Attended</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lesson.length > 0 ? (
                                                lesson.map((student, index) => (
                                                    <tr className="hover cursor-pointer" key={`${classes.id}.${index}`}>
                                                        <th>{index + 1}</th>
                                                        <td>{student.fullName}</td>
                                                        <td>{student.phone}</td>
                                                        {student.attended == 0 ? (
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        name={student.id}
                                                                        type="checkbox"
                                                                        className="checkbox"
                                                                        onClick={handleAttend}
                                                                    />
                                                                </label>
                                                            </td>
                                                        ) : (
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        name={student.id}
                                                                        type="checkbox"
                                                                        className="checkbox"
                                                                        checked
                                                                        readOnly
                                                                    />
                                                                </label>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td>Không có học sinh đăng kí</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <span className="mt-5 badge">Ngày: {date}</span>
                    <br />
                    <span className="mt-2 badge">
                        Thời gian: {timeStart} đến {timeEnd}
                    </span>
                    <br />
                    <span className="mt-2 badge badge-primary badge-outline">{lesson_details}</span>
                </div>
            </div>
        </div>
    );
};

export default Classes;
