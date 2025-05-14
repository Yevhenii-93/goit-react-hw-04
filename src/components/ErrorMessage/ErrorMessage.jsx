import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage() {
  toast.error("Ops... Error ! Please reload the page.", {
    duration: 50000000,
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

  return <Toaster />;
}
