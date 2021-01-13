import React from 'react'
import { Layout } from 'antd';
import ListCard from '../ListCard/ListCard'
import {  Route , Switch} from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails';

const { Content } = Layout;


const MContent = () => {


  return (
    <>
      
      
      
      <Content style={{ margin: '24px 16px 0',overflow: 'initial' }} >
        
      
      <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
      <Switch>
      <Route path="/" exact  ><ListCard/></Route>
      <Route path="/top_rated" ><ListCard/></Route>
      <Route path="/movies/:id" ><MovieDetails/></Route>
      </Switch>
      
      </div>
         

    </Content>
    

   
   
    </>
  )
}

export default MContent
