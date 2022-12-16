<template>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="recipient" placeholder="Recipient" />
      <input type="text" v-model="user" placeholder="User" />
      <textarea v-model="content" placeholder="Message"></textarea>
      <input type="text" v-model="postedDate" placeholder="Posted date" />
      <button type="submit">Send</button>
    </form>
    <div v-for="message in messages" :key="message.id">
      <p>To: {{ message.recipient }}</p>
      <p>From: {{ message.user }}</p>
      <p>{{ message.content }}</p>
      <p>{{ message.postedDate }}</p>
    </div>
  </template>
  
  <script>
  import {fetch} from 'whatwg-fetch'
  
  export default {
    name: 'Message',
    data() {
      return {
        recipient: '',
        user: '',
        content: '',
        postedDate: '',
        messages: []
      }
    },
    methods: {
      sendMessage() {
        fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            recipient: this.recipient,
            user: this.user,
            content: this.content,
            postedDate: this.postedDate
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => {
          console.error('Error:', error)
        })
      },
      fetchMessages() {
        fetch('/api/messages')
        .then(response => response.json())
        .then(data => {
          this.messages = data
        })
        .catch(error => {
          console.error('Error:', error)
        })
      }
    },
    created() {
      this.fetchMessages()
    }
  }
  </script>