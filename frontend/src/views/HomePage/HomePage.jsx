
import { Component } from 'react'

import './HomePage.scss'

export class HomePage extends Component {

    render() {
        return (
            <section className="homePage">
                { <div className="homePage-container flex column">
                    <h1>Welcome, you can go to the "Commits" page to see them.</h1>
                </div>}
            </section>
        )
    }
}
