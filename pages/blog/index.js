import { Grid } from "@mui/material";
import React, { useState } from "react";
import ContentContainer from "../../components/contentContainer";
import Search from "../../components/search";
import PageHeading from "../../components/pageHeading";
import BlogCardList from "../../components/blogCardList";
import DataSourceApi from "../../lib/DataSourceApi";

export default function BlogPosts({ postCards }) {
  let [searchResult, setSearchResult] = useState(postCards);

  return (
    <div className="container">
      <ContentContainer>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <PageHeading heading="Find what is interesting for you" xs={11} />
          <Grid item xs={11}>
            <Search
              searchType="blog"
              setSearchResult={setSearchResult}
              searchPool={postCards}
            />
          </Grid>
          <Grid item xs={11}>
            <BlogCardList searchResult={searchResult} />
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
}

export async function getStaticProps() {
  const postCards = await DataSourceApi.getPosts();

  return {
    props: {
      postCards,
    },
  };
}
