import { Routes, Route } from "react-router-dom";
import InfomationView from "./MainViews/InfomationAdmin.jsx";
import NotificationView from "./MainViews/NotificationAdmin.jsx";
import ClassesView from "./MainViews/ClassesSale.jsx";
import AssignmentsPage from "./MainViews/AssignmentsSales.jsx";
import BookingCourses from "./MainViews/BookingCourses.jsx";

const Dashboard = () => {
    const sales = {
        id: "123",
        fullName: "Nguyễn Văn A ",
        courses: 12,
        birthday: "01/01/2001",
    };
    const notifications = [
        {
            title: "Nghỉ học",
            userSent: "Bonnie Green",
            date: "03/03/2024",
            content: "Lớp nghỉ học ngày mai 04/03/2024",
        },
        {
            title: "Nghỉ học ngày 10/3",
            userSent: "Bonnie Green",
            date: "03/03/2024",
            content: "Lớp nghỉ học ngày 10/03/2024",
        },
        {
            title: "Chuẩn bị laptop",
            userSent: "Bonnie Green",
            date: "03/03/2024",
            content: "Thực hiện bài tập trên laptop",
        },
    ];

    const classes = [
        {
            id: 1,
            classname: "Complementary Class",
            teacher: "John Doe",
            date: "2024-03-05",
            duration: 2,
            topic: "Introduction to Science",
        },
        {
            id: 2,
            classname: "MA202",
            teacher: "Jane Smith",
            date: "2024-03-07",
            duration: 1.5,
            topic: "Advanced Mathematics",
        },
        {
            id: 3,
            classname: "ENG303",
            teacher: "Alice Johnson",
            date: "2024-03-09",
            duration: 2.5,
            topic: "English Literature",
        },
        {
            id: 4,
            classname: "HIS404",
            teacher: "Michael Brown",
            date: "2024-03-11",
            duration: 2,
            topic: "World History",
        },
        {
            id: 5,
            classname: "ART505",
            teacher: "Emily Wilson",
            date: "2024-03-13",
            duration: 1,
            topic: "Introduction to Art",
        },
    ];
    const exams = [
        {
            id: 1,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            class: "CC",
            teacher: "Michael Foster",
        },
        {
            id: 3,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            class: "CC",
            teacher: "Michael Foster",
        },
        {
            id: 21,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            class: "CC",
            teacher: "Michael Foster",
        },
        // More posts...
    ];

    return (
        <Routes>
            <Route path="/" element={<InfomationView sales={sales} />} />
            <Route path="/notifications" element={<NotificationView notifications={notifications} />} />
            <Route path="/classes" element={<ClassesView classes={classes} />} />
            <Route path="/assignments" element={<AssignmentsPage exams={exams} />} />
            <Route path="/booking-courses" element={<BookingCourses />} />
        </Routes>
    );
};

export default Dashboard;
