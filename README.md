## Live Link: https://book-catalog-prisma-server-virid.vercel.app/

## Application Routes:

## User

* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/ef857515-6c63-4190-9bd2-1827e531ecca (Single GET) Include an id that is saved in your database
* api/v1/users/ef857515-6c63-4190-9bd2-1827e531ecca (PATCH)
* api/v1/users/ef857515-6c63-4190-9bd2-1827e531ecca (DELETE) Include an id that is saved in your database
* api/v1/profile (GET)

## Category

* api/v1/categories/create-category (POST)
* api/v1/categories (GET)
* api/v1/categories/2fc61e9e-9fa7-49e0-b6b1-63afb4db02c6 (Single GET) Include an id that is saved in your database
* api/v1/categories/2fc61e9e-9fa7-49e0-b6b1-63afb4db02c6 (PATCH)
* api/v1/categories/2fc61e9e-9fa7-49e0-b6b1-63afb4db02c6 (DELETE) Include an id that is saved in your database
## Books

* api/v1/books/create-book (POST)
* api/v1/books (GET)
* api/v1/books/:categoryId/category (GET) 9c408323-4f37-42b8-94cb-3de7ce2123b7
* api/v1/books/:id (GET)  5a289e59-a5e9-4595-bfb0-71b2c7a306f7
* api/v1/books/:id (PATCH) 5a289e59-a5e9-4595-bfb0-71b2c7a306f7
* api/v1/books/:id (DELETE) 5a289e59-a5e9-4595-bfb0-71b2c7a306f7
## Orders

* api/v1/orders/create-order (POST)
* api/v1/orders (GET)
* api/v1/orders/:orderId (GET) 10aa191b-2862-4cbe-affb-d14ea978e731