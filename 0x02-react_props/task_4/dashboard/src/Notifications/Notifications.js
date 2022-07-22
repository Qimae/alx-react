import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
    return (
        <>
            <div className='menuItem'>Your notifications</div>
            {displayDrawer ?
                <div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <button style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }} aria-label='close' onClick={console.log('Close button has been clicked')} >
                        <img src={close} alt='close'></img>
                    </button>
                    <ul>
                        <NotificationItem type='default' value="New course available"></NotificationItem>
                        <NotificationItem type='urgent' value="New resume available"></NotificationItem>
                        <NotificationItem type='urgent' html={getLatestNotification()}></NotificationItem>
                    </ul>
                </div>
                :
                null
            }
        </>

    );
};
Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

export default Notifications;