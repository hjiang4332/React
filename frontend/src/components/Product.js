import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
	const { product } = props
	return (
		<div key={product._id} className='card'>
			<Link to={`/product/${product._id}`}>
				<img
					className='medium'
					src={product.image}
					alt={product.name}
				/>
			</Link>

			<div className='card-body'>
				<Link to={`/product/${product._id}`}>
					<h2>{product.name}</h2>
				</Link>

				<div className='quality'>Quality: {product.quality}</div>
				<div className='price'>Price: ${product.price}</div>
				<div className='wsPrice'>
					Wholesale Price: ${product.wsPrice}
				</div>
			</div>
		</div>
	)
}
