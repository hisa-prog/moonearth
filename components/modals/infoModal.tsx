import ModalLayout from "../layout/modalLayout";

export interface InfoModal {
  title: string;
  infoModal: any;
}

const InfoModal = ({ title, infoModal }: InfoModal) => {
  return (
    <ModalLayout {...infoModal}>
      <div className="bg-bgSlideModal top-[30%] lg:top-auto rounded-30px px-6 py-8 z-50 flex flex-col-reverse relative gap-y-4">
        <div>{title}</div>
        <img
          src="/images/closeIcon.svg"
          alt={"close"}
          className="relative z-10 cursor-pointer w-4 ml-auto"
          onClick={() => {
            infoModal.close();
          }}
        />
      </div>
    </ModalLayout>
  );
};
export default InfoModal;
