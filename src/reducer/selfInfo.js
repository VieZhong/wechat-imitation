import avatar_url from '../image/data/me.jpg';

const defaultValue = {
    avatar_url,
    name: '小夫'
}

const selfInfo = (state = defaultValue, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default selfInfo;