import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ProfileEdit from './profile-edit/profile-edit';
import ProfileHistory from './profile-history/profile-history';
import { TLocationState } from '../app/app-types';

const Profile = (): ReactElement => {
    const { pathname } = useLocation<TLocationState>();

    return pathname === '/profile/orders' ? <ProfileHistory /> : <ProfileEdit />;
};

export default Profile;
