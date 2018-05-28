<template>
<div>
    <h2>Listes des articles</h2>
    <div v-for="(article, index) in articles" :key="index" class="card-grid">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{{article.name}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
            {{article.desc}}
            <br>
            <br>
            Prix : {{article.prix}}
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a v-on:click="addArticle(article)" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            ajouter aux panier
            </a>
            
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Articles',
  data () {
      return {
          articles: [
              { id: 1, name: 'Trouce', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', prix: 15, quantité: 1},
              { id: 2, name: 'Sac', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', prix: 40, quantité: 1},
              { id: 3, name: 'Oreiller', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', prix: 20, quantité: 1},
              { id:4, name: 'Bandeau', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', prix: 30, quantité: 1}
          ],
          products: [],
          article: {
              name: '',
          },
          nbArticle: 0,
          index: 0
      }
  },
  beforeCreate: function(){
  },
    created: function(){
        if(localStorage.getItem("articles") === null){
            this.products = []
        }else{
             this.products = JSON.parse(localStorage.getItem("articles"))
        }
    },
  methods: {
      addArticle: function(article){
        article.id = Date.now()
        localStorage.setItem(article.id, JSON.stringify(article))
        this.article = JSON.parse(localStorage.getItem(article.id))
        this.products.push(this.article)
        localStorage.setItem("articles", JSON.stringify(this.products))
      }
  }
}
</script>
<style lang="scss">
    .card-grid{
        width: 30%;
        float: left;
        margin-right: 1rem;
        margin-bottom: 2rem;
        border: 1px solid #eee;
    }
</style>
