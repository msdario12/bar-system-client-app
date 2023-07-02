import { TableRowCartShopping } from './TableRowCartShopping';

export const CartShoppingTable = (props) => {
	const { cartShopping, setCartShopping } = props;

	const totalCart = cartShopping.reduce(
		(acc, curr) => acc + curr.price * curr.itemCount,
		0
	);

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-5 dark:bg-gray-700'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='text-center my-auto px-6 py-3'>
							Product y QTY
						</th>
						<th scope='col' className='text-center my-auto px-6 py-3'>
							Price
						</th>
						<th scope='col' className='text-center my-auto px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{cartShopping.length > 0 &&
						cartShopping.map((item) => (
							<TableRowCartShopping
								key={item.id}
								item={item}
								setCartShopping={setCartShopping}
							/>
						))}
				</tbody>
				<tfoot>
					<tr className='font-semibold text-gray-900 dark:text-white'>
						<th
							scope='row'
							colSpan={1}
							className='text-center my-auto px-6 py-3 text-base'>
							Total
						</th>

						<td className='text-center my-auto px-6 py-3'>{'$' + totalCart}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};
