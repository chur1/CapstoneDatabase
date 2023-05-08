import { useQuery } from "urql"
import { useRouter } from "next/router";
import { GET_PRODUCT_QUERY } from "../../lib/query"
import { DetailsStyle, ProductInfo } from "../../styles/ProductDetails";
import Link from 'next/link'
import { useFetchUser } from '../../lib/authContext';
import Layout from '../../components/Layout';

export default function ProductDetails() {
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
        </Layout>
    
    )
}