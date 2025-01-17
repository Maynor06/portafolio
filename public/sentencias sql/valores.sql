
-- Insertar datos en la tabla users
INSERT INTO users (username, email, password) VALUES 
('user1', 'user1@example.com', 'password123'),
('user2', 'user2@example.com', 'password123'),
('user3', 'user3@example.com', 'password123'),
('user4', 'user4@example.com', 'password123'),
('user5', 'user5@example.com', 'password123');

-- Insertar datos en la tabla category
INSERT INTO category (category_name) VALUES 
('Technology'),
('Sports'),
('Health'),
('Business'),
('Entertainment');

-- Insertar datos en la tabla news
INSERT INTO news (title, url_img, content, user_id, date, category_id) VALUES 
('Tech News 1', 'https://example.com/tech1.jpg', 'Content for Tech News 1', 1, NOW(), 1),
('Sports News 1', 'https://example.com/sports1.jpg', 'Content for Sports News 1', 2, NOW(), 2),
('Health News 1', 'https://example.com/health1.jpg', 'Content for Health News 1', 3, NOW(), 3),
('Business News 1', 'https://example.com/business1.jpg', 'Content for Business News 1', 4, NOW(), 4),
('Entertainment News 1', 'https://example.com/entertainment1.jpg', 'Content for Entertainment News 1', 5, NOW(), 5);

-- Insertar datos en la tabla user_Favoritas
INSERT INTO user_Favoritas (user_id, news_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

select * from users;

