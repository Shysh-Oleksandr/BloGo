import React from 'react'

type Props = {
    url: string;
    width: number;
    height?: number;
}

const AvatarImage = ({ url, width, height }: Props) => (
    <div className="block rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${url})`, height: height || width, width }} />
)

export default AvatarImage