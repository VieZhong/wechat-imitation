import React from 'react';

import style from './style';

import temp_url from '../../image/data/temp.jpg';

export default ({data, actived, handleClick}) => {

	const { id, name, message, time } = data;

	return <div className={actived ? `${style['container']} ${style['active']}` : style['container']} onClick={handleClick}>
		<div className={style['avatar']}>
			<img src={temp_url} alt="用户头像"/>
		</div>
		<div className={style['container-right']}>
			<p className={style['name']}>{name}</p>
			<p className={style['message']}>{message}</p>
			<span className={style['time']}>{time}</span>
		</div>
	</div>
}