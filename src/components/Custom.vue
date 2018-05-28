<template>
  <div class="mdl-js-layout">
      <h2>loremp ipsum bodimum loukick</h2>
      <button class="btn btn-before" v-if="tab !== 1 && !customIsfinish" v-on:click="prevTo">Précédent</button>
      <button class="btn" v-if="customIsfinish" v-on:click="restart">customiser un autre vêtement</button>
      <span v-on:click="tab = 1">Categorie</span>
      <span v-on:click="tab = 2">Vetement</span>
      <span v-on:click="tab = 3">Tissus</span>
      <span v-on:click="tab = 4">Mesure</span>
      <span v-on:click="tab = 5">Finir customisation</span>
      <button class="btn btn-next" v-on:click="nextTo" v-if="tab < 4">Suivant</button>
      <div v-if="tab === 1">
          <h3>Pour ...</h3>
          <li>
              Homme
              <img src="../assets/icon-homme.png" alt="">
              <input type="radio" name="categorie" v-model="categorie" value="homme" id="">
          </li>
          <li>
              Femme 
              <img src="../assets/icon-femme.png" alt="">
              <input type="radio" name="categorie" v-model="categorie" value="femme" id="">
          </li>
          <li>
              Garçon 
              <img src="../assets/icon-garçon.png" alt="">
              <input type="radio" name="categorie" v-model="categorie" value="garçon" id="">
          </li>
          <li>
              Fille 
              <img src="../assets/icon-fille.png" alt="">
              <input type="radio" name="categorie" v-model="categorie" value="fille" id="">
          </li>
      </div>
      <div v-else-if="tab === 2">
          <h3>Vêtement</h3>
          <li>Chemise <input type="radio" name="vetement" v-model="vetement" value="chemise" id=""></li>
          <li>Tunique <input type="radio" name="vetement" v-model="vetement" value="tunique" id=""></li>
          <li>Robe <input type="radio" name="vetement" v-model="vetement" value="robe" id=""></li>
          <li>Jupe <input type="radio" name="vetement" v-model="vetement" value="jupe" id=""></li>
      </div>
      <div v-else-if="tab === 3">
          <h3>Tissus</h3>
          <li>Violet / motif éléphant <input type="radio" name="tissu" v-model="tissu" value="Violet / motif éléphant" id=""></li>
          <li>Jaune / Maron <input type="radio" name="tissu" v-model="tissu" value="Jaune / Maron" id=""></li>
          <li>Vert / Orange <input type="radio" name="tissu" v-model="tissu" value="Vert / Orange" id=""></li>
          <li>Rouge / dorée <input type="radio" name="tissu" v-model="tissu" value="Rouge / dorée" id=""></li>
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
    background: #7F00FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

}
</style>
