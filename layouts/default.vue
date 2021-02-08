<template>
  <div id="app">
    <header class="container-fluid border-bottom">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <a href="/">
              <img class="header-logo mw-100" src="~/assets/image/logo.jpg" alt="">
              </a>
            </div>
            <div class="col-3 offset-6 my-auto d-flex justify-content-between">
              <a href="">
                <i class="fa fa-search"></i>
              </a>
              <a href="/login">
                <i class="fa fa-user"></i>
              </a>
              <a href="/cart" class="position-relative">
                <i class="fa fa-shopping-cart"></i>
                <span id="CartItemCount">{{ itemCount }}</span>
              </a>
            </div>
            <div class="col-12 mb-0 mt-5 pb-0">
              <b-navbar toggleable="lg" type="light" class="text-uppercase pb-0">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item-dropdown full-width>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        Giyim
                      </template>
                      <div class="container px-5">
                        <div class="row">
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Unisex T-shirt
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Oversize T-Shirt
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kapüşonlu T-Shirt
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kapüşonsuz Sweat
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Atkı
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Buff
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Sırt Çantası
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Bere
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Budget Şapka
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Çorap (Unisex)
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown full-width>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        Aksesuar
                      </template>
                      <div class="container px-5">
                        <div class="row">
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Küpe
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kolye
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kol Saati
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown full-width>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        Hediyelik
                      </template>
                      <div class="container px-5">
                        <div class="row">
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Duvar Saati
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Not Defteri
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Işıklandırma
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Çakmak
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Patch
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Matara
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Yastık
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kar Küresi
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Fotoğraf Albümü
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Figür
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Metal Plaka
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Asa
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  USB Flash Bellek
                                </a>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Anahtarlık
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </b-nav-item-dropdown>


                    <b-nav-item-dropdown full-width>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        Kupa ve Termos
                      </template>
                      <div class="container px-5">
                        <div class="row">
                          <div class="col-6">
                            <div class="row">
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt=""> 
                                  Termos 
                                </a> <br/><br/><br/><br/><br/>
                              </div>
                              <div class="col-3 link-container">
                                <a href="/category">
                                  <img src="~/assets/image/nopic_image.webp" alt="">
                                  Kupa
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-nav-item-dropdown>


                    <b-nav-item href="#">Kadın Cüzdan</b-nav-item>
                  </b-navbar-nav>

                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </div>
    </header>


    <router-view></router-view>

    <footer class="container-fluid">
      <div class="row">
        <div class="container-fluid top-footer">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-6 text-uppercase my-auto text-ml">
                  KAMPANYALARIMIZDAN HABERDAR OLUN
                </div>
                <div class="col-6 text-right">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="fa fa-envelope"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input type="email" placeholder="E-mail adresinizi yazınız"></b-form-input>

                    <b-input-group-append class="ml-2">
                      <b-button variant="warning">
                        Kaydol
                        <i class="fa fa-angle-right"></i>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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

      itemCount: 0
    }
  },
  mounted () {
    if(!localStorage.getItem('itemCount')) {
      this.itemCount = 0
      localStorage.itemCount = 0
    } else {
      this.itemCount = localStorage.itemCount
    }
  }
}
</script>
