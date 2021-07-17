import bcrypt from 'bcryptjs'
const data = {
	users: [
		{
			name: 'Howard',
			email: 'admin@example.com',
			password: bcrypt.hashSync('1234', 8),
			type: 'Regular',
			numOrders: 0,
			totalSpent: 0,
			isAdmin: true,
		},
		{
			name: 'Nicolas',
			email: 'user@example.com',
			password: bcrypt.hashSync('1234', 8),
			type: 'Regular',
			numOrders: 0,
			totalSpent: 0,
			isAdmin: false,
		},
	],
	products: [
		{
			itemNumber: 1,
			name: 'Heart Ring',
			quality: 'Gold Filled',
			category: 'Ring',
			image: '/images/p1.jpg',
			price: 5,
			wsPrice: 2.5,
			wzPrice: 2,
			countInStock: 100,
			colors: 'silver, gold',
			sizes: '6, 7, 8, 9, 10',
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'silver', size: 6 },
				{ countInStock: 20, color: 'silver', size: 7 },
				{ countInStock: 30, color: 'silver', size: 8 },
				{ countInStock: 40, color: 'silver', size: 9 },
				{ countInStock: 50, color: 'silver', size: 10 },
				{ countInStock: 10, color: 'gold', size: 6 },
				{ countInStock: 20, color: 'gold', size: 7 },
				{ countInStock: 30, color: 'gold', size: 8 },
				{ countInStock: 40, color: 'gold', size: 9 },
				{ countInStock: 50, color: 'gold', size: 10 },
			],
		},
		{
			itemNumber: 2,
			name: 'Circle Ring',
			quality: 'Gold Filled',
			category: 'Ring',
			image: '/images/p2.jpg',
			price: 5,
			wsPrice: 2.5,
			wzPrice: 2,
			countInStock: 100,
			colors: 'silver, gold',
			sizes: '6, 7, 8, 9, 10',
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'silver', size: 6 },
				{ countInStock: 20, color: 'silver', size: 7 },
				{ countInStock: 30, color: 'silver', size: 8 },
				{ countInStock: 40, color: 'silver', size: 9 },
				{ countInStock: 50, color: 'silver', size: 10 },
				{ countInStock: 10, color: 'gold', size: 6 },
				{ countInStock: 20, color: 'gold', size: 7 },
				{ countInStock: 30, color: 'gold', size: 8 },
				{ countInStock: 40, color: 'gold', size: 9 },
				{ countInStock: 50, color: 'gold', size: 10 },
			],
		},
		{
			itemNumber: 3,
			name: 'Crystal Ring',
			quality: 'Gold Filled',
			category: 'Ring',
			image: '/images/p3.jpg',
			price: 5,
			wsPrice: 2.5,
			wzPrice: 2,
			countInStock: 100,
			colors: 'silver, gold',
			sizes: '6, 7, 8, 9, 10',
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'silver', size: 6 },
				{ countInStock: 20, color: 'silver', size: 7 },
				{ countInStock: 30, color: 'silver', size: 8 },
				{ countInStock: 40, color: 'silver', size: 9 },
				{ countInStock: 50, color: 'silver', size: 10 },
				{ countInStock: 10, color: 'gold', size: 6 },
				{ countInStock: 20, color: 'gold', size: 7 },
				{ countInStock: 30, color: 'gold', size: 8 },
				{ countInStock: 40, color: 'gold', size: 9 },
				{ countInStock: 50, color: 'gold', size: 10 },
			],
		},
		{
			itemNumber: 4,
			name: 'Gold Filled Tennis Chain',
			quality: 'Gold Filled',
			category: 'Necklace',
			image: '/images/p4.jpg',
			price: 10,
			wsPrice: 6,
			wzPrice: 6,
			countInStock: 100,
			colors: 'silver, gold',
			description: 'high quality product',
			customizations: [
				{ countInStock: 50, color: 'silver', size: 0 },
				{ countInStock: 50, color: 'gold', size: 0 },
			],
		},
		{
			itemNumber: 6,
			name: 'Eye anklet',
			quality: 'Gold Filled',
			category: 'Anklet',
			image: '/images/p6.jpg',
			price: 5,
			wsPrice: 2.5,
			wzPrice: 2,
			countInStock: 100,
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'red', size: 0 },
				{ countInStock: 20, color: 'blue', size: 0 },
				{ countInStock: 30, color: 'black', size: 0 },
				{ countInStock: 40, color: 'colorful', size: 0 },
				{ countInStock: 50, color: 'colorful2', size: 0 },
			],
		},
		{
			itemNumber: 7,
			name: 'Eye bracelet',
			quality: 'Gold Filled',
			category: 'Bracelet',
			image: '/images/p7.jpg',
			price: 5,
			wsPrice: 2.5,
			wzPrice: 2,
			countInStock: 100,
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'red', size: 0 },
				{ countInStock: 20, color: 'blue', size: 0 },
				{ countInStock: 30, color: 'black', size: 0 },
				{ countInStock: 40, color: 'colorful', size: 0 },
				{ countInStock: 50, color: 'colorful2', size: 0 },
			],
		},
		{
			itemNumber: 8,
			name: 'Eye chain',
			quality: 'Gold Filled',
			category: 'Necklace',
			image: '/images/p8.jpg',
			price: 10,
			wsPrice: 4,
			wzPrice: 4,
			countInStock: 100,
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'red', size: 0 },
				{ countInStock: 20, color: 'blue', size: 0 },
				{ countInStock: 30, color: 'black', size: 0 },
				{ countInStock: 40, color: 'colorful', size: 0 },
				{ countInStock: 50, color: 'colorful2', size: 0 },
			],
		},
		{
			itemNumber: 9,
			name: 'Rhinestone cuban chain',
			quality: 'Stainless Steel',
			category: 'Necklace',
			image: '/images/p9.jpg',
			price: 15,
			wsPrice: 10,
			wzPrice: 10,
			countInStock: 100,
			description: 'high quality product',
			customizations: [
				{ countInStock: 10, color: 'silver', size: 0 },
				{ countInStock: 20, color: 'gold', size: 0 },
			],
		},
		{
			itemNumber: 10,
			name: 'Dz fashion earrings',
			quality: 'Fashion',
			category: 'Earring',
			image: '/images/p10.jpg',
			price: 6,
			wsPrice: 6,
			wzPrice: 6,
			countInStock: 100,
			description: 'high quality product',
		},
		{
			itemNumber: 11,
			name: 'Dz Balloons',
			quality: 'Not applicable',
			category: 'Dz',
			image: '/images/p11.jpg',
			price: 6,
			wsPrice: 6,
			wzPrice: 6,
			countInStock: 100,
			description: 'high quality product',
		},
	],
}

export default data
