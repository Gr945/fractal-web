import { DataType, Tipes } from '../../types';
import './Table.css';

interface TableProps {
    data: DataType;
}

function Table({ data }: TableProps) {
    return (
        <>
            <table>
                <tr>
                    <th className="box">Name</th>
                    <th className="box">
                        {data.type === Tipes.user ? 'Repository' : 'Stars'}
                    </th>
                </tr>
                <tr>
                    <td className="box">{data.name}</td>
                    <td className="box">{data.public_repos}</td>
                </tr>
            </table>
        </>
    );
}

export default Table;