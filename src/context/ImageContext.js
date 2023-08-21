import { createContext, useState } from "react";

const ImageContext = createContext({
  modalState: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ImageContextProvider = (props) => {
  const [modalState, setModalState] = useState(false);

  const openModalHandler = () => {
    console.log("open");
    setModalState(true);
  };

  const closeModalHandler = () => {
    setModalState(false);
  };
  return (
    <ImageContext.Provider
      value={{
        modalState: modalState,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
