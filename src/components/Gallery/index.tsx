import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

import { GalleryItem } from '../../pages/Home'

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Item = styled.li`
  position: relative;

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    aspect-ratio: 1 / 1;
    width: 150px;
    object-fit: cover;
  }

  :hover {
    .overlay {
      opacity: 1;
      cursor: pointer;
      transition: opacity 200ms ease;
    }
  }

  .overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

const ModalContent = styled.div`
  position: relative;
  z-index: 999;

  header {
    display: flex;
    justify-content: space-between;

    padding-bottom: 24px;

    h4 {
      font-size: 18px;
    }

    img {
      cursor: pointer;
    }
  }
`

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'video',
    url: '',
    isVisible: false
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const handleModalOpenclick = (media: GalleryItem) => {
    setModal({
      isVisible: true,
      type: media.type,
      url: media.url
    })
  }

  return (
    <>
      <Items>
        {items.map((item) => (
          <Item key={item.url} onClick={() => handleModalOpenclick(item)}>
            <img src={getMediaCover(item)} alt={name} />
            <div className="overlay">
              {item.type === 'image' ? (
                <img
                  src={zoom}
                  alt="Zoom Icon"
                  title="Clique para maximizar a imagem"
                />
              ) : (
                <img
                  src={play}
                  alt="Play Icon"
                  title="Clique para assistir o vídeo"
                />
              )}
            </div>
          </Item>
        ))}
      </Items>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <div className="container">
          <ModalContent>
            <header>
              <h4>{name}</h4>
              <img
                src={close}
                alt="Fechar"
                onClick={() => setModal({ ...modal, isVisible: false })}
              />
            </header>
            {modal.type === 'image' ? (
              <img src={modal.url} alt={name} />
            ) : (
              <iframe
                width="560"
                height="315"
                frameBorder={0}
                src={modal.url}
              />
            )}
          </ModalContent>
        </div>
        <div
          className="overlay"
          onClick={() => setModal({ ...modal, isVisible: false })}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
