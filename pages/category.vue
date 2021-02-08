<template>
  <div class="container my-5" id="Home">
    <div class="row">
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            <h3 class="text-ml">Ürün Grupları</h3>
            <hr class="head-border float-left">
            <div class="clearfix"></div>
            Seçimleriniz <br><br>
            Filtre Seçenekleri
            <div class="col-12 border-bottom my-4"></div>
            <div id="uni" class="font-weight-bold">UNISEX T-SHIRT</div>
            <a href="" style="color:#efc002" class="d-block mt-3">
              <i class="fa fa-angle-left"></i> Giyim
            </a>
            <div class="col-12 border-bottom my-4"></div>
            <div id="mark" class="font-weight-bold text-left">
              Tüm Markalar
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label id="kar" class="form-check-label" for="defaultCheck1">
                Karga
              </label>
            </div>

            <div id="filt" class="font-weight-bold text-left mt-5">
              Filtre Seçenekleri
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
              <label id="kamp" class="form-check-label" for="defaultCheck2">
                Kampanyalı Ürünler
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
              <label id="spons" class="form-check-label" for="defaultCheck3">
                Sponsor Ürünler
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck4">
              <label id="yeni" class="form-check-label" for="defaultCheck4">
                Yeni Ürünler
              </label>
            </div>


            <div id="enp" class="font-weight-bold text-left mt-5">
              En Popüler Olanlar
            </div>

            <a href="/product" class="d-block">
              <i class="fa fa-camera"></i>
              KANAGAWA -UNISEX TSHIRT
            </a>
          </div>
        </div>
      </div>
      <div class="col-9">
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
      }
    }
  }
  
}
</script>

