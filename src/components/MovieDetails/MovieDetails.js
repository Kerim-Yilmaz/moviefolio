import React,{useContext} from 'react'
import {Image,Row,Col,Progress,Button,Card,Spin} from 'antd';
import {Link,useParams} from 'react-router-dom';
import { MovieData } from '../../contex/MovieData';

const MovieDetails = () => {
  const {id} =useParams()
  const { isLoading,moviedetails} = useContext(MovieData);


  return (
    <>
    {isLoading ? <Spin size="large" /> :
    <Row gutter={[16, 16]}>
    <Col span={1} ><Link to='/'><Button>Back</Button></Link></Col>
    <Col span={14} ><Image
      width={250}
      height={350}
      preview={false}
      src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
    />
        <Progress 
        percent={moviedetails.popularity/50} strokeWeight='30px' strokeWidth='30px'/>Popularity
    </Col>
    
    <Col span={9} >

      <Card title={moviedetails.original_title}  extra={<a href={`https://www.themoviedb.org/movie/${id}`} >More</a>} style={{ width: 350 ,height:400 }}>
      <p>Overview:{moviedetails.overview}</p>
      
      <p>release_date: {moviedetails.release_date}</p>
      
     
    </Card>
      
    </Col>
    

      
    </Row>
}
    </>
  )
}

export default MovieDetails;
