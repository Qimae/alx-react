import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer }) {
    return (
        <>
            <div className='menuItem'>Your notifications</div>
            {displayDrawer ?
                <div className='Notifications'>
                    <button style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }} aria-label='close' onClick={console.log('Close button has been clicked')} >
                        <img src={close} alt='close'></img>
                    </button>
                    {
                        listNotifications.length != 0 ?
                            <p>Here is the list of notifications</p>
                            : null
                    }
                    <ul>
                        {
                            listNotifications.length == 0 ?
                                <NotificationItem type="default" value="No new notification for now" />
                                : null
                        }
                        {
                            listNotifications.map((val, idx) => {
                                return <NotificationItem
                                    type={val.type}
                                    value={val.value}
                                    html={val.html}
                                    key={val.id}
                                />
                            })
                        }
                    </ul>
                </div>
                :
                null
            }
        </>

    );
};
Notifications.defaultProps = {
    displayDrawer: false,
    ListNotifications: []

};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    ListNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;