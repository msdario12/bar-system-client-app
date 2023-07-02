export const useCartOperations = (setCartShopping) => {
	const addItem = (item) => {
		const localCart = JSON.parse(localStorage.getItem('cart'));
		let cart = [{ ...item, itemCount: 1 }];

		if (localCart) {
			const foundedIndexItem = localCart.findIndex(
				(itemCart) => itemCart.id === item.id
			);
			if (foundedIndexItem !== -1) {
				return;
			}
			cart = [...localCart, { ...item, itemCount: 1 }];
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartShopping(cart);
	};
	const updateItem = (itemID, amount) => {
		const localCart = JSON.parse(localStorage.getItem('cart'));

		let cart = [...localCart];
		let foundedItem = cart.find((item) => item.id === itemID);
		foundedItem.itemCount += amount;
		if (foundedItem.itemCount === 0) {
			cart = cart.filter((itemCart) => itemCart.id !== itemID);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartShopping(cart);
	};
	const setNumberItems = (itemID, amount) => {
		const localCart = JSON.parse(localStorage.getItem('cart'));

		let cart = [...localCart];
		let foundedItem = cart.find((item) => item.id === itemID);
		foundedItem.itemCount = amount;
		if (foundedItem.itemCount === 0) {
			cart = cart.filter((itemCart) => itemCart.id !== itemID);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartShopping(cart);
	};
	const removeItem = (itemID) => {
		const localCart = JSON.parse(localStorage.getItem('cart'));

		let cart = [...localCart];
		cart = cart.filter((itemCart) => itemCart.id !== itemID);
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartShopping(cart);
	};

	const handleClickAddToCart = (item) => {
		addItem(item);
	};
	const handleClickIncrementItems = (itemID) => {
		updateItem(itemID, 1);
	};
	const handleClickDecrementItems = (itemID) => {
		updateItem(itemID, -1);
	};
	return {
		handleClickAddToCart,
		handleClickDecrementItems,
		handleClickIncrementItems,
		removeItem,
		setNumberItems,
	};
};
