<template>
  <div>
      <h2>
          Panier
      </h2>
        <p>Article commander</p>
        
        <li v-for="article in articles" :key="article.id">
            {{article.name}} {{article.prix}} euros 
            <span v-on:click="deleteProduct(article)"><i class="material-icons">delete</i></span>
            <p><span>+</span> article.quantite <span>-</span></p>
        </li>
        <p>total : {{total}}</p>
        
  </div>
</template>
<script>
export default {
  data () {
      return {
          articles: [],
          total: 0
      }
  },
  created: function(){
      if(localStorage.getItem("articles") !== null){
        JSON.parse(localStorage.getItem("articles")).map( (article) => { this.articles.push(article)})
      }
      this.articles.map(article => this.total = this.total + article.prix)
  },
  methods:{
      deleteProduct: function(article){
          localStorage.removeItem(article.id)
          this.articles = this.articles.filter(function(t) {
                    //retourne les élement du tableau dont l'id est différent de l'id de la tache selectionné
                        return t.id !== article.id;
                    });
            localStorage.setItem("articles", JSON.stringify(this.articles))
            this.total = this.total - article.prix
      },
      
  },
}
</script>
<style>

</style>
