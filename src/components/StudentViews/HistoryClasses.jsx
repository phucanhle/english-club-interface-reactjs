import Items from "./Items";
const HistoryClasses = () => {
    const class1 = {
        nameClass: "SC",
        duration: 1,
        location: "Tầng 1 TTTM Vivo city quận 7",
        scores: 70,
        date: "05/03/2024",
    };
    const class2 = {
        nameClass: "CC",
        duration: 1,
        location: "Tầng 3 TTTM Lotte Mart quận 7",
        scores: 80,
        date: "01/03/2024",
    };
    const class3 = {
        nameClass: "SC",
        duration: 1,
        location: "Tầng 3 TTTM Lotte Mart quận 7",
        scores: 70,
        date: "15/02/2024",
    };
    return (
        <div className="overflow-x-auto">
            <h3 class="my-5 text-3xl font-bold text-center dark:text-white">Lịch sử lớp học</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tên Khóa học</th>
                        <th>Địa điểm</th>
                        <th>Ngày</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    <Items classes={class1} />
                    <Items classes={class2} />
                    <Items classes={class3} />
                </tbody>
            </table>
        </div>
    );
};

export default HistoryClasses;
