const Items = ({ classes }) => {
    const { nameClass, duration, location, scores, date } = classes;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{nameClass}</div>
                        <div className="text-sm opacity-50">Điểm: {scores}</div>
                    </div>
                </div>
            </td>
            <td>{location}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{duration} tiếng</button>
            </th>
        </tr>
    );
};

export default Items;
