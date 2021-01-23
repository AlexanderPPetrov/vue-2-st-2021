<template>
    <div id="component-example" class="component">
        {{ componentTitle }}
        <div>
            {{ getTitle }}
        </div>
        <div v-for="(item, index) in testData" 
            :key="index">
            {{ item.title }}
        </div>
        <another-component 
            title="Passed from parent"
            :subtitle="passToChild"
        ></another-component>
        <div>
            {{ getCount }}
        </div>
        <div>{{ getResult(2, 3) }}</div>
        <div>{{ getResult(3, 6) }}</div>
    </div>
</template>

<script>
import AnotherComponent from './AnotherComponent.vue';
export default {
    name: 'component-example',
    components: {
        AnotherComponent
    },
    data(){
        return {
            componentTitle: 'Component example',
            passToChild: 'Another data passed',
            testData: [
                {
                    title: 'Test',
                    count: 2,
                },
                {
                    title: 'Another test data',
                    count: 8,
                },
                {
                    title: 'More data',
                    count: 12,
                }
            ]
        }
    },
    computed: {
        getTitle(){
            return 'Computed title' + 'Another title'
        },
        getCount(){
            const count = this.testData.reduce((acc, curr) => {
                return acc + curr.count
            }, 0)
            return count;
        }
    },
    methods: {
        getResult(a, b){
            return a + b;
        },
        startPushingItems(){
            setTimeout(() => {
                this.testData.push({
                    title: 'More data',
                    count: 5,
                })       
            }, 2000)
        }
    },
    created(){
        console.log('Component example is created');
    },
    mounted(){
        this.startPushingItems();
    },
    beforeDestroy(){
        console.log('Component will be removed after that function call')
    }
}
</script>

<style>
    .component {
        color: blue;
    }
</style>