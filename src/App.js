import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Header from './components/elements/Header/Header'
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import NotFound from './components/elements/NotFound/NotFound'

// interface Props {
//     readonly name: string
// }

// interface State {
//     readonly name: string
// }

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/:movieId" component={Movie} exact />
                        <Route component={NotFound} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}
export default hot(App)
