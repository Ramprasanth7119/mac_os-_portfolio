import WindowWrapper from "#components/doc/WindowWrapper"
import WindowControlls from "#components/WindowControlls"
import { locations } from "#constants"
import { Trash2 } from "lucide-react"
import useWindowStore from "#components/store/window"

const trashItems = locations.trash?.children ?? []

const Trash = () => {
  const { openWindow } = useWindowStore()

  const openItem = (item) => {
    if (item.fileType === "txt") {
      openWindow("txtfile", item)
      return
    }

    if (item.fileType === "img") {
      openWindow("imgfile", item)
    }
  }

  return (
    <>
      <div id="window-header">
        <WindowControlls target="trash" />
        <div className="flex items-center gap-2 text-gray-600 font-medium">
          <Trash2 className="icon" />
          <h2>{locations.trash.name}</h2>
        </div>
        <div className="w-12" />
      </div>

      <div className="trash-body">
        <p className="trash-note">
          A tiny graveyard for bugs, bad ideas, and unfinished side quests.
        </p>

        <div className="trash-grid">
          {trashItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="trash-item"
              onClick={() => openItem(item)}
            >
              <div className="trash-item-head">
                <img src={item.icon} alt={item.name} className="trash-item-icon" />
                <div className="min-w-0">
                  <h3>{item.name}</h3>
                  <p>{item.fileType === "img" ? "Open meme" : "Open notes"}</p>
                </div>
              </div>

              {Array.isArray(item.description) ? (
                <div className="trash-item-description">
                  {item.description.slice(0, 2).map((line) => (
                    <p key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="trash-item-preview">Preview available in image viewer</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

const TrashWrapper = WindowWrapper(Trash, "trash")

export default TrashWrapper