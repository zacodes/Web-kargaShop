<template>
  <div class="container" id="Home">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#fff"
      img-width="100%"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="~/assets/image/slider_1.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="~/assets/image/slider_2.jpg" href="">
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="~/assets/image/slider_3.jpg" href="">
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="~/assets/image/slider_4.jpg" href="">
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="~/assets/image/slider_5.jpg" href="">
      </b-carousel-slide>
    </b-carousel>

    <p id="vitrinyazi" class="text-center text-uppercase mt-5 text-lg pb-0 mb-0">
      Vitrindekiler
    </p>
    <hr class="head-border mx-auto mt-1">
    <div class="row">
      <div class="col-3 product-card-container">
        <b-link to="/product">
          <b-card
            :title="product.name"
            :img-src="product.images[0]"
            :img-alt="product.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ product.name }}
            </b-card-text>
            <p class="card-price font-weight-bold">
              {{ product.price }} TL
            </p>
          </b-card>
        </b-link>
      </div>
    </div>

  </div>

</template>

<script>


export default {
  
  /*computed:{
    product(){
      return this.$store.state.products;
    }
  }*/
data () {
    return {
      product: {
        name: 'KANAGAWA -UNISEX TSHIRT',
        category: 'Unisex T-Shirt',
        price: 34.9,
        code: 'K1867',
        sizes: [
          'S', 'M', 'L', 'XL'
        ],
        images: [
          '_nuxt/assets/image/product1.jpg'
        ]
      }
    }
  }
}
</script>
