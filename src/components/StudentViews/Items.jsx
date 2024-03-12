const Items = ({ classes }) => {
    const { name, timeStart, timeEnd, location, score, date } = classes;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{name}</div>
                        {score ? <div className="text-sm opacity-50">Điểm: {score}</div> : ""}{" "}
                    </div>
                </div>
            </td>
            <td>{location}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">
                    {timeStart} đến {timeEnd}
                </button>
            </th>
        </tr>
    );
};

export default Items;
