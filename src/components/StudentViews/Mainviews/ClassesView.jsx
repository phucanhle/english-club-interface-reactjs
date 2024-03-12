import { useEffect, useState } from "react";
import Classes from "../Classes";
import userService from "../../../services/userServices";

const ClassesView = ({ id, classes }) => {
    const [classOfStudent, setClassesOfStudent] = useState([]);
    const [tab, setTab] = useState("");

    const handleClick = (e) => {
        setTab(e.target);
    };

    useEffect(() => {
        const loadClassesOfStudent = async () => {
            const result = await userService.getClassOfStudent(id);
            setClassesOfStudent(result);
        };
        loadClassesOfStudent();
    }, [tab]);

    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lớp học</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>

            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Lớp của tôi"
                    checked
                    onClick={handleClick}
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {classOfStudent.map((item, index) => (
                            <Classes key={index} classData={item} status={true} />
                        ))}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Đặt lịch lớp"
                    onClick={handleClick}
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {classes.map((item, index) => (
                            <Classes key={index} user_id={id} classData={item} status={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesView;
