import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import VideoCard2 from "./VideoCard2";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const [SearchResult, setSearchResult] = useState(null);
  const { query } = useParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  let ml = "ml-4";

  if (isMenuOpen) {
    ml = "ml-52";
  }

  useEffect(() => {
    getSearchVideoResults();
  }, []);

  const getSearchVideoResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + query);
    const json = await data.json();

    console.log(json);
    setSearchResult(json.items);
  };

  if (!SearchResult) {
    return null;
  }
  return (
    <div className={`mt-20 ${ml}`}>
      {SearchResult.map((result) => {
        return (
          <a key={result.id.videoId} href={"/watch?v=" + result.id.videoId}>
            <VideoCard2 info={result} />
          </a>
        );
      })}
    </div>
  );
};

export default SearchResult;
