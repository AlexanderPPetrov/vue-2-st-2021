import Vue from 'vue';
import Router from 'vue-router';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                navigation: Navbar,
                main: Home,
            },
        },
        {
            path: '/products',
            name: 'Products',
            components: {
                navigation: Navbar,
                main: Products,
            },
        },
        
    ],
});