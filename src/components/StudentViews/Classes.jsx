const Classes = ({ classes, status }) => {
    const { classname, teacher, date, duration, topic } = classes;

    return (
        <div>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2">

                    <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt={`${classname}'s portrait`} />
                        </div>
                        <div className="ml-2">
                            <h2 className="text-xl font-semibold text-gray-800">{classname}</h2>
                            <p className="text-sm text-gray-600">{teacher}</p>
                        </div>
                        {status ? "" : <button className="btn">Đăng kí</button>}
                    </div>
                    <span className="mt-5 badge">Bắt đầu: {date}</span>
                    <br />
                    <span className="badge">Thời gian: {duration} tiếng</span>
                    <br />
                    <span className="badge badge-primary badge-outline">{topic}</span>
                </div>
            </div>
        </div>
    );
};

export default Classes;
