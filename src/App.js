import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CustomerCreate from './components/CustomerCreate'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <nav>
            <div className="row">
                <ul className="main-nav js--main-nav">
                    <li><Link to="/">Home</Link></li>
                </ul>
                <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
            </div>
            </nav>
        </header> 
        <Switch>     
          <Route exact path="/" component={ Home } />
          <Route exact path="/CustomerCreate" component={ CustomerCreate } />
          {/* <Route exact path="/corpoclinico"  component={ CorpoClinico } />
          <Route exact path="/corpoclinico/create" component={ CorpoPageCreate } />                                   
          <Route path="/corpoclinico/:id" component={ CorpoPage } />
          <Route exact path="/unidades"  component={ Unidades } />
          <Route exact path="/unidades/create" component={ UnidadesCreate } />
          <Route path="/unidades/:id" component={ Unidade } />  
          <Route exact path="/planos"  component={ Planos } />
          <Route exact path="/planos/create" component={ PlanosCreate } />
          <Route path="/planos/:id" component={ Plano } />  
          <Route exact path="/especialidades"  component={ Especialidades } />
          <Route exact path="/especialidades/create" component={ EspecialidadesCreate } />
          <Route path="/especialidades/:id" component={ Especialidade } />  
          <Route exact path="/exames"  component={ Exames } />
          <Route exact path="/exames/create" component={ ExamesCreate } />
          <Route path="/exames/:id" component={ Exame } />  
          <Route exact path="/noticias"  component={ Preparos } />
          <Route exact path="/noticias/create"  component={ PreparosCreate } />
          <Route path="/noticias/:id" component={ Preparo } />  
          <Route exact path="/cupons"  component={ Cupons } />
          <Route exact path="/cupons/create"  component={ CupomCreate } />
          <Route path="/cupons/:id" component={ Cupom } />  
          <Route exact path="/push"  component={ PushN } /> */}
        </Switch> 
      </div>
    );
  }
}

export default App;
