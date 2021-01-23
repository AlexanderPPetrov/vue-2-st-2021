<template>
    <div class="col-md-4">
        <b-card
            :title="title"
            :img-src="image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                {{ description }}
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
    
</template>
<script>
    export default {
        name: 'product',
        props: {
            title: String,
            description: String,
            image: String,
        }
    }
  
</script>