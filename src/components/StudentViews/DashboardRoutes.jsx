import { Routes, Route } from "react-router-dom";
import InfomationView from "./Mainviews/InfomationStudent";
import NotificationView from "./Mainviews/NotificationsView";
import ClassesView from "./Mainviews/ClassesView";
import AssignmentsPage from "./Mainviews/Assignments";
const Dashboard = () => {
    const student = {
        id: "123",
        fullName: "Nguyễn Văn A ",
        level: 1,
        birthday: "01/01/2001",
        endcourses: "18/03/2024",
    };
    const notifications = [];
    return (
        <Routes>
            <Route path="/" element={<InfomationView student={student} />} />
            <Route path="/notifications" element={<NotificationView notifications={notifications} />} />
            <Route path="/classes" element={<ClassesView />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
        </Routes>
    );
};

export default Dashboard;
