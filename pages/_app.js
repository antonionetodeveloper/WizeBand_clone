import { CartProvider } from "../contexts/Cart"
import "../styles/.GlobalStyle.css"

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	)
}

export default MyApp
