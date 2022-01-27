USE sakila;

INSERT INTO `staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Rafael', 'Colombo', 1, 'teste.trybe@gmail.com', 2, 1, 'colombodev', 'devbackend');

INSERT INTO `staff`
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Amanda', 'Fernandes', 2, 'trybe.teste@gmail.com', 1, 1, 'chefona', 'olhaAqui'),
  ('Fernando', 'Sérgio', 5, 'trybe.teste2@gmail.com', 1, 1, 'fernandinho', 'falaJovens');

INSERT INTO actor(first_name, last_name)
  SELECT first_name, last_name
  FROM customer
  ORDER BY customer_id
  LIMIT 5;

INSERT INTO category(name)
  VALUES ('Anime'), ('Documentario'), ('Policial');

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);