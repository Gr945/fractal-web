import { useState } from 'react';
import './Form.css';
import { DataType, FormType, Tipes } from '../../types';
import { tipesValues } from '../../constants';

interface FormProps {
    setData: (val: DataType | undefined) => void;
}

function Form({ setData }: FormProps) {
    const [formData, setFormData] = useState({
        name: '',
        tip: Tipes.user,
    } as FormType);

    const fetchData = async () => {
        try {
            const response = await fetch(
                formData.tip === Tipes.user
                    ? `https://api.github.com/users/${formData.name}`
                    : `https://api.github.com/repos/${formData.name}`
            );
            if (response.status === 200) {
                const jsonData = await response.json();
                setData({
                    id: jsonData.id,
                    name: jsonData.name,
                    public_repos:
                        formData.tip === Tipes.user
                            ? jsonData.public_repos
                            : jsonData.stargazers_count,
                    type: formData.tip === Tipes.user ? Tipes.user : Tipes.repo,
                });
            } else {
                alert(`Error:${response.status}`);
                setData(undefined);
            }
        } catch (error) {
            alert('Error fetching data');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <form onSubmit={handleSubmit} className="main-form">
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, name: e.target.value });
                    }}
                    required
                />
            </label>

            <label>
                Type:
                <select
                    value={formData.tip}
                    onChange={() =>
                        setFormData({
                            ...formData,
                            tip: formData.tip === Tipes.user ? Tipes.repo : Tipes.user,
                        })
                    }
                    className="tip-select"
                >
                    {tipesValues.map((val) => (
                        <option key={val.id} value={val.type}>
                            {val.type}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">ok</button>
        </form>
    );
}

export default Form;