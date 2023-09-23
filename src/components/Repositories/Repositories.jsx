import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './repositories.css'
import { FaJs, FaCss3 } from "react-icons/fa6";
import { images } from '../../constants'

const Repositories = () => {

    const [users, setUsers] = useState([
    ]);
    const getDate = (dateString) => {
        const newdateString = new Date(dateString).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return newdateString;
    }


    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get("https://api.github.com/users/masterz3rr/repos");
                //console.log(res.data);
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllUsers();
    }, [])

    return (
        <div className='repositories section'>
            <div className="main-repo">
                <div className='repo_title'>
                    <h4>My Works</h4>
                    <p>The following projects are fetched right from my Github account using AXIOS and Github REST API.</p>

                </div>
                <div className='floater float-repo'>
                        <img src={images.arrow} alt="arrow-float" />
                        <p>University Official Website</p>
                    </div>
                <div className="main-project">
                    
                    <img src={images.bisu} alt="bisu" />
                </div>


            </div>

            <div className='repo_list_container'>
                <div className="repo_list_container_content">
                    <p>The following projects are fetched right from my Github account using AXIOS and Github REST API.</p>
                </div>
                <div className='repo_list'>
                    {users.map((user, index) => {
                        return user.topics[0] === "portfolio-project" ? (
                            <div key={index} className='repo_content'>

                                <img className='preview' alt='screenshot' src={`https://github.com/masterz3rr/${user.name}/raw/main/screenshot.png`} />
                                <div className='card_content'>
                                    <img src={user.owner.avatar_url} alt="avatar" className='avatar' />
                                    <div className='card_content_title'>
                                        <h2>{user.name}</h2>
                                        <p>{user.html_url}</p>
                                    </div>
                                </div>
                                <div className='repo_content_body'>
                                    <p>{user.description}</p>
                                </div>

                                <div className='repo_content_footer'>
                                    <div className='lang'>
                                        <p>
                                            {
                                                user.language === 'JavaScript' ?
                                                    <FaJs />
                                                    : <FaCss3 />
                                            }</p>
                                        <p>{user.language}</p>
                                    </div>
                                    <p>{getDate(user.created_at)}</p>
                                </div>
                            </div>
                        )
                            : undefined
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Repositories