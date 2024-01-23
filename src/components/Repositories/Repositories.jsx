import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './repositories.css'
import { FaJs, FaCss3, FaHtml5 } from "react-icons/fa6";
import { images } from '../../constants'

const Repositories = ({ aosup, aosleft }) => {

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

    const truncateText = (text, length) => {
        if (text.split(' ').length > length) {
           return text.split(' ').slice(0, length).join(' ') + '...';
        }
        return text;
       };

    const truncateUrl = (url, length = 40) => {
        if (url.length > length) {
           return url.slice(0, length) + '...';
        }
        return url;
       };
       
    function displayLanguageIcon(language) {
        switch (language) {
           case 'JavaScript':
             return <FaJs />;
           case 'CSS':
             return <FaCss3 />;
           default:
             return <FaHtml5 />;
        }
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
        <div className='container block mx-auto px-4 pb-4 overflow-hidden'>
            <div className="block md:flex pb-32" data-aos={aosup}>
                <div className='w-full md:w-1/2 text-center md:text-left'  >
                    <h4 className='headTag mt-24'>My Works</h4>
                    <p className='interFont'>I work as an IT Instructor and a Management Information System Officer in a State University in the Province of Bohol for
                        more than 4 years. My responsibility as the MIS Officer is to develop, design and maintain the university's
                        official website and other web portals.
                    </p>
                    <p className='interFont mt-6'>
                        This website promotes transparency of the university by providing information and
                        resources to prospective and current students, faculty and staff, alumni and in the
                        general public which ought to be informative and engaging.
                    </p>
                    <button className='primary_btn' >Visit the website</button>
                </div>

                <div className="w-full md:w-1/2" data-aos={aosleft}>
                    <div className='floater float-repo' >
                        <img src={images.arrow} alt="arrow-float"/>
                        <p>University Official Website</p>
                    </div>
                    <img src={images.bisu} alt="bisu" className='laptop mt-8 lg:mt-8'/>
                </div>


            </div>

            <div className='block repo_list_container py-16'>
                <div className="repo_list_container_content py-16 text-center md:text-left">
                    <p className='interFont'>The following projects are fetched right from my Github account using AXIOS and Github REST API.</p>
                </div>
                <div className='repo_list grid d-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {users.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).map((user, index) => {
                        return user.topics[0] === "portfolio-project" ? (
                            <div key={index} className='repo_content m-3'>

                                <img className='preview' alt='screenshot' src={`https://github.com/masterz3rr/${user.name}/raw/main/screenshot.png`} />
                                <div className='card_content'>
                                    <img src={user.owner.avatar_url} alt="avatar" className='avatar' />
                                    <div className='card_content_title ml-2'>
                                        <h2 className='mb-4 interFont font-bold'>{user.name}</h2>
                                        <a href={user.html_url} target='_blank' rel="noreferrer"><p className='my-1 interFont'>{truncateUrl(user.html_url)}</p></a>
                                    </div>
                                </div>
                                <div className='repo_content_body mt-6 pb-4'>
                                    <p className='interFont'>{truncateText(user.description, 25)}</p>
                                </div>

                                <div className='repo_content_footer'>
                                    <div className='lang interFont'>
                                        <p>
                                        {displayLanguageIcon(user.language)}</p>
                                        <p>{user.language}</p>
                                    </div>
                                    <p className='interFont'>{getDate(user.created_at)}</p>
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