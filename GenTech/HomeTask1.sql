1. Приведите десять типовых бизнес-процессов для предметной области ВИДЕО-ХОСТИНГ (Youtube), а также их соответствие по CRUD.

1. Создание аккаунта - Create
2. Загрузка видео - Create
3. Просмотр видео - Read
4. Комментирование видео - Create, Read
5. Лайки и дизлайки - Update
6. Подписка на каналы - Update
7. Поиск видео - Read
8. Модерация контента - Read, Update
9. Удаление видео - Delete
10. Отмена подписки на каналы - Delete


2. Вывести название и стоимость товаров от 20 до 150 EUR
SELECT ProductName
FROM Products
WHERE Price BETWEEN 20 AND 150;

3. Вывести страны поставщиков, кроме тех, что из USA.
SELECT Country
FROM Suppliers
WHERE NOT Country = 'USA'

4. Вывести перевозчика с ID 1
SELECT ShipperName
FROM Shippers
WHERE ShipperID = 1;

5. Вывести контактные имена клиентов, кроме тех, что из France и USA.
SELECT ContactName
FROM Customers
WHERE NOT Country IN ('France', 'USA');

6. Вывести страну, город и адрес всех поставщиков, кроме тех, что из Japan и Brazil
SELECT Country, City, Address
FROM Suppliers
WHERE NOT Country IN ('Japan', 'Brazil');