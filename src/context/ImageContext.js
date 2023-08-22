import { createContext, useState } from "react";
import Images from "../data";

const ImageContext = createContext({
  modalState: false,
  openModal: () => {},
  closeModal: () => {},
  currentIndex: 0,
  prevImage: () => {},
  nextImage: () => {},
  selectImage: () => {}
});

export const ImageContextProvider = (props) => {
  const [modalState, setModalState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModalHandler = () => {
    setModalState(true);
  };

  const closeModalHandler = () => {
    setModalState(false);
  };

  const prevImageHandler = () => {
    const newIndex = currentIndex === 0 ? Images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImageHandler = () => {
    const newIndex = currentIndex === Images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const selectImageHandler = (select) => {
    setCurrentIndex(select)
    console.log(currentIndex)
  }

  return (
    <ImageContext.Provider
      value={{
        modalState: modalState,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
        currentIndex: currentIndex,
        prevImage: prevImageHandler,
        nextImage: nextImageHandler,
        selectImage: selectImageHandler
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
