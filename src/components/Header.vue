<template>
<div class="mdl-js-layout">
    <header class="mdl-layout__header header">
        <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Title</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link class="mdl-navigation__link" :to="`/Accueil`">Accueil</router-link>
                <router-link class="mdl-navigation__link" :to="`/Custom`">Custom</router-link>
                <router-link class="mdl-navigation__link" :to="`/Articles`">Articles</router-link>
                <router-link class="mdl-navigation__link" :to="`/Panier`"><i class="material-icons">shopping_cart</i></router-link>
            </nav>
        </div>
    </header>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation">
            <router-link class="mdl-navigation__link" :to="`/Accueil`">Accueil</router-link>
                <router-link class="mdl-navigation__link" :to="`/Custom`">Custom</router-link>
                <router-link class="mdl-navigation__link" :to="`/Articles`">Articles</router-link>
                <router-link class="mdl-navigation__link" :to="`/Panier`"><i class="material-icons">shopping_cart</i></router-link>
        </nav>
    </div>
</div>

<!--
<div class="ui large menu">
  <router-link class="item" :to="`/Accueil`">Accueil</router-link>
  <router-link class="item" :to="`/Custom`">Custom</router-link>
  <router-link class="item" :to="`/Articles`">Articles</router-link>
  <div class="right menu">
    <div class="item">
        <router-link :to="`/Panier`"><i class="material-icons">shopping_cart</i></router-link>
    </div>
  </div>
</div>
-->
</template>
<script>
import Articles from './Articles.vue'
import Panier from './Panier.vue'
export default {
    name: 'Header',
    components: {
        iArticles: Articles
    },
    data () {
        return {

        }
    },
    state: {
        nbProducts: async function () {}
    },
    watch: {
    // à chaque fois que la question change, cette fonction s'exécutera
    nbProducts: function () {
      return this.nbProducts = JSON.parse(localStorage.getItem("articles")).length
    }
  },
    methods: {
        cha: function(event){
            this.article = event
        }
    },
    created: function(){
        if(localStorage.getItem("articles") !== null){
this.nbProducts = JSON.parse(localStorage.getItem("articles")).length
        }
        else{
            this.nbProducts = 0
        }
    }
}
</script>
<style lang="scss">
body{
  color: #484848;
}
ul{
    display: flex;
    li{
        margin-right: 2rem;
        list-style: none;
    }
}
a{
    text-decoration: none;
    color: #484848!important;
    &:hover{
      color: #FFB6B9!important;
    }
}
.ui{
    &.menu{
            border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    }
}
.item{
    &:before{
        content: none!important;
    }
}
.header{
    background: white;  /* fallback for old browsers */
}
.mdl-layout-title{
    color: #484848;
}
.mdl-layout__drawer-button > i{
    color: #484848;
}
.mdl-layout__header-row .mdl-navigation__link{
    border-right: 1px solid #e6e6e6;
    &:first-child{
        border-left: 1px solid #e6e6e6;
    }
    &:last-child{
        border-right: none;
    }
}
</style>


