UPDATE products
SET price = $2
WHERE id = $1;
SELECT * FROM products;