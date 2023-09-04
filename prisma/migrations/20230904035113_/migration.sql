/*
  Warnings:

  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review_ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropForeignKey
ALTER TABLE "review_ratings" DROP CONSTRAINT "review_ratings_bookId_fkey";

-- DropForeignKey
ALTER TABLE "review_ratings" DROP CONSTRAINT "review_ratings_userId_fkey";

-- DropTable
DROP TABLE "books";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "review_ratings";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "test1" (
    "id" TEXT NOT NULL,

    CONSTRAINT "test1_pkey" PRIMARY KEY ("id")
);
