const AssignmentsPage = ({ exams }) => {
    exams = [
        {
            id: 1,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            type: "Reading",
            class: "CC",
            teacher: "Michael Foster",
        },
        {
            id: 3,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            type: "Reading",
            class: "CC",
            teacher: "Michael Foster",
        },
        {
            id: 21,
            title: "Boost your conversion rate",
            content:
                "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            date: "Mar 16, 2023",
            type: "Reading",
            class: "CC",
            teacher: "Michael Foster",
        },
        // More posts...
    ];

    return (
        <div className="p-4 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bài tập</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Các bài tập được giao của bạn.</p>
            </div>
            <div className="mx-auto mt-5 grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {exams.map((exam) => (
                    <article key={exam.id} className="flex max-w-xl flex-col items-start justify-between ">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time className="text-gray-500">{exam.date}</time>
                            <span className="badge badge-outline badge-primary">{exam.type}</span>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <span>{exam.title}</span>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{exam.content}</p>
                        </div>
                        <div className="relative mt-8 flex items-center justify-between gap-x-4 w-full">
                            <div className="text-sm leading-6">
                                <p className="text-gray-600">Lớp: {exam.class} </p>
                                <p className="text-gray-600">Nộp bài qua: Google Classroom</p>
                                <p className="font-semibold text-gray-900">Giảng viên: {exam.teacher}</p>
                            </div>
                            <button className="btn btn-primary btn-outline">Hoàn thành</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};
export default AssignmentsPage;
