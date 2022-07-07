import React, { useCallback, useEffect, useState } from "react";
import CRUDRequest from "../API/index";
import SearchAppBar from "../Components/Hero/hero";
import { FlexDiv } from "./Home.styles";

const Home = () => {
  const [gif, setGif] = useState([]);

  const [search, setSearch] = useState("");
  const fetchData = useCallback(async () => {
    const response = await CRUDRequest.get(
      `gifs/search?api_key=K31dRjLwOjY4j6huR9laaNDMJxXHfTE1&q=${
        search || "Tom"
      }`
    );
    setGif([...response.data.data]);
  });
  useEffect(() => {
    setTimeout(function () {
      fetchData();
    }, 3000);
  }, [search]);
  const onChangHandler = (e) => {
    setSearch(e);
  };

  return (
    <div>
      <SearchAppBar
        handle_Change={onChangHandler}
        value={search}
        setValue={setSearch}
      />
      {gif.length > 0 ? (
        <FlexDiv>
          {gif.map((ele) => {
            return (
              <img
                style={{ margin: "1rem 0", maxHeight: "10rem" }}
                src={ele.images.downsized.url}
              />
            );
          })}
        </FlexDiv>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
