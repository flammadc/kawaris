import React from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

function Ringkasan() {
  const gender = "Perempuan";
  const nikah = "sudah";
  const orangTua = 0;
  const saudaralk = 2;
  const saudaraPr = 3;
  const kakekNenek = 2;
  const jenisHarta = "Uang/Tabungan";
  const totalHarta = 12345;
  return (
    <>
      <SectionTitle>Detail keluarga</SectionTitle>
      <hr className="border-gray-200" />

      <Label className="mt-3 flex flex-row justify-between">
        <Label className="font-medium text-base">Pewaris adalah</Label>
        <Label className="text-base">{gender}</Label>
      </Label>
      <Label className="mt-2 flex flex-row justify-between">
        <Label className="font-medium text-base">Status Pernikahan</Label>
        <Label className="text-base">
          {nikah == "sudah" ? "Sudah menikah" : "Belum menikah"}
        </Label>
      </Label>

      <Label className="font-semibold text-lg mt-6">
        Keluarga pewaris yang masih hidup
      </Label>

      <Label className="mt-3 flex flex-row justify-between">
        <Label className="font-medium text-base">Orang tua</Label>
        <Label className="text-base">
          {orangTua == 0
            ? "Bapak dan ibu masih hidup"
            : orangTua == 1
            ? "Bapak masih hidup ibu sudah meniggal"
            : orangTua == 2
            ? "Bapak sudah meniggal ibu masih hidup"
            : "Bapak dan ibu sudah meniggal"}
        </Label>
      </Label>

      <Label className="mt-2 flex flex-row justify-between">
        <Label className="font-medium text-base">Saudara pewaris</Label>
        <Label className="text-base">
          {"Laki-laki " + saudaralk + ", Perempuan " + saudaraPr}
        </Label>
      </Label>

      <Label className="mt-2 flex flex-row justify-between">
        <Label className="font-medium text-base">Kakek-nenek pewaris</Label>
        <Label className="text-base">
          {kakekNenek == 0
            ? "Kakek dari bapak"
            : kakekNenek == 1
            ? "Kakek dari ibu"
            : kakekNenek == 2
            ? "Nenek dari bapak"
            : "Nenek dari ibu"}
        </Label>
      </Label>

      <Label className="mt-2 mb-6 italic flex justify-end text-blue-500">
        <a href="">ubah data?</a>
      </Label>

      <SectionTitle>Detail harta</SectionTitle>
      <hr className="border-gray-200" />

      <Label className="mt-3 flex flex-row justify-between">
        <Label className="font-medium text-base">Jenis harta</Label>
        <Label className="text-base">{jenisHarta}</Label>
      </Label>
      <Label className="mt-2 flex flex-row justify-between">
        <Label className="font-medium text-base">Perkiraan total harta</Label>
        <Label className="text-base">Rp.{totalHarta}</Label>
      </Label>
    </>
  );
}

export default Ringkasan;
