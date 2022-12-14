import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "at"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch function with Next.js 13 caching...
  const res = await fetch(
    "https://richtonpark.stepzen.net/api/news-graphql/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("Loading new data from api for category >>>", category?category:"", keywords?keywords:"");

  const newsResponse = await res.json();
  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return news
  return news;
};

export default fetchNews;

// Example Imports:

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=d71e87cb62801e7ee843239576f013cf&sources=business,sports"
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=d71e87cb62801e7ee843239576f013cf&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
