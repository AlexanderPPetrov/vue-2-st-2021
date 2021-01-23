<template>
  <b-card
    style="max-width: 20rem;"
    class="mb-2 mt-5"
    >
    <div class="d-flex justify-content-between">
        <b-button variant="danger" @click="setApples(-1)">
            <b-icon icon="dash-circle-fill"></b-icon>
        </b-button>
        <div v-if="getApples !== null">
            {{ getApples }}
        </div>
        <div v-if="getApples !== null">
            {{ getApplesTotalPrice }}
        </div>
        <b-button variant="success" @click="setApples(1)">
            <b-icon icon="plus-circle-fill"></b-icon>
        </b-button>
    </div>
    <div 
        v-show="getApples > 10"
        class="alert mt-3" 
        :class="{
            'alert-danger': getApples > 15, 
            'alert-warning': getApples <= 15
        }"
        role="alert">
        No enough apples
    </div>
    </b-card>
</template>
<script>
import mutations from '../../store/mutation-types';
import actions from '../../store/action-types';
import { mapGetters } from 'vuex'

export default {
    name: 'apples',
    computed: {
        ...mapGetters([
            'getApplesTotalPrice',
        ]),
        getApples(){
            return this.$store.state.apples;
        }
    },
    methods: {
        setApples(quantity){
            this.$store.commit(mutations.SET_APPLES, this.getApples + quantity);
        }
    },
    created(){
        this.$store.dispatch(actions.GET_APPLES, {
            apiKey: '123ikasjdkj',
        });
    }
}
</script>