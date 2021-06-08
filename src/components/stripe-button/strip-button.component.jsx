import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Izu4eJVhCEt1xD0mYBwNZ2iEvSUvTIwesE3TU7R8Pj7t1wa8cfP2hvw5i7d30LskVr0ZuRCkZdy6zcHOaf6t8N900yP1yFRyD';
	const onToken = (token) => {
		console.log(token);
		alert('PayMeNt suCCessFUL!!!');
	};
	return (
		<StripeCheckout
			label='Pay Now!'
			name='CRWN Clothing, LLC'
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
