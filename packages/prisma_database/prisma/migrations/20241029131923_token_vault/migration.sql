/*
  Warnings:

  - You are about to drop the `AccountDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Balance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreditCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DebitCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoginPin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentPin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecentTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Upi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AccountDetails" DROP CONSTRAINT "AccountDetails_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Balance" DROP CONSTRAINT "Balance_balanceId_fkey";

-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_user_id_fkey";

-- DropForeignKey
ALTER TABLE "DebitCard" DROP CONSTRAINT "DebitCard_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Lock" DROP CONSTRAINT "Lock_lockedId_fkey";

-- DropForeignKey
ALTER TABLE "LoginPin" DROP CONSTRAINT "LoginPin_userId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentPin" DROP CONSTRAINT "PaymentPin_userId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalDetails" DROP CONSTRAINT "PersonalDetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "RecentTransaction" DROP CONSTRAINT "RecentTransaction_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "RecentTransaction" DROP CONSTRAINT "RecentTransaction_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_accountDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_creditCardId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_debitCardId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_upiId_fkey";

-- DropForeignKey
ALTER TABLE "Upi" DROP CONSTRAINT "Upi_upi_id_fkey";

-- DropTable
DROP TABLE "AccountDetails";

-- DropTable
DROP TABLE "Balance";

-- DropTable
DROP TABLE "CreditCard";

-- DropTable
DROP TABLE "DebitCard";

-- DropTable
DROP TABLE "Lock";

-- DropTable
DROP TABLE "LoginPin";

-- DropTable
DROP TABLE "PaymentPin";

-- DropTable
DROP TABLE "PersonalDetails";

-- DropTable
DROP TABLE "RecentTransaction";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "Upi";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Mode";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "AccountTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "accountNumberIndex" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpiTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pa" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UpiTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "creditNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DebitTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "debitNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DebitTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneTokenVault" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhoneTokenVault_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountTokenVault_token_key" ON "AccountTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "AccountTokenVault_accountNumber_key" ON "AccountTokenVault"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UpiTokenVault_token_key" ON "UpiTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "UpiTokenVault_pa_key" ON "UpiTokenVault"("pa");

-- CreateIndex
CREATE UNIQUE INDEX "CreditTokenVault_token_key" ON "CreditTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "CreditTokenVault_creditNumber_key" ON "CreditTokenVault"("creditNumber");

-- CreateIndex
CREATE UNIQUE INDEX "DebitTokenVault_token_key" ON "DebitTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "DebitTokenVault_debitNumber_key" ON "DebitTokenVault"("debitNumber");

-- CreateIndex
CREATE UNIQUE INDEX "EmailTokenVault_token_key" ON "EmailTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "EmailTokenVault_email_key" ON "EmailTokenVault"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneTokenVault_token_key" ON "PhoneTokenVault"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneTokenVault_phone_key" ON "PhoneTokenVault"("phone");
