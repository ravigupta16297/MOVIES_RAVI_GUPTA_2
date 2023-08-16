import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBox,searchText,emptyText} from '../action';

const Navbar = () => {
  let debounceTimer;
  let [searchVal, setSearchval] = useState('');
  let dispatch = useDispatch();
  let result = useSelector((state) => state.searchData);
  let curr = useSelector((state) => state.page);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchval(e.target.value);
  }
  useEffect(() => {
    const searchFilter = async () => {
      try {
        let api_key = "c4d65bd09eb48ec4e0ff20d5d3f92766";
        let url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=${curr}`
        let acc_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQ2NWJkMDllYjQ4ZWM0ZTBmZjIwZDVkM2Y5Mjc2NiIsInN1YiI6IjY0ZGE1MTA4YmYzMWYyMDFjYjZiYTdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vEkoOADwfNLZclJZp0MyZGU_3_49Tsm5eB8pjDvrfi8";

        let headers = {
          'Authorization': `Bearer ${acc_token}`,
          'accept': 'application/json'
        };
        let res = await fetch(url, { method: 'GET', headers: headers });
        let data = await res.json();
      
        dispatch(searchBox(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (searchVal.length !== 0) {
      const debouncedSearch = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(searchFilter, 700);
      };
      debouncedSearch();
      return () => clearTimeout(debounceTimer);
    }
    else {
      dispatch(searchBox([]))
      dispatch(emptyText(''))
    }

  }, [searchVal, curr])

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: 'white' }}>Movies-Mania</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter Text To Search " aria-label="Search" onChange={handleChange} />

            </form>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar