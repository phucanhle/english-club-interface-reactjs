import Items from "../Items";

const InfomationView = ({ sales }) => {
    const { id, fullName, courses, birthday, email, phoneNumber } = sales;

    const studentsAndCourses = [
        {
            id: "ABC123",
            fullName: "John Doe",
            phone: "+1234567890",
            email: "john.doe@example.com",
            address: "123 Main St, Cityville, USA",
            endCourse: "2024-06-30",
            nameCourse: "Introduction to Programming",
            priceCourse: 13990000,
        },
        {
            id: "ABC2123",
            fullName: "John Doe",
            phone: "+1234567890",
            email: "john.doe@example.com",
            address: "123 Main St, Cityville, USA",
            endCourse: "2024-06-30",
            nameCourse: "Introduction to Programming",
            priceCourse: 13990000,
        },
        {
            id: "ABC12123",
            fullName: "John Doe",
            phone: "+1234567890",
            email: "john.doe@example.com",
            address: "123 Main St, Cityville, USA",
            endCourse: "2024-06-30",
            nameCourse: "Introduction to Programming",
            priceCourse: 13990000,
        },
        {
            id: "DEF456",
            fullName: "Jane Smith",
            phone: "+1987654321",
            email: "jane.smith@example.com",
            address: "456 Elm St, Townsville, USA",
            endCourse: "2024-07-15",
            nameCourse: "Data Science Fundamentals",
            priceCourse: 10990000,
        },
        {
            id: "GHI789",
            fullName: "Alice Johnson",
            phone: "+1122334455",
            email: "alice.johnson@example.com",
            address: "789 Oak St, Villageton, USA",
            endCourse: "2024-08-20",
            nameCourse: "Web Development Bootcamp",
            priceCourse: 3990000,
        },
    ];

    const coursesOfSales = [
        { nameCourse: "Khóa học cho người mới bắt đầu", duration: "32", price: 10990000 },
        { nameCourse: "Khóa cấp tốc", duration: "3", price: 3990000 },
    ];
    const calculateTotalPrice = (items) => {
        let totalPrice = 0;
        items.forEach((item) => {
            totalPrice += item.priceCourse;
        });
        return totalPrice.toLocaleString("vi-VN");
    };
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex items-center mb-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{fullName}</h2>
                        <p className="text-gray-500">ID Salse: {id}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Danh sách học viên đã mua khóa học
                    </h2>
                    <p className="mt-5 mb-3 text-lg leading-8 text-gray-600">
                        Tổng giá khóa bán được: <strong> {calculateTotalPrice(studentsAndCourses)}</strong>đ
                    </p>
                    <hr />
                    <div className="flex">
                        <div className="mx-auto max-w-2xl lg:mx-0 my-10">
                            <button
                                className="btn"
                                onClick={() => document.getElementById("my_modal_classes").showModal()}
                            >
                                Thêm học viên mới
                            </button>
                            <dialog id="my_modal_classes" className="modal">
                                <div className="modal-box">
                                    <form className="py-4 flex items-center flex-col">
                                        <h3 className="font-bold text-xl mb-3">Thêm học viên mới</h3>
                                        <div className="w-full max-w-xs">
                                            <span className="text-bold">Họ tên học viên </span>
                                            <input
                                                type="text"
                                                placeholder="Họ và tên"
                                                className="input input-bordered w-full mt-2"
                                            />
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Khóa học:</span>
                                            <select className="select select-bordered w-full max-w-xs mt-2">
                                                {coursesOfSales.map((item, key) => (
                                                    <option key={key}>
                                                        {item.nameCourse} - {item.duration} tháng
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Trình độ ban đầu:</span>
                                            <input
                                                type="text"
                                                placeholder="Trình độ ban đầu"
                                                className="input input-bordered w-full mt-2"
                                            />
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Ngày bắt đầu:</span>
                                            <input type="date" className="input input-bordered w-full mt-2" />
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold ">Email:</span>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="input input-bordered w-full mt-2"
                                            />
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold ">Số điện thoại:</span>
                                            <input
                                                type="tel"
                                                placeholder="Số điện thoại"
                                                className="input input-bordered w-full mt-2"
                                            />
                                        </div>{" "}
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold ">Địa chỉ học viên:</span>
                                            <input
                                                type="text"
                                                placeholder="Địa chỉ"
                                                className="input input-bordered w-full mt-2"
                                            />
                                        </div>
                                        <button className="btn w-full mt-5 max-w-xs">Thêm</button>
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        <div className="mx-auto max-w-2xl lg:mx-0 my-10">
                            <button
                                className="btn mx-5"
                                onClick={() => document.getElementById("my_modal_classes2").showModal()}
                            >
                                Gia hạn học viên
                            </button>
                            <dialog id="my_modal_classes2" className="modal">
                                <div className="modal-box">
                                    <form className="py-4 flex items-center flex-col">
                                        <h3 className="font-bold text-xl mb-3">Gia hạn học viên</h3>

                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Học viên:</span>
                                            <select className="select select-bordered w-full max-w-xs mt-2">
                                                {studentsAndCourses.map((item, key) => (
                                                    <option key={key}>
                                                        {item.id} - {item.fullName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Khóa học:</span>
                                            <select className="select select-bordered w-full max-w-xs mt-2">
                                                {coursesOfSales.map((item, key) => (
                                                    <option key={key}>
                                                        {item.nameCourse} - {item.duration} tháng
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-full mt-5 max-w-xs">
                                            <span className="text-bold">Ngày bắt đầu:</span>
                                            <input type="date" className="input input-bordered w-full mt-2" />
                                        </div>

                                        <button className="btn w-full mt-5 max-w-xs">Thêm</button>
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>

                    <hr />
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Mã HV</th>
                                <th>Họ Tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Hạn tài khoản</th>
                                <th>Khóa</th>
                                <th>Giá khóa học</th>
                            </tr>
                        </thead>

                        <tbody>
                            {studentsAndCourses.map((item, i) => (
                                <Items key={item.id} index={i + 1} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InfomationView;
