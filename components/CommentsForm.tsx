import { submitComment } from '@/services';
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    slug: string;
}

const CommentsForm = ({ slug }: Props) => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const commentEl = useRef<HTMLTextAreaElement>(null);
    const nameEl = useRef<HTMLInputElement>(null)
    const emailEl = useRef<HTMLInputElement>(null)
    const storeDataEl = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (nameEl.current) {
            nameEl.current.value = window.localStorage.getItem('name') || '';
        }
        if (emailEl.current) {
            emailEl.current.value = window.localStorage.getItem('email') || '';
        }
    }, [])


    const handleCommentSubmission = () => {
        setError(false);

        const comment = commentEl.current?.value;
        const name = nameEl.current?.value;
        const email = emailEl.current?.value;
        const storeData = storeDataEl.current?.checked;

        if (!comment || !name || !email) {
            setError(true);

            return;
        }

        const commentObj = {
            name, comment, email, slug
        }

        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        }
        else {
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
        }

        submitComment(commentObj).then(res => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    };

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700' placeholder="Comment" name="comment" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                <input type="text" ref={nameEl} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700' placeholder="Name" name="name" />
                <input type="text" ref={emailEl} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700' placeholder="Email" name="email" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input type="checkbox" ref={storeDataEl} id='storeData' name='storeData' defaultChecked />
                    <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2'>Save my email and name for the future</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-500'>All fields are required</p>}
            <div className="mt-8">
                <button className="transition duration-300 ease-linear hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer" type='button' onClick={handleCommentSubmission}>Post Comment</button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm