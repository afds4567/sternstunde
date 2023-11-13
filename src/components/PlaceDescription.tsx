import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PlaceDescriptionProps {
  place: any;
  setPlace: Dispatch<SetStateAction<any>>;
}

export default function PlaceDescription({
  place,
  setPlace,
}: PlaceDescriptionProps) {
  return (
    <div className="fixed transition ease-in-out delay-200 inset-x-0 mx-auto bottom-10 rounded-lg z-10 w-11/12  bg-slate-50 ">
      {place && (
        <div className="flex p-3 gap-3 h-[144px]">
          <div className="relative w-[120px] h-[120px]">
            <Image
              className="w-[60px] h-[60px]"
              src={place?.imgURL ? place.imgURL : `/default.png`}
              layout="fill"
              objectFit="fill"
              alt="icon image"
            />
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{place.name}</div>
              <button type="button" onClick={() => setPlace(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="text-sm text-gray-500">{place.category}</div>
            <div className="text-default text-sm text-black-500 flex-grow overflow-hidden overflow-y-auto">
              {place.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
