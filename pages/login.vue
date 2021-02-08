<template>
  <div class="container" id="Home">
    <div class="row">
      <div class="col-4 offset-4 border my-4" style="border-radius: 5px">
        <div class="row">
          <div class="col-12 text-center mt-3">
            <i class="fa fa-user-circle" style="font-size:60px; color:#ddd"></i>
          </div>
          <div class="col-12 text-center mt-3 text-ml">
            Üye Girişi
          </div>
          <div class="col-12 mt-3">
            <b-input-group prepend="@">
              <b-form-input placeholder="Email"></b-form-input>
            </b-input-group>
          </div>
          <div class="col-12 mt-3">
            <b-input-group>
              <b-input-group-prepend>
                <div class="input-group-text" data-children-count="0">
                  <i class="fa fa-lock"></i>
                </div>
              </b-input-group-prepend>
              <b-form-input placeholder="Şifre"></b-form-input>
            </b-input-group>
          </div>
          <div class="col-6 mt-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
              <label class="form-check-label" for="inlineCheckbox1">Beni Hatırla</label>
            </div>
          </div>
          <div class="col-6 mt-3 text-right">
            <a href="">Şifremi Unuttum</a>
          </div>
          <div class="col-12 my-3">
            <a href="" class="btn btn-warning btn-block" style="border-radius: 30px; color: #fff">
              Giriş Yap
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
