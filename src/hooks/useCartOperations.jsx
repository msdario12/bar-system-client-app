import { useState } from 'react';

export const useCartOperations = (item, setCartShopping) => {
	const [itemCount, setItemCount] = useState(0);
	const handleClickAddToCart = () => {
		setItemCount(1);
		setCartShopping((prev) => [...prev, { ...item, itemCount: 1 }]);
	};
	const handleClickIncrementItems = () => {
		setItemCount((prev) => prev + 1);
		setCartShopping((prev) =>
			prev.filter((cardItem) => cardItem.id !== item.id)
		);
		setCartShopping((prev) => [...prev, { ...item, itemCount: itemCount + 1 }]);
	};
	const handleClickDecrementItems = () => {
		setItemCount((prev) => prev - 1);
		setCartShopping((prev) =>
			prev.filter((cardItem) => cardItem.id !== item.id)
		);
		setCartShopping((prev) => [...prev, { ...item, itemCount: itemCount - 1 }]);
		if (itemCount === 1) {
			setCartShopping((prev) =>
				prev.filter((cardItem) => cardItem.id !== item.id)
			);
		}
	};
	return {
		handleClickAddToCart,
		handleClickDecrementItems,
		handleClickIncrementItems,
		itemCount,
	};
};
