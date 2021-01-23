import mutations from './mutation-types';

export default {
    [mutations.SET_APPLES](state, value){
        state.apples = value;
    }
}