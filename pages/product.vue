<template>
  <div class="container">
    <b-breadcrumb class="my-2">
      <b-breadcrumb-item href="/">
        Anasayfa
      </b-breadcrumb-item>
      <b-breadcrumb-item href="category">
        Giyim
      </b-breadcrumb-item>
      <b-breadcrumb-item href="/product">{{ product.name }}</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="row my-2">
      <div class="col-6">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#fff"
          img-width="100%"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide img-src="~/assets/image/product1.jpg">
          </b-carousel-slide>
          <b-carousel-slide img-src="~/assets/image/product1_1.jpg">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-6 mt-4">
        <h2 class="text-sm font-weight-bold" style="color:#58828e">Karga</h2>
        <h1 class="text-lg font-weight-bold">
          {{ product.name }}
        </h1>
        <hr class="head-border mt-1 mr-auto float-left">
        <div class="clearfix"></div>
        <p class="mt-3 text-ml">
          {{ product.price }} TL
        </p>
        <table width="100%" class="mt-3 text-xs">
          <tbody>
          <tr>
            <td>Kategori</td>
            <td>:</td>
            <td>{{ product.category }}</td>
          </tr>
          <tr>
            <td>Stok Kodu</td>
            <td>:</td>
            <td>{{ product.code }}</td>
          </tr>
          <tr>
            <td>Beden</td>
            <td>:</td>
            <td>
              <select>
                <option v-for="option in product.sizes">
                  {{ option }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Fiyat</td>
            <td>:</td>
            <td>{{ product.price }} + KDV</td>
          </tr>
          </tbody>
        </table>
        <div class="row my-4 product-count-container">
          <div class="col-6">
            <b-input-group>
              <b-input-group-prepend>
                <b-btn variant="outline-info" @click="num--">-</b-btn>
              </b-input-group-prepend>
              <b-form-input type="number" min="0" v-model="num" class="text-center"></b-form-input>
              <b-input-group-append>
                <b-btn variant="outline-secondary" @click="num++">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="col-6">
            <button class="btn btn-block" style="background: #ddd">
              <i class="fa fa-heart" style="color:red"></i>
            </button>
          </div>
          <div class="col-6 mt-3">
            <button class="btn btn-block btn-warning text-white text-uppercase" @click="addProduct()">
              SEPETE EKLE
            </button>
          </div>
          <div class="col-6 mt-3">
            <button class="btn btn-block btn-primary text-white text-uppercase">
              Hızlı Satın Al
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      },
      num: 1
    }
  },

  methods: {
    addProduct () {
      localStorage.itemCount = this.num
      localStorage.item = JSON.stringify(this.product)
      this.itemCount = localStorage.itemCount
      location.reload()
    }
  }
}
</script>
