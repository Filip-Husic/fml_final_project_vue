<template>
    <div>
        <form @submit.prevent="addPost">
            <input type="text" v-model="newPost" placeholder="Add a new post" />
            <button type="submit">Add post</button>
        </form>

        <ul>
            <li v-for="post in posts" :key="post.id">
            {{ post.title }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
            newPost: ''
        }
    },
    methods: {
        addPost () {
            const post = {
                id: this.posts.length +1,
                title: this.newPost
            }
            this.posts.push(post)
            this.newPost = ''
        }
    }
}
</script>