import { IAuthor } from '@/models'
import React from 'react'
import AvatarImage from './AvatarImage';

type Props = {
    author: IAuthor;
}

const Author = ({ author }: Props) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className="absolute left-[50%] -translate-x-1/2 -top-14">
                <AvatarImage url={author.photo.url} width={100} />
            </div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className="text-white text-lg">{author.bio}</p>
        </div>
    )
}

export default Author