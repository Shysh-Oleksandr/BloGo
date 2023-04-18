import { ICategory } from '@/models'
import { getCategories } from '@/services'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        getCategories().then(newCategories => setCategories(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href={'/'}>
                        <span className="cursor-pointer font-bold text-4xl text-white hover:text-gray-200 transition-colors">
                            BloGo
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map(category => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-gray-200 transition-colors">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header