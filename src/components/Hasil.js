import React from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

const Hasil = () => {
  const totalHarta = 12345;
  const nikah = "sudah";
  const hasilWaris = [
    {
      nama: "Bapak",
      banyak: "1/1",
      warisan: 321,
    },
    {
      nama: "Saudara",
      banyak: "-",
      warisan: 0,
    },
    {
      nama: "Nenek",
      banyak: "-",
      warisan: 0,
    },
  ];
  return (
    <>
      <Label className="flex flex-row justify-between">
        <Label className="font-semibold text-lg">Total harta pewaris</Label>
        <Label className="text-base font-semibold">Rp.{totalHarta}</Label>
      </Label>
      <Label className="mt-2 font-hairline text-xs">
        Harta pewaris akan dibagikan kepada:
      </Label>

      <Label className="mt-2 flex flex-col justify-between">
        {hasilWaris.map((w) => {
          return (
            <>
              <Label className="mt-2 mb-3 flex flex-row items-center justify-between">
                <Label className="flex flex-col">
                  <Label className="font-semibold text-lg">{w.nama}</Label>
                  <Label className="font-hairline text-xs">
                    {"Sebanyak " + w.banyak}
                  </Label>
                </Label>
                <Label className="text-base font-semibold">
                  Rp.{w.warisan}
                </Label>
              </Label>
              <hr className="border-gray-200" />
            </>
          );
        })}
      </Label>
    </>
  );
};

export default Hasil;
