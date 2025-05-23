/** @format */
"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <CldUploadWidget
      uploadPreset="quiosco"
      options={{
        maxFiles: 1,
      }}
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          //@ts-ignore
          setImageUrl(result.info.secure_url);
        }
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2 ">
            <label htmlFor="" className="text-slate-800">
              Imagen Producto
            </label>
            <div
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Agregar Imagen</p>

              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="Imagen de Producto"
                  />
                </div>
              )}
            </div>
          </div>
          <input type="hidden" name="image" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
