import React from 'react';
import {
    connect
} from 'react-redux';

import {
    cutOffText
} from '../../unit/tool';

import { changeDialogId } from '../../action';

import UserList from '../../component/UserList';

const mapStateToProps = state => {
    const todayTimeValue = new Date(new Date().toISOString().split('T')[0]).valueOf();
    const yesterdayTimeValue = todayTimeValue - 3600 * 24000;
    const lastWeekTimeValue = todayTimeValue - 3600 * 24000 * 6;
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    return {
        dialogs: state.get('dialogs').map(({
            id,
            name,
            data
        }) => {
            const lastMessage = data[data.length - 1];
            const message = cutOffText(lastMessage[0], 20);
            let time = lastMessage[2];
            if (time >= todayTimeValue) {
                let date = new Date(time);
                time = `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}`;
            } else if (time >= yesterdayTimeValue) {
                time = '昨天';
            } else if (time >= lastWeekTimeValue) {
                time = days[new Date(time).getUTCDay()];
            } else {
                let date = new Date(time);
                time = `${(date.getMonth() + 1)}-${date.getDate()}`;
            }

            return {
                id,
                name,
                message,
                time
            }
        })
    }
}

const mapDispatchToProps = dispatch => ({
    changeDialog: id => {
        dispatch(changeDialogId(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);