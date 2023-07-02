import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableRowCartShopping } from './TableRowCartShopping';

export const CartShoppingTable = (props) => {
	const { cartShopping, setCartShopping } = props;
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							<span className='sr-only'>Image</span>
						</th>
						<th scope='col' className='px-6 py-3'>
							Product
						</th>
						<th scope='col' className='px-6 py-3'>
							Qty
						</th>
						<th scope='col' className='px-6 py-3'>
							Price
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{cartShopping.map((item) => (
						<TableRowCartShopping
							key={item.id}
							item={item}
							setCartShopping={setCartShopping}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
