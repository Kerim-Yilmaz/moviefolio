import React,{useContext} from 'react'
import { MovieData } from '../../contex/MovieData';
import {Link} from 'react-router-dom'
import { Row, Col, Divider, Card ,Pagination,Spin,BackTop} from 'antd';
const { Meta } = Card;
const ListCard = () => {

    const { moviedb,isloading,page,movieDetails } = useContext(MovieData);
    const moviedbs = moviedb['results']
   

  
    return (
       <>
       
       <Divider orientation="middle"></Divider>
    {isloading ? <Spin size="large" />:
    <Row gutter={[16, 24]}>
      
      
    {moviedbs.map((moviedb) => {
            const {
                id,
                poster_path,
                release_date,
                original_title

            } = moviedb
            return (
             <Link to={`/movies/${id}`}>
             <Col className="gutter-row" span={6}  key={id}>
              <div >
              <Card key={id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={release_date} onClick={()=>{movieDetails(id)}} src={`https://image.tmdb.org/t/p/w500${poster_path}`} />}
                  >
                    <Meta  title={original_title} description={release_date} />
                  </Card>
              </div>
            </Col>
            </Link>
            )
          })}

         
      
    </Row>
      
      }
   
        
     { isloading ? '': <Pagination simple current={moviedb.page} defaultCurrent={1} onChange={page} total={moviedb.total_pages} />
        
        }    
      <BackTop/>
       </>
      
    )
}

export default ListCard
