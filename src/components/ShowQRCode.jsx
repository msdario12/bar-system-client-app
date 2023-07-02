import QRCode from 'react-qr-code';

export const ShowQRCode = ({ cartShopping }) => {
	const msg = JSON.stringify(cartShopping);
	return (
		<div
			style={{
				height: 'auto',
				margin: '0 auto',
				width: '100%',
			}}>
			<QRCode
				title={'Prueba'}
				size={1024}
				value={msg}
				viewBox={`0 0 256 256`}
				style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
			/>
		</div>
	);
};
