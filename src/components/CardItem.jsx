export const CardItem = (props) => {
	const { item } = props;
	const { name, price, description, category, image } = item;

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
					<span className='my-auto col-span-3 text-3xl  font-bold text-gray-900 dark:text-white'>
						{`$ ${price}`}
					</span>

					<a
						href='#'
						className='text-white col-span-3 flex flex-col align-middle justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Añadir al carrito
					</a>
				</div>
			</div>
		</div>
	);
};
