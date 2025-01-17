
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	user_last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE category (
	id SERIAL PRIMARY KEY, 
	name_category VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name_product VARCHAR(30) NOT NULL, 
	description VARCHAR(100) NOT NULL, 
	id_categoria INTEGER REFERENCES category(id) ON DELETE SET NULL, 
	price DECIMAL NOT NULL,
	image_product VARCHAR NOT NULL
);

create table orders (
	id SERIAL PRIMARY KEY, 
	id_products INTEGER REFERENCES products(id) ON DELETE SET NULL,
	address VARCHAR(50) NOT NULL, 
	phone_number VARCHAR(30) NOT NULL, 
	referencias VARCHAR(150) NOT NULL, 
	created_at TIMESTAMPTZ, 
	status VARCHAR(20) DEFAULT 'pendiente'
);

CREATE TABLE order_products (
	order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
	product_id INTEGER REFERENCES products(id) ON DELETE CASCADE, 
	quantity INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY(order_id, product_id)
);

CREATE TABLE whatsapp_messages (
	id SERIAL PRIMARY KEY, 
	order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE, 
	created_at TIMESTAMPTZ NOT NULL
);
