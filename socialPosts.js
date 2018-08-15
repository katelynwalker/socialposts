"use strict"

const socialPosts = {

    template: `<button type="button"id="addPostBtn">New Post</button>
                <post-form add-post="$ctrl.addPost(newPost);"></post-form>
                <section id="box"><post delete-post="$ctrl.deletePost(index);"
                thought = "thought"
                index = "$index"
                ng-repeat="thought in $ctrl.posts track by $index"></post></section>`,
                
                // <post-form ng-show="$ctrl.show"></post-form> put this in your template in the parent

                // vm.showForm = () => {
                //            vm.show = false
                //        }
           

    controller: 
    function () {
        const vm = this;
        vm.posts = [
        {
            title: "Dog",
            words: "bark bark bark bark bark bark bark bark bark bark bark bark"
        },
        {
            title: "Cat",
            words: "meow meow meow meow meow meow meow meow meow"
        },
        {
            title: "Bird",
            words: "chirp chirp chirp chirp chirp chirp chirp chirp"
        }
        ]

        vm.addPost = (newPost) => {
            vm.posts.push(angular.copy(newPost));
         };
       
    
         vm.deletePost = (index) => {
             console.log(index);
            vm.posts.splice(index,1);
         };


        //  vm.showForm = () => {
        //     vm.show = false
        // }


      

    }





}









angular
    .module("App")
    .component("socialPosts", socialPosts);