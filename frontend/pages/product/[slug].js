import { useQuery } from "urql"
import { useRouter } from "next/router";
import { GET_PRODUCT_QUERY } from "../../lib/query"
import { DetailsStyle, ProductInfo } from "../../styles/ProductDetails";
import Link from 'next/link'
import { useFetchUser } from '../../lib/authContext';
import Layout from '../../components/Layout';
import { useState } from "react";

export default function ProductDetails() {
    const [review, setReview] = useState({
        value: '',
      });
    const { user, loading } = useFetchUser();
    const { query } = useRouter();
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug },
    });


    
    const { data, fetching, error } = results;
    if(fetching) return <p>Loading...</p>
    if(error) return <p>Oh no...</p>

    const{ title, description, image, pdf, slug } = data.products.data[0].attributes; 
    
    
      const handleChange = (e) => {
        setReview({ value: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
              data: {
                review: review.value,
                reviewer: await getUserFromLocalCookie(),
                Film: film.id,
              },
            }),
          });
          router.reload();
          console.log(review);
        } catch (error) {
          console.error('error with request', error);
        }
      };

    return(
        <Layout user = {user}>
            <body>
                <DetailsStyle>
                    <img src={image.data.attributes.formats.medium.url} alt={title} />
                    <ProductInfo>
                        <div>
                            <h1>{title}</h1>  
                            <p>{description}</p>
                            <Link href={`${slug}/presentation`}>
                                <h3 class="hover-underline-animation">View Presentation</h3>
                            </Link>
                        </div>

                    </ProductInfo>
                </DetailsStyle>
            </body>


            {user && (
          <>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tighter mb-4 mt-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                Reviews
              </span>
              <form onSubmit={handleSubmit}>
                <textarea
                  className="w-full text-sm px-3 py-2 text-gray-700 border border-2 border-teal-400 rounded-lg focus:outline-none"
                  rows="4"
                  value={review.value}
                  onChange={handleChange}
                  placeholder="Add your review"
                ></textarea>
                <button
                  className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                  type="submit"
                >
                  Add Review
                </button>
              </form>
            </h2>
            <ul>
              {data.products.data.reviews === 0 && (
                <span>No reviews yet</span>
              )}
              {data.products.data.reviews &&
                data.products.data.reviews.map((review) => {
                  return (
                    <li key={review.id}>
                      <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                        {review.reviewer}
                      </span>{' '}
                      said &quot;{review.review}&quot;
                    </li>
                  );
                })}
            </ul>
          </>
        )}
        </Layout>
    
    )
}