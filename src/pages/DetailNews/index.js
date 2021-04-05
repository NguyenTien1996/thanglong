import React, { useEffect, useState } from "react";
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../../components/Banner';
import axios from 'axios'
import DetailNews from "./components/DetailNews";

export default function ProductDetail(props) {

    const [news, setNews] = useState();

    useEffect(() => {
        axios.get(`https://606a7c88e1c2a100175459e4.mockapi.io/api/news/` + props.match.params.id)
            .then(res => {
                console.log(props.match.params.id)
                setNews(res.data)
            }
        )
    },[props.match.params.id])
    
    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return (
        <>
            <LayoutComponent>
                <BannerComponent/>
                <DetailNews news={news}/>
            </LayoutComponent>
        </>
    )
}