import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartOperations } from '../hooks/useCartOperations';
import { CircleButton } from '../elements/CircleButton';

export const CardItem = (props) => {
	const { item, cartShopping, setCartShopping } = props;
	const { name, price, description, category, image } = item;
	const {
		handleClickAddToCart,
		handleClickDecrementItems,
		handleClickIncrementItems,
	} = useCartOperations(setCartShopping);
	const foundedItem = cartShopping.find((cartItem) => cartItem.id === item.id);

	return (
		<div className='w-full grid grid-cols-6 mb-3 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
			<div className='col-span-2'>
				<img
					className='h-full object-cover object-center'
					src={image}
					alt={`Imagen de ${name} en una carta digital`}
				/>
			</div>

			<div className='p-4 col-span-4 grid'>
				<div className='col-span-4 mb-6'>
					<p className='text-sm text-slate-400'>{category}</p>
					<h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
						{name}
					</h5>
					<p className=' text-sm text-slate-300'>{description}</p>
				</div>

				<div className='grid grid-cols-6 col-span-4 max-h-12 my-auto'>
					<span className='my-auto col-span-3 text-2xl font-bold text-gray-900 dark:text-white'>
						{`$ ${price}`}
					</span>
					{foundedItem ? (
						<div className='col-span-3 place-content-end flex items-center space-x-3'>
							<div className='flex justify-center items-center'>
								<CircleButton
									onClick={() => handleClickDecrementItems(foundedItem.id)}>
									<FontAwesomeIcon icon={faMinus} size='lg' />
								</CircleButton>
							</div>

							<span className='content-center grid text-center text-base px-3 font-bold text-slate-200'>
								{foundedItem ? foundedItem.itemCount : 'nada'}
							</span>

							<div className='flex justify-center items-center'>
								<CircleButton
									onClick={() => handleClickIncrementItems(foundedItem.id)}>
									<FontAwesomeIcon icon={faPlus} size='lg' />
								</CircleButton>
							</div>
						</div>
					) : (
						<div className='col-span-3 place-content-end flex'>
							<button
								onClick={() => handleClickAddToCart(item)}
								className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Agregar al pedido
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
