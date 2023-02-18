
-- USER TABLE 
  DROP TABLE IF EXISTS users;
  
  CREATE TABLE IF NOT EXISTS users (
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  
  INSERT INTO users (id, name, email, created_at) VALUES
  (1, 'Test', 'test@g.co', '2019-02-28 13:20:20'),
  (2, 'john', 'john@g.co', '2019-02-28 13:20:20'),
  (3, 'tutsmake', 'tuts@g.co', '2019-02-28 13:20:20'),
  (4, 'tut', 'tut@g.co', '2019-02-28 13:20:20'),
  (5, 'mhd', 'mhd@g.co', '2019-02-28 13:20:20');