import { useLocation, useNavigate } from "react-router";
import { ImageItem } from "../interfaces/ImageItem";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  //   DialogTitle,
} from "@headlessui/react";

interface Props {
  img?: ImageItem;
  open: boolean;
}

const ImgModal = ({ img, open }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Dialog
      open={open}
      onClose={() => {
        if (location.key === "default") {
          navigate("/");
        } else {
          navigate(-1);
        }
      }}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <img src={img?.urls.full} alt={img?.id} />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ImgModal;