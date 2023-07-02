import { faAdd, faMinus, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartOperations } from '../hooks/useCartOperations';
import { CircleButton } from '../elements/CircleButton';

export const TableRowCartShopping = (props) => {
	const { item, setCartShopping } = props;
	const {
		handleClickDecrementItems,
		handleClickIncrementItems,
		removeItem,
		setNumberItems,
	} = useCartOperations(setCartShopping);
	const { name, price, image, itemCount } = item;

	const handleInputChange = (e, itemID) => {
		const reg = new RegExp('^[0-9]+$');
		const num = Number(e.target.value);
		if (!reg.test(e.target.value)) {
			console.log('No es numero');
			return;
		}
		if (num >= 100) {
			return;
		}
		setNumberItems(itemID, num);
	};

	return (
		<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
			<td className='px-6 py-4 font-semibold text-gray-900 dark:text-white flex items-center space-y-2 flex-col'>
				<img className='w-20' src={image} alt={`Imagen de ${name}`} />
				<span>{name}</span>
				<div className='flex items-center space-x-3'>
					<CircleButton onClick={() => handleClickDecrementItems(item.id)}>
						<FontAwesomeIcon icon={faMinus} size='xs' />
					</CircleButton>
					<div>
						<input
							value={itemCount}
							onChange={(e) => handleInputChange(e, item.id)}
							type='text'
							inputMode='numeric'
							id='first_product'
							className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center'
						/>
					</div>
					<CircleButton onClick={() => handleClickIncrementItems(item.id)}>
						<FontAwesomeIcon icon={faAdd} size='xs' />
					</CircleButton>
				</div>
			</td>

			<td className='px-6 py-4 font-semibold text-center my-auto  text-gray-900 dark:text-white'>
				<span>{`$${price * itemCount}`}</span>
			</td>

			<td className='px-6 py-4 text-center my-auto '>
				<CircleButton
					onClick={() => removeItem(item.id)}
					className={' text-red-600 dark:text-red-500'}>
					<FontAwesomeIcon icon={faRemove} size='lg' />
				</CircleButton>
			</td>
		</tr>
	);
};
