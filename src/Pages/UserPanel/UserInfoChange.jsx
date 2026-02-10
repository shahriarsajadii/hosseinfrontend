import React, { useEffect, useState } from 'react'
import MyInfo from '../../Components/Cards/MyInfo'
import EditMyInfo from '../../Components/UserPanel/EditMyInfo';
import { useAuth } from '../../Context/AuthContext';
import { User } from 'lucide-react';
import Notification from '../../Components/Notification';

export default function UserInfoChange() {
    const [showNotif, setShowNotif] = useState(false)
    const { userInfo } = useAuth()

        useEffect(() => {
            const notifTimeout = setTimeout(() => {
                setShowNotif(false);
            }, 3000);
            return () => clearTimeout(notifTimeout);
        }, [showNotif])

    return (
        <>
        <Notification
                        isOpen={showNotif}
                        onClose={() => setShowNotif(false)}
                        title={`عملیات موفق`}
                        message={`اطلاعات کاربر با موفقیت ویرایش شد`}
                        icon={<User />}
                    />
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-12 mt-10 text-center lalezar">
                اطلاعات من
            </h1>
            {
                userInfo?.name && <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <MyInfo {...userInfo} />
                    <EditMyInfo userInfo={userInfo} setShowNotif = {setShowNotif} />
                </div>
            }
        </>
    )
}
