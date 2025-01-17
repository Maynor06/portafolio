
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL, 
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL, 	
)

CREATE TABLE category(
	id SERIAL PRIMARY KEY, 
	category_name VARCHAR(30) NOT NULL
)

create table news (
 id SERIAL PRIMARY KEY, 
 title VARCHAR(30) NOT NULL, 
 url_img VARCHAR(70),
 content VARCHAR(300) NOT NULL,
 user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
 date TIMESTAMP NOT NULL, 
 category_id INTEGER REFERENCES category(id)
)

CREATE TABLE user_Favoritas(
	user_id REFERENCES users(id) ON DELETE CASCADE,
	news_id REFERENCES news(id) ON DELETE CASCADE,
	PRIMARY KEY(user_id, news_id)
)


