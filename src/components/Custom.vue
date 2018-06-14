<template>
  <div class="mdl-js-layout">
      <h2>loremp ipsum bodimum loukick</h2>
      <i v-if="tab !== 1 && !customIsfinish" v-on:click="prevTo" class="material-icons arrow">
        keyboard_arrow_left
      </i>
      <button class="btn" v-if="customIsfinish" v-on:click="restart">customiser un autre vêtement</button>
      <span v-on:click="tab = 1">Categorie</span>
      <span v-on:click="tab = 2">Vetement</span>
      <span v-on:click="tab = 3">Tissus</span>
      <span v-on:click="tab = 4">Mesure</span>
      <span v-on:click="tab = 5">Finir customisation</span>
      <i v-on:click="nextTo" v-if="tab < 4" class="material-icons arrow">
        keyboard_arrow_right
      </i>
      <div v-if="tab === 1">
          <h3>Pour ...</h3>
          <div class="categorie">
            <div class="content-img">
              <img src="../assets/icon-homme.png" alt="">
            </div>
            <div class="info">
              <div class="input_radio">
                <input type="radio" v-model="categorie" name="categorie" value="homme" id="">
                <label>homme</label>
              </div>
            </div>
          </div>
          <div class="categorie">
            <div class="content-img">
              <img src="../assets/icon-femme.png" alt="">
            </div>
            <div class="info">
              <div class="input_radio">
                <input type="radio" v-model="categorie" name="categorie" value="femme" id="">
                <label>femme</label>
              </div>
            </div>
          </div>
          <div class="categorie">
            <div class="content-img">
              <img src="../assets/icon-garçon.png" alt="">
            </div>
            <div class="info">
              <div class="input_radio">
                <input type="radio" v-model="categorie" name="categorie" value="garçon" id="">
                <label>garçon</label>
              </div>
            </div>
          </div>
          <div class="categorie">
            <div class="content-img">
              <img src="../assets/icon-fille.png" alt="">
            </div>
            <div class="info">
              <div class="input_radio">
                <input type="radio" v-model="categorie" name="categorie" value="fille" id="">
                <label>fille</label>
              </div>
            </div>
          </div>
      </div>
      <div v-else-if="tab === 2">
          <h3>Vêtement</h3>
          <div class="input_radio">
            <input type="radio" name="vetement" v-model="vetement" value="chemise" id="">
            <label>chemise</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="vetement" v-model="vetement" value="tunique" id="">
            <label>tunique</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="vetement" v-model="vetement" value="robe" id="">
            <label>robe</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="vetement" v-model="vetement" value="jupe" id="">
            <label>jupe</label>
          </div>
      </div>
      <div v-else-if="tab === 3">
          <h3>Tissus</h3>
          <div class="input_radio">
            <input type="radio" name="tissu" v-model="tissu" value="Violet / motif éléphant" id="">
            <label>Violet / motif éléphant</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="tissu" v-model="tissu" value="Jaune / Maron" id="">
            <label>Jaune / Maron</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="tissu" v-model="tissu" value="Vert / Orange" id="">
            <label>Vert / Orange</label>
          </div>
          <div class="input_radio">
            <input type="radio" name="tissu" v-model="tissu" value="Rouge / dorée" id="">
            <label>Rouge / dorée</label>
          </div>
      </div>
      <div v-else-if="tab === 4">
          <h3>Mesure</h3>
          <form action="">
              <label for="">Taille</label>
              <select v-model="taille"  id="">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
              </select>
          </form>

          <button class="btn" v-on:click="tab = 5">J'ai fini de customiser mon wax</button>
      </div>
      <div v-else>
          <h4>Mon wax</h4>
          <div v-if="!nameValided">
            <p>Donner un nom à votre customisation:</p>
            <input type="text" name="" id="" v-model="name">
            <button class="btn" v-on:click="nameValided = true">ajouter le nom</button>
          </div>
          <p v-else>Nom de votre customisation : {{name}} </p>
          <p v-if="categorie ==='non selectionnée'">{{categorie}}</p>
          <p v-else>Wax pour {{categorie}}</p>
          <p v-if="vetement ==='non selectionnée'">{{vetement}}</p>
          <p v-else>Vêtement {{vetement}}</p>
          <p v-if="tissu ==='non selectionnée'">{{tissu}}</p>
          <p v-else>Tissu {{tissu}}</p>
          <p v-if="taille ==='non selectionnée'">{{taille}}</p>
          <p v-else>Taille {{taille}}</p>
          <p v-if="!missTissu && !missCategorie && !missVetement">prix {{produit.prix}}</p>
          <button class="btn" v-if="!isConfirmed" v-on:click="confirm" v-bind:disabled="missTissu || missCategorie || missVetement">Ajouter au panier</button>
          <p v-else>Ton vêtement customiser est a été ajouté a otn panier</p>
      </div>
  </div>
</template>
<script>
export default {
    name:'Custom',
    data () {
            return {
                tab : 1,
                produit: {},
                name:'',
                // tant que categorie n'est pas sélectionné
                categorie: 'non selectionnée',
                // tant que vetement n'est pas sélectionné
                vetement: 'non selectionnée',
                // tant que tissu n'est pas sélectionné
                tissu: 'non selectionnée',
                taille: 's',
                products: [],
                isConfirmed: false,
                customIsfinish: false,
                missVetement: true,
                missCategorie: true,
                missTissu: true,
                nameValided: false,
                radio: 'yo'
            }
        },
        created: function(){
            // on verifie s'il ya  des articles
        if(localStorage.getItem("articles") === null){
            this.products = []
        }else{
             this.products = JSON.parse(localStorage.getItem("articles"))
        }
    },
    methods: {
        // nav précédent entre les tabs
        nextTo: function(){
            if(this.tab < 4){
            this.tab ++
            }
            else {
                this.tab = 1
            }
        },
        // nav suivant entre les tabs
        prevTo: function(){
            if(this.tab === 1) {
                this.tab = 4
            }else{
                this.tab --
            }
        },
        // nav faire la tab finision
        finish: function(){
            this.tab = 5
        },
        // ajout article customiser au panier
        confirm: function(){
            this.produit.id = Date.now()
            this.produit.name = this.name
            this.produit.categorie = this.categorie
            this.produit.tissu = this.tissu
            this.produit.taille = this.taille
            this.produit.vetement = this.vetement
            this.products.push(this.produit)
            localStorage.setItem(this.produit.id, JSON.stringify(this.produit))
            localStorage.setItem("articles", JSON.stringify(this.products))
            this.isConfirmed = true
            this.customIsfinish = true
        },
        // recommencer une customisation
        restart:function(){
            this.isConfirmed = false
            this.customIsfinish = false
            this.tab = 1
        }

    },
    // surveiller la customisation
    watch: {
        // choix de vetement qui determine le prix et verif qu'un vetement est bien selectionner
        vetement: function(vetement){
             if(vetement === 'robe' || vetement === 'tunique'){
                this.produit.prix = 60
                this.missVetement = false
            } else if(vetement === 'jupe' || vetement === 'chemise') {
                this.produit.prix = 40
                this.missVetement = false
            }else{
                this.missVetement = true
            }
        },
        //verif qu'un tissu est bien selectionnée
        tissu: function(tissu){
            if(tissu !== 'non selectionnée'){
                this.missTissu = false
            }
        },
        //verif qu'un categorie est bien selectionnée
        categorie: function(categorie){
            if(categorie !== 'non selectionnée'){
                this.missCategorie = false
            }
        },

    }


}
</script>
<style lang="scss">
.btn{
    background: #FFB6B9;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

}
.categorie{
  width: 45%;
  float: left;
  margin: 2% 2% 2% 0;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  &:nth-child(2n + 1){
    margin: 2% 0 2% 0;
  }
}
.arrow{
  position: relative;
  top: 0.5rem;
}
.input_radio {
    margin-bottom: 1rem;
    line-height: normal;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: block;
    input[type="radio"] {
      width: 10px;
      height: 10px;
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      cursor: pointer;
      z-index: 500;
      label:empty:before {
      margin-right: 0;
      }
      +label:before {
      content: '';
      background: #f4f4f4;
      border: 1px solid #e6e6e6;
      display: inline-block;
      width: 15px;
      height: 15px;
      position: relative;
      top: 0;
      margin-right: 1em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      -webkit-transition: all 250ms ease;
      transition: all 250ms ease;
      border-radius: 100%;
      }
      &::disabled+label:before {
      box-shadow: inset 0 0 0 4px #f4f4f4;
      border-color: #b4b4b4;
      background: #b4b4b4;
      }
      &:focus+label:before {
      outline: none;
      border-color: rgba(71, 184, 214, 0.8);
      }
      &:checked+label:before {
      background-color: rgba(71, 184, 214, 0.8);
      }
      &:checked+label::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 39%;
      width: 5px;
      height: 8px;
      border: solid #fff;
      border-radius: 3px;
      border-width: 0 2px 2px 0;
      transform: translateY(-50%) rotate(45deg);
      }
    }
    }
</style>
