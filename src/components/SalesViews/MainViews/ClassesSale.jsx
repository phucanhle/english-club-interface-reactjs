import Classes from "../Classes";

const ClassesView = ({ classes }) => {
    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Classes</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>

            <hr />
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab min-w-32"
                    aria-label="Lớp của tôi"
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                        {classes.map((item, index) => (
                            <Classes key={index} classes={item} status={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesView;
