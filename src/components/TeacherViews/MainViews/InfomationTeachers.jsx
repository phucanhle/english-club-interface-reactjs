const InfomationView = ({ teacherInformation }) => {
    const { id, fullName, classes, birthday, email, phoneNumber } = teacherInformation;

    return (
        <div className="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex items-center mb-4">
                    <div className="w-24 h-24 overflow-hidden rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/7/29/anh-soai-2-1690527641924684762733-1690630870572-16906308709641687648154.jpg"
                            alt="Avatar"
                        />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{fullName}</h2>
                        <p className="text-gray-500">ID Teacher: {id}</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Number of classes currently teaching: {classes}</p>
                    <p className="text-gray-600">Date of birth: {birthday}</p>
                    <p className="text-gray-600">Email: {email}</p>
                    <p className="text-gray-600">Phone: {phoneNumber}</p>
                </div>
            </div>
            {/* <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10">
                <HistoryClasses />
            </div> */}
        </div>
    );
};

export default InfomationView;
