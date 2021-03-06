import React from 'react';
import "./Profile.css";
import Nav from "../Nav/Nav";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

function Profile() {
    const user = useSelector(selectUser);


    return (
        <div className="profile">
            <Nav />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA4QEAoQEBANDQ0QCxAQDQ8NDxAQFREWFhYRExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAQYCB//EACkQAQACAAUEAgEEAwAAAAAAAAABAgMEBREhEjFBYVGhcSIycoEVUmL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBLhZe9u1ZWaaZbzaIBRGj/i/wDv6R30y3i0SCkJMTBtXvWUYAAAAAAAAAAAAAAAAAAO1rMztEbzLUyunxHNuZ+PEJMjleiN5/dPdbByI28OgAADlqxPeGfm9Piead/hogPNzG3E94GtqGU6o6qx+qPtkgAAAAAAAAAAAAAALumYO9uqY4r2/KlLb0/D6aR75kFh0AAAAAAAcY2oYPTfeO1m0p6ph703/wBQY4AAAAAAAAAAAAAD0OFG1Y/EPPPQ4M71rPqAfYAAAAAAACHNxvS34TIM5O1LfgGFAQAAAAAAAAAAAAAS2dNxN6R64Yy1p+P0W2ntYG0AAAAAAAAoatibV282lemWHncfrvM+I4gEAAAAAAAAAAAAAAAANTT85vHTaeY7T8tB5tp5DMXniaTMfINEAAABx1m6hjYnaKzFfkHNQzm/6Kz/AClnQAAAAAAAAAAAAAAAD7w8K1p2rG77y2Xm88dvMtnAwIpG0QCtltPrXm3M/S7EbOgAAAADkw6ApZnT625rxP0y8XCtSdrQ9CjxsGLxtMA8/AmzWWnDn5jxKEAAAAAAAAAABJl8Gb2iI/ufSOI++zbyWX6K+57glwcKKRERCQgAAAAAAAAAABHi4UWiYmO7EzGBNLbT28S31fOZeL19x2BhhMbTMT4nkAAAAAAAA28fILul4G89UxxXt+WuhymF00iPXKYAAAAAAAAAAAAAAGTqmBtMWiOJ7qLfzOF1VmPXDAmNpmPgAAAAAABYyGH1Xj1yrtHSKfut/QNMAAAAAAAAAAAAAAABiahh9N598ttnavTis/AMwAAAAABs6ZXbDj3MuALgAAAAAAAAAAAAAAACrqVd8OfQAxYAAAB//9k="
                    alt="uaer avatar"
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__teams">
                            <h3>Teams</h3>
                            <button 
                            className="profile__signOut"
                            onClick={() => auth.signOut()}
                            >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
