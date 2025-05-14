import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, img }) {
  console.log(img);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
          transition: "opacity 0.3s ease-in-out",
          zIndex: 1000,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "16px",
          border: "none",
          background: "#ffffff",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          maxWidth: "500px",
          width: "90%",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      {/* <img src={img.urls.regular} /> */}
    </Modal>
  );
}
