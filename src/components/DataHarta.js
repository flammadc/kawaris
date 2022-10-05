import React, { useState } from "react";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

function PersonalInfo({formData, setFormData}) {
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
        {jenisHarta.map((h, i) => {
          return (
            <Label check>
              <Input
                type="radio"
                value={h}
                name="Jenis Harta"
                onChange={(e) =>
                  setFormData({ ...formData, jenisHarta: e.target.value })
                }
              />
              <span className="ml-2 text-base">{h}</span>
            </Label>
          );
        })}
      </div>

      <Label className="font-semibold text-xl mt-4">
        Perkiraan total harta yang akan diwariskan
        <Input
          className="mt-2"
          value={formData.totalHarta}
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, totalHarta: e.target.value })
          }
        />
      </Label>
    </>
  );
}

export default PersonalInfo;
