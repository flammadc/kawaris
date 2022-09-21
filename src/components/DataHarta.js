import React, { useState } from "react";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

function PersonalInfo() {
  const jenisHarta = [
    "Rumah",
    "Tanah",
    "Perhiasan",
    "Uang/Tabungan",
    "Saham",
    "Perusahaan",
    "Kendaraan",
  ];
  const [amount, setAmount] = useState(10000);
  return (
    <>
      <Label className="font-semibold text-xl">
        Jenis harta yang ditinggalkan
      </Label>

      <div className="flex flex-col mt-2">
        {jenisHarta.map((h) => {
          return (
            <Label check>
              <Input type="checkbox" />
              <span className="ml-2 text-base">{h}</span>
            </Label>
          );
        })}
      </div>

      <Label className="font-semibold text-xl mt-4">
        Perkiraan total harta yang akan diwariskan
        <Input
          className="mt-2"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </Label>
    </>
  );
}

export default PersonalInfo;
