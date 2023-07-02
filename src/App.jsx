import { useState } from 'react';
import { CardItem } from './components/CardItem';
import { menuItems } from './db/menuItems';
export const App = () => {
	const [cartShopping, setCartShopping] = useState([]);
	return (
		<div className='container mx-auto px-3'>
			<header>
				<div className='logo '></div>
				<nav>
					<ul>
						<li>Home</li>
						<li>Como funciona</li>
						<li>Carrito</li>
						<li>Generar QR</li>
					</ul>
				</nav>
			</header>
			<h1 className='text-xl font-bold'>Aplicación para clientes</h1>
			<section className='min-h-screen grid content-center'>
				<h2 className='text-5xl font-bold'>
					Bienvenido al menu digital de Bar RRT
				</h2>
			</section>
			<section className='min-h-screen grid content-center'>
				<h2 className='text-3xl font-bold'>Instrucciones para el uso</h2>
				<p>
					Aca se explicaría como funciona el sistema y como debe operar el
					cliente en simples pasos
				</p>
			</section>
			<section>
				<h2 className='text-3xl font-bold'>Buscador, categorias, ofertas</h2>
			</section>
			<section>
				<h2 className='text-3xl font-bold'>Carta</h2>
				<div>
					<h3 className='text-2xl'>Bebidas</h3>
					{menuItems &&
						menuItems.map((item) => (
							<CardItem
								key={item.id}
								item={item}
								setCartShopping={setCartShopping}
							/>
						))}
				</div>
			</section>
		</div>
	);
};

export default App;
