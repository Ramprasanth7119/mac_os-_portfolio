import WindowWrapper from '#components/doc/WindowWrapper'
import useWindowStore from '#components/store/window'
import WindowControlls from '#components/WindowControlls'
import React from 'react'

const ImageWindow = () => {
    
    const {windows} = useWindowStore();
    const data = windows.imgfile?.data;

    if(!data) return;

    const {name, imageUrl} = data;

  return (
    <>
        <div id="window-header">
            <WindowControlls target="imgfile"/>
            <h2>{name}</h2>
        </div>

        <div className='p-5 bg-white'>
            {imageUrl ? (
                <div className='w-full'><img src={imageUrl} alt={name} className='w-full h-auto max-h-[70vh] object-contain rounded'/></div>
            ) : null}

            
        </div>
    </>
  )
}

const ImageWindowWrapper = WindowWrapper(ImageWindow, "imgfile")

export default ImageWindowWrapper;