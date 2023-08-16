import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../action';
import Spin from './Spin';
import Details from './Details';
import { currPage } from '../action';

const Home = (props) => {
    const [page, setPage] =useState(1);
    const result = useSelector((state) => state.searchFilter);
    //const text=useSelector((state)=> state.searchNow);
    let dispatch = useDispatch();
    const [list, setList] = useState([]);   
    const [totpage, SetTotpage] = useState(0);
    const [detail, setDetail] = useState(false);
    
    

    useEffect(() => {
        const fetchdata = async () => {
            props.setLoading(true)
            try {

                let api_key = "c4d65bd09eb48ec4e0ff20d5d3f92766";
                let url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`; 
                let acc_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQ2NWJkMDllYjQ4ZWM0ZTBmZjIwZDVkM2Y5Mjc2NiIsInN1YiI6IjY0ZGE1MTA4YmYzMWYyMDFjYjZiYTdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vEkoOADwfNLZclJZp0MyZGU_3_49Tsm5eB8pjDvrfi8"; // Replace with your actual access token

                let headers = {
                    'Authorization': `Bearer ${acc_token}`,
                    'accept': 'application/json'
                };
                let response = await fetch(url, { method: "GET", headers: headers });
                let data = await response.json();
               
                 if(result.results?.length>0)
                 {
                    dispatch(currPage(page));
                    SetTotpage(result.total_pages);
                    if(result.page === page )
                    {
                    result.results.sort((a, b) => {
                        let date1 = new Date(a.release_date);
                        let date2 = new Date(b.release_date);
                        return date1 - date2;
                    });
                    setList(result.results);
                    props.setLoading(false);
                 }
                }
                else
                {     
                    dispatch(currPage(page));
                    SetTotpage(data.total_pages)
                    dispatch(search(data.results));            
                    data.results.sort((a, b) => {
                        let date1 = new Date(a.release_date);
                        let date2 = new Date(b.release_date);
                        return date1 - date2;
                    });
                    setList(data.results);
                    props.setLoading(false);
                }
                

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchdata();
    }, [page,result]);

    const paginate = (val) => {
        setPage(val);
        props.setLoading(true);
    }


    return (
        <>
            {detail && <Details setDetail={setDetail} />}
            {props.loading && <Spin />}
            {!props.loading && <div> <div className='row m-4'>
                {
                    list.map((ele, id) => {
                        return <Cards key={id} img={ele.poster_path} title={ele.title}
                            desc={ele.overview} rating={ele.vote_average} id={ele.id} setDetail={setDetail} />
                    })
                }
            </div>

                <div className='footer' style={{ textAlign: 'center' }}>
                    <Pagination tpage={totpage} currpage={page} setPage={setPage} paginate={paginate} />
                </div>
            </div>}
        </>



    )
}

export default Home