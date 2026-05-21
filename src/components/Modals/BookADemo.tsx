import { FormEvent, useState } from "react";
import { Modal } from "../ui/Modal";

type BookADemoProps = {
  openedModal: boolean;
  setOpenedModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BookADemo({
  openedModal,
  setOpenedModal,
}: BookADemoProps) {
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    setOpenedModal(false);
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Modal opened={openedModal} onClose={closeModal} size="min(92vw, 640px)">
      <div className="relative h-full overflow-y-auto p-6 md:p-8">
        <Modal.CloseButton onClick={closeModal} />
        <div className="pr-8">
          <p className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[#6658F4]">
            Book a Demo
          </p>
          <h2 className="mt-2 text-[28px] font-bold leading-tight text-[#051438]">
            See how Plural can support your healthcare operations.
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-7 text-[#677597]">
            Share your details and the team will follow up with the right demo
            for your organization.
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-[8px] border border-[#D7E3FC] bg-[#F7FAFF] p-5">
            <h3 className="text-[20px] font-semibold text-[#051438]">
              Request received.
            </h3>
            <p className="mt-2 text-[16px] font-medium leading-7 text-[#677597]">
              Thanks for reaching out. A Plural Health team member will contact
              you soon.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-5 h-[42px] rounded-[8px] bg-[#0B0C7D] px-5 text-[15px] font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-[14px] font-semibold text-[#051438]">
              Full name
              <input
                required
                name="name"
                className="h-[44px] rounded-[8px] border border-[#DFE2E9] px-4 text-[16px] font-medium text-[#051438] outline-none focus:border-[#6658F4]"
              />
            </label>
            <label className="grid gap-2 text-[14px] font-semibold text-[#051438]">
              Work email
              <input
                required
                type="email"
                name="email"
                className="h-[44px] rounded-[8px] border border-[#DFE2E9] px-4 text-[16px] font-medium text-[#051438] outline-none focus:border-[#6658F4]"
              />
            </label>
            <label className="grid gap-2 text-[14px] font-semibold text-[#051438]">
              Organization
              <input
                required
                name="organization"
                className="h-[44px] rounded-[8px] border border-[#DFE2E9] px-4 text-[16px] font-medium text-[#051438] outline-none focus:border-[#6658F4]"
              />
            </label>
            <label className="grid gap-2 text-[14px] font-semibold text-[#051438]">
              What would you like to see?
              <textarea
                name="message"
                rows={4}
                className="resize-none rounded-[8px] border border-[#DFE2E9] px-4 py-3 text-[16px] font-medium text-[#051438] outline-none focus:border-[#6658F4]"
              />
            </label>
            <button
              type="submit"
              className="mt-2 h-[44px] rounded-[8px] bg-[#0B0C7D] px-5 text-[15px] font-semibold text-white"
            >
              Submit request
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
