import React  from 'react'
import {Layout} from 'antd'
import MHeader from './Header/MHeader';
import MSider from './Sider/MSider';
import MFooter from './footer/MFooter';
import MContent from './content/MContent';
import MovieDataProvider from '../contex/MovieData';
import {  BrowserRouter as Router } from 'react-router-dom';

import '../index.css';
const MLayout = () => {

   
    return (
        <>
         <Router >
       <MovieDataProvider>
        <Layout style={{ minHeight: "100vh" }} >
        <MSider/>
        <Layout className="site-layout"  >
        <MHeader  />
        
        <MContent/>
     
      
        <MFooter/>
        </Layout>
        </Layout>
        </MovieDataProvider>
        </Router>
        </>
    )
}

export default MLayout
