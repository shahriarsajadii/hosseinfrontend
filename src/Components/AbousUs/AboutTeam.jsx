import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'
import axios from 'axios'
import api from "../../../api.js";

export default function AboutTeam() {

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        async function gettingDatas() {
            try {
                const { data } = await api.get('admins')
                setAdmins(data)
            } catch (error) {
                console.error('Error fetching admins:', error)
            }
        }

        gettingDatas()
    }, [])

    return (
        <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">ادمین های خفن ما</h2>
                <p className="text-gray-500 text-xl">با ادمین هایی که مسیر رو برات هموار می‌کنن آشنا شو</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    admins.length && admins.map(admin => {
                        return <TeamCard
                            name={admin.name}
                            role={admin.field}
                            img={admin.profile}
                        />
                    })
                }

            </div>
        </div>
    )
}
