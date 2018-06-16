import * as reducerType from '../unit/reducerType';
import avatar_url from '../image/data/me.jpg';

const defaultValue = {
    avatar_url,
    name: null,
    id: null
}

const selfInfo = (state = defaultValue, action) => {
    switch (action.type) {
        case reducerType.UPDATE_SELF_INFO:
            return {avatar_url, ...action.payload};
        default:
            return state;
    }
}

export default selfInfo;