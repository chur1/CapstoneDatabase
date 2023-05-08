import { ProductStyle } from "../styles/ProductStyle"
import Link from "next/link";

export default function Products({product}){

    const { slug } = product.attributes;

    return(
        <ProductStyle>
            <div>
                <div>
                    <img src={product.attributes.image.data.attributes.formats.small.url} alt="" />
                </div>
                <h2>{product.attributes.title}</h2>
                <h3>{product.attributes.description}</h3>
                <Link href={`product/${slug}`}>
                    <h3 class="hover-underline-animation">Explore More</h3>
                </Link>
            </div>
        </ProductStyle>

    );
}