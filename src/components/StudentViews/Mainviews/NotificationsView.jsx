import React from "react";
import Notification from "../Notification";

const NotificationView = ({ notifications }) => {
    notifications = [
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
    return (
        <div className="p-4 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thông báo</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>
            {notifications.map((item, index) => (
                <Notification key={`${index}+${item.title}`} notification={item} />
            ))}
        </div>
    );
};

export default NotificationView;
