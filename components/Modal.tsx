import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
          <Dialog.Portal>
            <Dialog.Overlay 
              className="
                bg-neutral-900/90 
                backdrop-blur-sm 
                fixed 
                inset-0
                z-40  // Ensures the overlay is above the page content but below the modal dialog
              " 
            />
            <Dialog.Content
              className="
                fixed 
                drop-shadow-md 
                border 
                border-neutral-700 
                top-[50%] 
                left-[50%] 
                max-h-full 
                h-fit 
                md:h-[90vh] 
                md:max-h-[85vh] 
                w-full 
                md:w-[90vw] 
                md:max-w-[450px] 
                translate-x-[-50%] 
                translate-y-[-50%] 
                rounded-xl 
                bg-slate-300
                p-[25px] 
                focus:outline-none
                z-50  // Ensures the dialog is above the overlay
              ">
              <Dialog.Title 
                className="
                  text-xl 
                  text-center 
                  font-bold 
                  mb-4
                "
              >
                {title}
              </Dialog.Title>
              <Dialog.Description 
                className="
                  mb-5 
                  text-sm 
                  leading-normal 
                  text-center
                "
              >
                {description}
              </Dialog.Description>
              <div>
                {children}
              </div>
              <Dialog.Close asChild>
                <button
                  className="
                    text-black
                    hover:text-black 
                    absolute 
                    top-[10px] 
                    right-[10px] 
                    inline-flex 
                    h-[25px] 
                    w-[25px] 
                    appearance-none 
                    items-center 
                    justify-center 
                    rounded-full 
                    focus:outline-none
                  "
                  aria-label="Close"
                >
                  <IoMdClose />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    );
}
export default Modal;
