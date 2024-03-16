import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userService from "../../services/userServices";

const Classes = ({ classData }) => {
    const { id, name, teacher, date, timeStart, timeEnd, lesson_details, min_level } = classData;
    const [lesson, setLesson] = useState([]);
    const [reload, setReload] = useState(true);

    const handleBookingClass = async (e) => {
        const studentId = e.target.name;
        try {
            await userService.bookingClass(studentId, id);
            alert("Đăng kí thành công");
            setReload(!reload);
        } catch (error) {
            alert("Đăng kí thất bại");
            setReload(!reload);
        }
    };
    useEffect(() => {
        const loadClasses = async () => {
            const studentNotBooking = await userService.getStudentNotBookingClass(id, min_level);
            setLesson(studentNotBooking);
        };
        loadClasses();
    }, [reload]);

    return (
        <div>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg border overflow-hidden">
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
                            <p className="text-sm text-gray-600">Cấp độ yêu cầu: {min_level}</p>
                        </div>
                        <button
                            className="btn"
                            onClick={() => document.getElementById(`my_modal_classlist_${date}`).showModal()}
                        >
                            Students
                        </button>
                        <dialog id={`my_modal_classlist_${date}`} className="modal">
                            <div className="modal-box">
                                <h1 className="text-xl font-bold text-center my-4">
                                    Class in {date}, LV req: {min_level}
                                </h1>
                                <div className="">
                                    <table className="table overscroll-y-scroll h-32">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Level</th>
                                                <th>Register</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lesson.length > 0 ? (
                                                lesson.map((student, index) => (
                                                    <tr className="hover cursor-pointer" key={`${id}.${index}`}>
                                                        <th>{index + 1}</th>
                                                        <td>{student.fullName}</td>
                                                        <td>{student.phone}</td>
                                                        <td>{student.level}</td>

                                                        <td>
                                                            <label>
                                                                <button
                                                                    name={student.id}
                                                                    className="btn"
                                                                    onClick={handleBookingClass}
                                                                >
                                                                    Đăng kí
                                                                </button>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td>Không có học sinh nào</td>
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
