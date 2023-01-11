import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// const element = React.createElement('h1', null, 'Hello, world')
// const element = <h1>Hello, world!!!!</h1>

// const name = "Luke Skywalker"
const name = "Leia Organa"

const user = {
    firstName: "Leia",
    lastName: "Organa",
    email: "leia@gmail.com"
}

function formatUserName(user) {
    return `${user.lastName}, ${user.firstName}`
}

function getUserEmailLink(user) {
    return (
        <a href={`mailto:${user.email}`}>
            {formatUserName(user)}
        </a>
    )
}

function getGreeting(user) {
    // if (user) {
    //     return <h1 className="title">Hello, {getUserEmailLink(user)}!</h1>
    // } else {
    //     return <h1>Hello, stranger</h1>
    // }
    return <h1 className="title">Hello, {user ? getUserEmailLink(user) : "stranger"}</h1>
}

// const element = (
//     <div>
//         {getGreeting(user)}
//         <img src="http://placekitten.com/480/480" />
//     </div>
// )
// console.log(element)

function Greeting({ name }) {
    // console.log("== props:", props)
    return <h1>Hello, {name}</h1>
}

// class Greeting extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

function Card(props) {
    return <div className="card">{props.children}</div>
}

function App() {
    return (
        <div>
            <Greeting name="Leia Organa" anotherProp="another value" />
            <Greeting name="Luke Skywalker" />
            <Card>
                <img src="http://placekitten.com/480/480" />
            </Card>
            <Card>
                Hello!
            </Card>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
