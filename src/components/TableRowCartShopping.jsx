import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartOperations } from '../hooks/useCartOperations';

export const TableRowCartShopping = (props) => {
	const { item, setCartShopping } = props;
	const { name, price, image, itemCount } = item;

	const { handleClickDecrementItems, handleClickIncrementItems } =
		useCartOperations(item, setCartShopping);

	return (
		<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
			<td className='w-32 p-4'>
				<img src={image} alt={`Imagen de ${name}`} />
			</td>
			<td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
				{name}
			</td>
			<td className='px-6 py-4'>
				<div className='flex items-center space-x-3'>
					<button
						onClick={handleClickDecrementItems}
						className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
						<span className='sr-only'>Quantity button</span>
						<FontAwesomeIcon icon={faMinus} size='xs' />
					</button>
					<div>
						<input
							value={itemCount}
							type='number'
							id='first_product'
							className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='1'
							required
						/>
					</div>
					<button
						onClick={handleClickIncrementItems}
						className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
						<span className='sr-only'>Quantity button</span>
						<FontAwesomeIcon icon={faAdd} size='xs' />
					</button>
				</div>
			</td>
			<td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
				{`$${price * itemCount}`}
			</td>
			<td className='px-6 py-4'>
				<a
					href='#'
					className='font-medium text-red-600 dark:text-red-500 hover:underline'>
					Remove
				</a>
			</td>
		</tr>
	);
};
