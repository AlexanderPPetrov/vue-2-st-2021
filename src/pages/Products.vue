<template>
    <div class="row">
        <product v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        ></product>
    </div>
</template>

<script>
import Product from '../components/product/Product';

export default {
  name: 'App',
  components: {
    Product,
  },
  data(){
    return {
      items: [
        {
          title: 'test',
          description: 'tralala',
          image: 'https://picsum.photos/600/300/?image=25',
        },
        {
          title: 'test title 2',
          description: '222 tralala aaa',
          image: 'https://picsum.photos/600/300/?image=25',
        },
        {
          title: 'test title 3',
          description: '333 tralala aa 333',
          image: 'https://picsum.photos/600/300/?image=25',
        },
      ]
    }
  }
}
</script>