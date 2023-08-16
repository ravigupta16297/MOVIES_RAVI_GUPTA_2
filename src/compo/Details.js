import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailempty } from '../action';
import { StarFill } from 'bootstrap-icons-react';
const Details = (props) => {
    const val = useSelector((state) => state.detail);
    const [list, setList] = useState(null);

    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(() => {
        const fetchDetail = async () => {
            const api_key = "c4d65bd09eb48ec4e0ff20d5d3f92766";
            const url = `https://api.themoviedb.org/3/movie/${val}?api_key=${api_key}`;
            const acc_token = "your_access_token_here";

            const headers = {
                'Authorization': `Bearer ${acc_token}`,
                'accept': 'application/json'
            };

            try {
                const response = await fetch(url, { method: "GET", headers });
                const data = await response.json();
                setList(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        if (val !== 0) {
            fetchDetail();
        }
    }, [val]);

    useEffect(() => {
        if (val !== 0 && list) {
            ref.current.click();
        }
    }, [val, list]);

    const handleClose = () => {
        dispatch(detailempty(0));
        props.setDetail(false);
    };

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" style={{ display: 'none' }} ref={ref}>
                Launch
            </button>

            {list && (
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 style={{ textAlign: 'center' }}>{list?.title}-{list.vote_average === 0 ?5.5:list.vote_average}
                                    <span><StarFill className='mb-1' /></span></h4>
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                            </div>
                            <div className="modal-body">
                                <img src={`https://image.tmdb.org/t/p/w200${list?.poster_path}`} alt='img'
                                    style={{ width: '60%', height: '60%', marginLeft: '20%' }} />

                                <p className='mt-2' style={{ fontSize: '13px' }}>{list?.overview}</p>

                                <p className='mx-4'><strong>Duration:{list?.runtime ? list.runtime : '180'}min</strong></p>
                                <p className='mx-4'><strong>Release-Date: {list.release_date}</strong></p>

                            </div>
                            <div className="modal-footer">


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Details;
