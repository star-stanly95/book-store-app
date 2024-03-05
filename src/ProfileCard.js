import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function ProfileCard({ cardname }) {

    const [items, setItems] = useState([
        {
            id: 1,
            title: "title1",
            isChecked: 1
        },
        {
            id: 2,
            title: "title2",
            isChecked: 0
        }
    ])

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h1>{cardname}</h1>
            {
                items.length > 0 ?
                    (<ul>
                        {
                            items.map((x) => (
                                <>
                                    <li key={x.id}>{x.title} <FaTrash onClick={() => handleDelete(x.id)} /></li></>

                            ))
                        }
                    </ul>)
                    : <p>No data</p>
            }
        </div>
    )
}

export default ProfileCard;