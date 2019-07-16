# bbcomponents
An open source repository for common React components used in UI design

bbcomponents use styled-component to work, you should install it before

## Install styled-components
`npm i styled-components`
## Install bbcomponents
`npm i bbcomponents`

## Create a chat
```javascript
import { Chat } from "bbcomponents";

// Example of props for the Chat component
const exampleChatProps = {
    title: "Sonoritmo",
    buttonPlaceholder: "¿Buscabas algo o tienes alguna duda?, inicia un chat",
    agentProfilePicUrl: "https://image.flaticon.com/icons/svg/327/327779.svg",
    customerProfilePicUrl:
      "https://lh5.googleusercontent.com/-DcksDlQ970o/AAAAAAAAAAI/AAAAAAAAACo/AKfwigGQO3U/photo.jpg",
    messages: [
      {
        id: "100",
        name: "Sonoritmo",
        message: "Hola cliente",
        timestamp: "2019-07-13 12:00:00",
        type: "agent"
      },
      {
        id: "101",
        name: "William",
        message: "Hola sonoritmo",
        timestamp: "2019-07-13 12:00:01",
        type: "customer"
      },
      {
        id: "102",
        name: "Sonoritmo",
        message: "en que te ayudo?",
        timestamp: "2019-07-13 12:00:02",
        type: "agent"
      },
      {
        id: "104",
        name: "Sonoritmo",
        message: "Hola cliente",
        timestamp: "2019-07-13 12:00:00",
        type: "agent"
      },
      {
        id: "105",
        name: "William",
        message: "Hola sonoritmo",
        timestamp: "2019-07-13 12:00:01",
        type: "customer"
      },
      {
        id: "106",
        name: "Sonoritmo",
        message: "en que te ayudo?",
        timestamp: "2019-07-13 12:00:02",
        type: "agent"
      }
    ],
    displayUserName: "William",
    mainColor: "#282c34",
    headerTextColor: "white",
    metadata: {
      custom: "here you can storage custom attributes",
      section: "instruments"
    },
    newMessageHandler: msg => console.log(msg), // This function will be triggered after a new message is submited
    customerIsAuthenticated: true, // If you need to perform a login in your app before activating the chat it should be false
    handleUserAuthentication: () =>
      alert("You have to be logged in to chat with us!") // If customerIsAuthenticated = false it will be triggered when user press the circle chat icon
  };

render(){
  return <Chat {...exampleChatProps}/>
}
```

## Try the Chat component online
https://codesandbox.io/s/bbcomponents-chat-example-h40jb
