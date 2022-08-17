import React from 'react'
import style from '../style/style.module.css'
import {Link} from 'react-router-dom'

export default function Wisata({
    background,
    title,
    paragraph,
    slug
}) {
  return (
    <div
    className={`min-h-[50vh] ${style.jumbotronBlack} relative flex items-end p-5 bg-cover bg-center`}
    style={{
        backgroundImage : `url('${process.env.REACT_APP_ADMIN_URL}${background}')`
    }}>
        <div className='relative w-full'>
            <div>
                <h1 className="text-xl lg:text-2xl text-whitecus font-bold">
                    {title}
                </h1>
                <div className="text-white text-xs lg:text-base lg:h-12 h-16 mb-8 mt-3 overflow-hidden" dangerouslySetInnerHTML={{__html : paragraph}}/>
            </div>
            <Link to={`/hiburan-wisata/${slug}`} className="font-medium bg-greencus py-2 px-3 text-white max-w-max">Lihat Wisata</Link>
        </div>
    </div>
  )
}
