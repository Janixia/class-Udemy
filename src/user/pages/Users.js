import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Janixia Calero', 
            image: 
            'https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg?quality=90&auto=webp', 
            places: 3
        }
   ];

    return <UsersList items={USERS} />;
};

export default Users;