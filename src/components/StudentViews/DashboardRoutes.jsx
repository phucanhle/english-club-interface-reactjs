import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import userService from "../../services/userServices";

import InfomationView from "./Mainviews/InfomationStudent";
import NotificationView from "./Mainviews/NotificationsView";
import ClassesView from "./Mainviews/ClassesView";
import AssignmentsPage from "./Mainviews/Assignments";

const Dashboard = () => {
    const [classes, setClasses] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [assignments, setAssignments] = useState([]);

    const userInfo = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        const loadClasses = async () => {
            const result = await userService.getClasses();
            setClasses(result);
        };
        const loadNotification = async () => {
            const result = await userService.getNotification(userInfo.id);
            console.log(result);
            setNotifications(result);
        };
        const loadAssignments = async () => {
            const result = await userService.getAssignments(userInfo.id);
            setAssignments(result);
        };
        loadNotification();
        loadClasses();
        loadAssignments();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<InfomationView student={userInfo} />} />
            <Route path="/notifications" element={<NotificationView notifications={notifications} />} />
            <Route path="/classes" element={<ClassesView id={userInfo.id} classes={classes} />} />
            <Route path="/assignments" element={<AssignmentsPage exams={assignments} />} />
        </Routes>
    );
};

export default Dashboard;
