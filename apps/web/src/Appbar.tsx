'use client'
import { signOut } from 'next-auth/react';

export const Appbar = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: '/auth/Signin' }); // Redirect to the login page after logging out
    };

    return (
        <div className="flex bg-gray-100 items-center justify-between px-10 py-2">
            <div className="font-bold cursor-pointer"> GRINGOTTS WIZARDING BANK </div>
            <div 
                className="font-bold cursor-pointer w-[100px] h-[50px] flex justify-center items-center rounded-2xl border"
                onClick={handleLogout}
            >
                LogOut
            </div>
        </div>
    );
};
