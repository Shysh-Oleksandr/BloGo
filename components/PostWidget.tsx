/* eslint-disable @next/next/no-img-element */
import { ICategory, IPostNode } from '@/models'
import { getRecentPosts, getSimilarPosts } from '@/services';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AvatarImage from './AvatarImage';
import moment from 'moment';
import Link from 'next/link';

type Props = {
    categories?: string[];
    slug?: string;
}

const PostWidget = ({ categories, slug }: Props) => {
    const [relatedPosts, setRelatedPosts] = useState<IPostNode[]>([])

    useEffect(() => {
        if (slug && categories) {
            getSimilarPosts(slug, categories).then((result) => setRelatedPosts(result))
        }
        else {
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [slug, categories])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug ? 'Related Posts' : "Recent Posts"}</h3>
            {relatedPosts.map(post => (
                <div key={post.title} className='flex items-center w-full'>
                    <div className="w-16 flex-none">
                        <AvatarImage url={post.featuredImage.url} width={60} />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className='text-gray-500 text-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} className='text-base'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default PostWidget