-- CreateEnum
CREATE TYPE "Status" AS ENUM ('canceled', 'active', 'completed');

-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('upi', 'accountNo', 'debitCard', 'creditCard');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalDetails" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "aadharCardNo" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PersonalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountDetails" (
    "id" TEXT NOT NULL,
    "ifsc" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "AccountDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upi" (
    "id" TEXT NOT NULL,
    "pn" TEXT NOT NULL,
    "cu" TEXT NOT NULL,
    "upi_id" TEXT NOT NULL,

    CONSTRAINT "Upi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DebitCard" (
    "id" TEXT NOT NULL,
    "valid_Thur" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "DebitCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "valid_Thur" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lock" (
    "id" TEXT NOT NULL,
    "lockedId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" TEXT NOT NULL,
    "balanceId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 1000000,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginPin" (
    "id" TEXT NOT NULL,
    "pin" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LoginPin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentPin" (
    "id" TEXT NOT NULL,
    "pin" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PaymentPin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "transactionId" TEXT NOT NULL,
    "transactionReferenceNo" INTEGER NOT NULL,
    "transactionNote" TEXT NOT NULL,
    "transactionTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mode" "Mode" NOT NULL DEFAULT 'upi',
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,
    "accountDetailsId" TEXT,
    "upiId" TEXT,
    "debitCardId" TEXT,
    "creditCardId" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecentTransaction" (
    "id" TEXT NOT NULL,
    "transactionTime" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "firstLetter" TEXT NOT NULL,
    "mode" "Mode" NOT NULL DEFAULT 'upi',
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,

    CONSTRAINT "RecentTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalDetails_aadharCardNo_key" ON "PersonalDetails"("aadharCardNo");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalDetails_userId_key" ON "PersonalDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AccountDetails_ifsc_key" ON "AccountDetails"("ifsc");

-- CreateIndex
CREATE UNIQUE INDEX "DebitCard_cvv_key" ON "DebitCard"("cvv");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_cvv_key" ON "CreditCard"("cvv");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transactionId_key" ON "Transaction"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transactionReferenceNo_key" ON "Transaction"("transactionReferenceNo");

-- CreateIndex
CREATE UNIQUE INDEX "RecentTransaction_fromUserId_toUserId_key" ON "RecentTransaction"("fromUserId", "toUserId");

-- AddForeignKey
ALTER TABLE "PersonalDetails" ADD CONSTRAINT "PersonalDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountDetails" ADD CONSTRAINT "AccountDetails_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upi" ADD CONSTRAINT "Upi_upi_id_fkey" FOREIGN KEY ("upi_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCard" ADD CONSTRAINT "DebitCard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lock" ADD CONSTRAINT "Lock_lockedId_fkey" FOREIGN KEY ("lockedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoginPin" ADD CONSTRAINT "LoginPin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentPin" ADD CONSTRAINT "PaymentPin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountDetailsId_fkey" FOREIGN KEY ("accountDetailsId") REFERENCES "AccountDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_upiId_fkey" FOREIGN KEY ("upiId") REFERENCES "Upi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_debitCardId_fkey" FOREIGN KEY ("debitCardId") REFERENCES "DebitCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES "CreditCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentTransaction" ADD CONSTRAINT "RecentTransaction_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentTransaction" ADD CONSTRAINT "RecentTransaction_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
