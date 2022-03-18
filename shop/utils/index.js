export async function storeFront(query, variables = {}) {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token":
				process.env.NEXT_PUBLIC_ACCESS_TOKEN_STORE_FRONT,
		},
		body: JSON.stringify({ query, variables }),
	})
	return response.json()
}
