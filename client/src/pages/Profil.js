import React from 'react';
import UpdateProfil from '../components/Profil/UpdateProfil';
import Header from '../layouts/Header';

const Profil = () => {
    return (
        <div className='updateProfil'>
            <Header className="primaryHeader" navBar="true" />
            <UpdateProfil />
        </div>
    );
};

export default Profil;