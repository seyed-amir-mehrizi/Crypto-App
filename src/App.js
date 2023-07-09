
import { Layout, Space, Typography } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'

import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/exchanges'>
                <Exchanges />
              </Route>
              <Route path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>
              Homeّ
            </Link>
            <Link to='/exchanges'>
              Exchanges
            </Link>
            <Link to='/news'>
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
