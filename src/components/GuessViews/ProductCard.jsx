import { CheckIcon } from "@heroicons/react/20/solid";

const ProductCard = ({ courses }) => {
    const { name, price, duration, description, features } = courses;

    const numberWithCommas = (number) => {
        return number.toLocaleString("vi-VN"); // Sử dụng 'vi-VN' để định dạng số theo tiêu chuẩn Việt Nam
    };

    return (
        // <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto my-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Khóa học: {name}</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Khóa học bao gồm</h4>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                        <li className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>Học tập với giảng viên nước ngoài</span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>Lộ trình khoa học</span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            Thời gian hoàn thành khóa: {duration} tháng
                        </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600">Đăng kí ngay</p>
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                    {numberWithCommas(price)}
                                </span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">VND</span>
                            </p>
                            <a
                                href="#"
                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Đăng kí ngay
                            </a>
                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                Sau khi đăng kí sẽ có nhân viên gọi điện để tư vấn cho bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default ProductCard;
