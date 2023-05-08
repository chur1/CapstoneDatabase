import { useQuery } from "urql"
import { useRouter } from "next/router";
import { GET_PRODUCT_QUERY } from "../../../lib/query"
import React, { useEffect, useRef } from 'react';

export default function App() {

	const { query } = useRouter();
	const [results] = useQuery({
		query: GET_PRODUCT_QUERY,
		variables: { slug: query.slug },
	});

	const { data } = results;
	const{ slug } = data.products.data[0].attributes; 


	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		let PSPDFKit;

		(async function () {
			PSPDFKit = await import('pspdfkit');

			if (PSPDFKit) {
				PSPDFKit.unload(container);
			}

			await PSPDFKit.load({
				container,
				document: `/assets/${slug}.pdf`,
				baseUrl: `${window.location.protocol}//${window.location.host}/`,
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

	return <div ref={containerRef} style={{ height: '100vh' }} />;
}