import HistoryClasses from "../HistoryClasses";

const InfomationView = ({ student }) => {
    const { id, fullName, level, birthday, email, phone, address } = student;

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex items-center mb-4">
                    <div className="w-24 h-24 overflow-hidden rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/7/29/anh-soai-2-1690527641924684762733-1690630870572-16906308709641687648154.jpg"
                            alt="Avatar"
                        />
                    </div>
                    <div className="mx-4">
                        <h2 className="text-lg font-semibold">{fullName}</h2>
                        <p className="text-gray-500">Mã học viên: {id}</p>
                    </div>
                    <button className="btn">Sửa</button>
                </div>
                <div>
                    <p className="text-gray-600">
                        <strong>Level:</strong> {level}
                    </p>
                    <p className="text-gray-600">
                        <strong>Email:</strong> {email}
                    </p>
                    <p className="text-gray-600">
                        <strong>Số điện thoại: </strong>
                        {phone}
                    </p>
                    <p className="text-gray-600">
                        <strong>Ngày sinh:</strong> {birthday}
                    </p>
                    <p className="text-gray-600">
                        <strong>Địa chỉ:</strong> {address}
                    </p>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10">
                <HistoryClasses student={student} />
            </div>
        </div>
    );
};

export default InfomationView;
