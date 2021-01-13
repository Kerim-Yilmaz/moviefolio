import React,{useContext} from 'react'
import { Layout,Input,Row,Col,notification} from 'antd';
import { MovieData } from '../../contex/MovieData';
import {Redirect} from 'react-router-dom'
const { Header } = Layout;
const { Search } = Input;

const MHeader = () => {
    const { searchMovie } = useContext(MovieData);


    const onSearch =(value)=>{
        const n = value.length;
        const m = value.indexOf(' ');
        if (n>=3 && m!==0) {
            const replacequery= value.replace(" ", "%20");
            
            <Redirect  to="/top_rated" />
        searchMovie(replacequery)
          } else{
            const openNotification = () => {
                notification.open({
                  message: 'Search',
                  description:
                    'Min search 3- char',
                  className: 'custom-class',
                  style: {
                    width: 600,
                  },
                });
              };
              openNotification()
            }
    }
    return (
       <>
            <Header className="site-layout-background" style={{ padding: 0 }} > 
      
            <Row>
      
      <Col span={8} offset={16}>
      <Search allowClear style={{marginRight:'50px', marginTop:'15px',width:'200px'}}  onSearch={onSearch} placeholder="Search"  />
      </Col>
      <Col span={4} style={{marginTop:'-65px'}} offset={8}>
      <h1 >HEADER TEXT</h1>
      </Col>
    </Row>
    
        
      
    
         
            
           
             </Header>
        </>
    )
}

export default MHeader
