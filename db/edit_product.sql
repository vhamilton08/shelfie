UPDATE products
SET name = $1, price = $2, imageUrl = $3
WHERE id = $4;