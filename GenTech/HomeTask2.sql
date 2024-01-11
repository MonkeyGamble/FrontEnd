1. Вывести данные о товарах (название, цена со скидкой в 0.5%).
SELECT
ProductName,
ROUND(Price*.995, 2) AS DiscPrice0_5
FROM Products;

2. Вывести самый дорогой товар в диапазоне до 100 EUR.
SELECT
ProductName
FROM Products
WHERE Price < 100
ORDER BY Price DESC
LIMIT 1

3. Вывести два самых дешевых товара из категории 4.
SELECT
ProductName
FROM Products
WHERE CategoryID = 4
ORDER BY Price ASC
LIMIT 2

4. Вывести один товар, который находится на пятом месте среди самых дорогих.
SELECT ProductName
FROM Products
ORDER BY Price DESC
LIMIT 1 OFFSET 4