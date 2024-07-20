import React from 'react';
import AppointMentShorList from '../AppointMentShortList/AppointMentShorList';

const AppointByDate = ({ appopintMent, selectedDate,handler }) => {

    return (
        <div>
            
            {
                <AppointMentShorList appointment={appopintMent}></AppointMentShorList>
            }
        </div>
    );
};

export default AppointByDate;