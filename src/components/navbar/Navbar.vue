<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
            <b-navbar-brand href="#" @click="navigateToHome">
                <b-icon icon="house"></b-icon>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <router-link
                    to="/"
                    v-slot="{ href, navigate, isExactActive }"
                >
                    <b-nav-item 
                    :active="isExactActive" 
                    :href="href" 
                    @click="navigate">
                    Home
                    </b-nav-item>
                </router-link>
                    <router-link
                    to="/products"
                    v-slot="{ href, navigate, isExactActive }"
                >
                    <b-nav-item 
                    :active="isExactActive" 
                    :href="href" 
                    @click="navigate">
                    Products
                    </b-nav-item>
                </router-link>
            </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'navbar',
        computed: {
            ...mapGetters([
                'getApplesTotalPrice',
            ]),
            getApples(){
                return this.$store.state.apples;
            }
        },
        methods: {
            navigateToHome(){
                this.$router.push({
                    name: 'Home',
                })
            }
        }
    }
</script>