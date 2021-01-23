import actions from './action-types';
import mutations from './mutation-types';

export default {
    [actions.GET_APPLES]({commit}, params){
        console.log(params);
        setTimeout(() => {
            commit(mutations.SET_APPLES, 5);
        }, 1000)
    }
}