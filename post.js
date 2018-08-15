"use strict"

const post = {
    bindings: {
        thought: "<",
        deletePost: "&",
        index: "<"
    },
    template:
    `<section id="main">
    
    <p id="postTitle">{{ $ctrl.thought.title }} </p>
    <p>{{ $ctrl.thought.words }} <button ng-click ="$ctrl.deletePost({ index: $ctrl.index });" id="x"><i class="material-icons">
    close
    </i></button></p>
    </section>`

   
};




angular
    .module("App")
    .component("post", post);