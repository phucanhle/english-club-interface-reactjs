import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import userService from "../../services/userServices.js";

import InfomationView from "./MainViews/InfomationTeachers.jsx";
import NotificationView from "./MainViews/NotificationsTeacher.jsx";
import ClassesView from "./MainViews/ClassesTeacher.jsx";
import AssignmentsPage from "./MainViews/AssignmentsTeacher.jsx";
const Dashboard = () => {
    const teacher = useSelector((state) => state.user.userInfo);
    const [classes, setClasses] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const loadClasses = async () => {
            const result = await userService.getClasses();
            setClasses(result);
        };

        loadClasses();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<InfomationView teacherInformation={teacher} />} />
            <Route path="/notifications" element={<NotificationView />} />
            <Route path="/classes" element={<ClassesView classes={classes} />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
        </Routes>
    );
};

export default Dashboard;
