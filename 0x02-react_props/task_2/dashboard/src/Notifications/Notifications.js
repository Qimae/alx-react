import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button style={{ position: 'absolute', top: '7px', right: '7px', border:'none', background: 'none', padding: '0' }} aria-label='close' onClick={console.log('Close button has been clicked')} >
                <img src={close} alt='close'></img>
            </button>
            <ul>
                <NotificationItem type='default' value="New course available"></NotificationItem>
                <NotificationItem type='urgent' value="New resume available"></NotificationItem>
                <NotificationItem type='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></NotificationItem>
            </ul>
        </div>
    );
}