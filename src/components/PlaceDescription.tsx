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
  console.log(place);
  return (
    <div className="fixed transition ease-in-out delay-200 inset-x-0 mx-auto bottom-10 rounded-lg z-10 w-11/12 bg-slate-50 ">
      {place && (
        <div className="flex p-3 gap-3">
          <Image
            src={place?.creator ? `/${place?.creator}.png` : `/default.png`}
            width={100}
            height={80}
            alt="icon image"
          />
          <div className="flex justify-between items-start w-full">
            <div className="font-semibold">{place.admin_name}</div>
            <button type="button" onClick={() => setPlace(null)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
