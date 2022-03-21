import { createContext } from "react"

export const CartContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	const CartList = []
	return (
		<CartContext.Provider value={{ CartList }}>
			{children}
		</CartContext.Provider>
	)
}
