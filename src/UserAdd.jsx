import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UserAdd.css';

export const UserAdd = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    console.log(data);
    

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleBody = (e) => {
        setBody(e.target.value)
    }
    const handleButton = async () => {
       

        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
            });
            console.log(res.data);
            
            setData((prev) => [...prev, res.data])
            // setData(res.data)
            setTitle('')
            setBody('');
        }
        catch (err) {
            console.log("Invalid  the data", err);

        }
    }
    return (
        <div>
            <h2>Post the data</h2>
            <div className='inputContainer'>
                <div className='inputHead'>
                <input type='text' placeholder='Enter title' value={title} onChange={handleTitle} /><br></br>
                <input type='text' placeholder='Enter body' value={body} onChange={handleBody} />
                <button onClick={handleButton}>Add</button>
                </div>
            </div>

            {data.length ? <div className='tableContainer'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> : null}
        </div>
    )
}


