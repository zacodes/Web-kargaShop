<template>
  <div class="container my-2" v-if="hasItem">
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div class="col-12 border text-right text-ml font-weight-normal py-3">
            <div class="row">
              <div class="col-10">
                SEPETİNİZE <b>115,10 TL</b> 'LİK DAHA ÜRÜN EKLEYİN<br>
                <b>KARGO ÜCRETİ ÖDEMEYİN!</b>
              </div>
              <div class="col-2">
                <i class="fa fa-shipping-fast text-xl"></i>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3 border py-3">
            <h2 class="text-lg text-uppercase text-center mb-0">Sepet Detayı</h2>
            <hr class="head-border">
            <table width="100%">
              <tbody>
              <tr>
                <td>
                  <img :src="basketItem.images[0]" width="100">
                </td>
                <td>
                  {{ basketItem.name }}
                </td>
                <td width="200">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-btn variant="outline-info" @click="itemCount--">-</b-btn>
                    </b-input-group-prepend>
                    <b-form-input type="number" min="0" v-model="itemCount" class="text-center"></b-form-input>
                    <b-input-group-append>
                      <b-btn variant="outline-secondary" @click="itemCount++">+</b-btn>
                    </b-input-group-append>
                  </b-input-group>
                </td>
                <td>
                  {{ basketItem.price * itemCount }} TL + KDV
                </td>
              </tr>
              </tbody>
            </table>
            <a href="/" class="btn btn-light my-4">
              <i class="fa fa-arrow-left"></i> Alışverişe Devam Et
            </a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-12 border ml-3 pt-3">
            <h2 class="text-ml text-uppercase text-center mb-0">Sepet Özeti</h2>
            <hr class="head-border">
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-6">Ara Toplam</div>
                  <div class="col-6 text-right font-weight-bold">
                    {{ basketItem.price * itemCount }} TL
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">KDV</div>
                  <div class="col-6 text-right font-weight-bold">
                    0.00 TL
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">KDV Dahil</div>
                  <div class="col-6 text-right font-weight-bold">
                    {{ basketItem.price * itemCount }} TL
                  </div>
                </div>
              </div>
              <div class="col-12 border my-3"></div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">Toplam</div>
                  <div class="col-6 text-right font-weight-bold">
                    {{ basketItem.price * itemCount }} TL
                  </div>
                </div>
              </div>
              <div class="col-12 my-3">
                <a href="/uyeliksizLogin" class="btn btn-block btn-warning text-white" style="border-radius: 30px">
                  Alışverişi Tamamla
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center" v-else>
    eşya yok
  </div>

</template>

<script>
export default {
  data () {
    return {
      hasItem: false,
      itemCount: 0,
      basketItem: null
    }
  },
  mounted () {
    if (localStorage.getItem('itemCount')) {
      this.hasItem = true
      this.itemCount = localStorage.getItem('itemCount')
      this.basketItem = JSON.parse(localStorage.getItem('item'))
    }
  }
}
</script>
