import WindowWrapper from '#components/doc/WindowWrapper'
import useWindowStore from '#components/store/window'
import WindowControlls from '#components/WindowControlls'
import React from 'react'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <div className="relative flex flex-col h-full bg-white">

      {/* 🔝 Top Fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white to-transparent z-10" />

      {/* 🔹 Header */}
      <div
        id="window-header"
        className="shrink-0 flex items-center justify-between px-4 py-2 border-b bg-white z-20"
      >
        <div className="flex items-center gap-2">
          <WindowControlls target="txtfile" />
        </div>
        <h2 className="text-sm font-medium">{name}</h2>
        <div /> {/* spacer */}
      </div>

      {/* 🔹 Scrollable Content */}
      <div className="p-5 space-y-6 overflow-y-auto flex-1 scroll-smooth">

        {/* 📸 Image */}
        {image ? (
          <div className="w-full flex justify-center">
            <img
              src={image}
              alt={name}
              className="w-32 sm:w-40 md:w-48 h-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        ) : null}

        {/* 🏷 Subtitle */}
        {subtitle ? (
          <h3 className="text-lg font-semibold text-gray-900">
            {subtitle}
          </h3>
        ) : null}

        {/* 📄 Description */}
        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : null}

      </div>

      {/* 🔻 Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent" />

    </div>
  )
}

const TextWrapper = WindowWrapper(Text, "txtfile")

export default TextWrapper;