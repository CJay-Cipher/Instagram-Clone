import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../src/App.css";
import Navbar from "../components/navbar/Navbar";
import TopBody from "../components/topBody/TopBody";
import Circle from "../components/topBody/Circle";
import MainBody from "../components/mainBody/MainBody";

function Profile() {
  const { username } = useParams(); // Get the username from the URL

  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${username}&url_embed_safe=true`;
  const highlightUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/highlights?username_or_id_or_url=${username}&url_embed_safe=true`;
  const postUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${username}&url_embed_safe=true`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "81d0958a10msh17f592984739deap1b9eb5jsnc231158fcaa4",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  const [result, setResult] = useState({});
  const [HightlighResult, setHighlightResult] = useState({});
  const [postResult, setPostResult] = useState({});
  const [highlightsPicUrls, setHighlightsPicUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const response2 = await fetch(highlightUrl, options);
        const response3 = await fetch(postUrl, options);
        const resultData = await response.json();
        const highlightData = await response2.json();
        const postData = await response3.json();

        setResult(resultData);
        setHighlightResult(highlightData);
        setPostResult(postData);

        const tempHighlightsPicUrls = [];
        for (let highlightId of highlightData.data.items) {
          const id = highlightId.id.split(":")[1];
          const highlightsIdUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info?highlight_id=${id}&url_embed_safe=true`;
          const tempResponse = await fetch(highlightsIdUrl, options);
          const highlightsPicResult = await tempResponse.json();
          tempHighlightsPicUrls.push(highlightsPicResult.data.additional_data.cover_media.cropped_image_version.url);
        }
        setHighlightsPicUrls(tempHighlightsPicUrls);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]); // Dependency array includes username

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loader-subtext-one">Fetching Data...</p>
        <p className="loader-subtext-two">
          This API is provided free of charge.
          <br />
          Please allow some time for data to load.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar userResult={result} />
      <TopBody userResult={result} />
      <Circle highlights={HightlighResult} highlightsPicsUrl={highlightsPicUrls} />
      <MainBody userPost={postResult} />
    </>
  );
}

export default Profile;
