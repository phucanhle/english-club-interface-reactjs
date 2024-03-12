import React from "react";
import Notification from "../Notification";

const NotificationView = ({ notifications }) => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thông báo</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">{notifications ? "Không có thông báo nào" : ""}</p>
                <hr />
            </div>
            {notifications &&
                notifications.map((item, index) => <Notification key={`${index}+${item.title}`} notification={item} />)}
        </div>
    );
};

export default NotificationView;
