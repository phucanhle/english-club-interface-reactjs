import Classes from "../Classes";
const ClassesView = () => {
    const classes = [
        {
            id: 1,
            classname: "SC101",
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
    const pendingClasses = [
        {
            id: 6,
            classname: "PHY606",
            teacher: "David Clark",
            date: "2024-03-15",
            duration: 1.5,
            topic: "Physics Fundamentals",
        },
        {
            id: 7,
            classname: "CHE707",
            teacher: "Sarah Adams",
            date: "2024-03-17",
            duration: 2,
            topic: "Chemistry Basics",
        },
        {
            id: 8,
            classname: "BIO808",
            teacher: "Robert Martinez",
            date: "2024-03-19",
            duration: 1.5,
            topic: "Introduction to Biology",
        },
    ];

    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lớp học</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>

            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Lớp của tôi" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {classes.map((item, index) => (
                            <Classes key={index} classes={item} status={true} />
                        ))}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Đặt lịch lớp" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pendingClasses.map((item, index) => (
                            <Classes key={index} classes={item} status={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesView;
