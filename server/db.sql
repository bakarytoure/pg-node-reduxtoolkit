CREATE TABLE income(
id SERIAL PRIMARY KEY, 
price INT,
type VARCHAR(10),
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
equipment_id INT NOT NULL REFERENCES equipment(id) ON DELETE CASCADE
);

CREATE TABLE expense(
id SERIAL PRIMARY KEY, 
price INT,
type VARCHAR(10),
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
equipment_id INT NOT NULL REFERENCES equipment(id) ON DELETE CASCADE
);

CREATE TABLE equipment(
id SERIAL PRIMARY KEY,
name VARCHAR(20),
);