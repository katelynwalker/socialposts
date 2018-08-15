"use strict";

const postForm = {
    bindings: {
        addPost: "&"

    },
    template: 
    `
    <form ng-submit="$ctrl.addPost({  newPost: $ctrl.postInfo });"  id="formy" >
    <h4>Title</h4>
    <input type = "text" placeholder ="Post Title" ng-model="$ctrl.postInfo.title"></input>
    <h4>Thought</h4>
    <input type = "text" ng-model="$ctrl.postInfo.words" id="thoughtbox"></input>
    <button>Add Post</button>
    </form>`
    

    
}
    // vm.showForm = () => {
                //            vm.show = false
                //        }





angular
    .module("App")
    .component("postForm", postForm )