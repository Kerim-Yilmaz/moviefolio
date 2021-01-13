import React, { useState, useContext } from 'react'
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
   UserOutlined,
} from '@ant-design/icons';
import { MovieData } from '../../contex/MovieData';
import { Link } from 'react-router-dom'
const { Sider } = Layout;

const { SubMenu } = Menu;



const MSider = () => {
  const { topRated, popular,genres,genresloading } = useContext(MovieData)
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);

  };
  
  
  return (
    <>
      <Sider  collapsible collapsed={collapsed} onCollapse={toggle} >
        <div className="logo"  ><img width='50px' weight='50px' alt='' src="https://restcountries.eu/data/tur.svg" /></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

     

          <Menu.Item key="1" onClick={()=>{popular()}} icon={<PieChartOutlined />}>
            <Link to='/'>
              Popular Movies
              </Link>
          </Menu.Item>

          <Menu.Item key="2" onClick={()=>{topRated()}}  icon={<DesktopOutlined />}>
            <Link to='/top_rated'>
              Top Rated
              </Link>
          </Menu.Item>


          <SubMenu key="sub1"  icon={<UserOutlined />} title="Select Category">
            
            {genresloading ? '': genres.map((genres)=>{
              const{ id,
                name

              }=genres
              return (
                <Menu.Item key={id}>{name}</Menu.Item>
              )
            })}
            
            
          </SubMenu>
        
          
        </Menu>
      </Sider>
    </>
  )
}

export default MSider
