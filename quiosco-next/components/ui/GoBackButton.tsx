/** @format */
"use client";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.back();
        }}
        className="bg-amber-400 w-full  lg:w-auto text-lg px-10 py-3 text-center font-bold cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
};

export default GoBackButton;
