import React, { useEffect, useState } from "react";
import axios from 'axios'
import './User.css'


const User = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Hi");

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>This API Get method</h1>

            <div className="getContainer">
                <div className="getChild">
                    {
                        data.map((item, index) => {
                            return (<div className="dataSet" key={index}>
                                <span>{item.id}.</span>
                                <span className="title">  {item.title}</span>
                                <h3>{item.body}</h3>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default User