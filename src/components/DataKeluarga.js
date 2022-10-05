import React, { useState } from "react";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

function SignUpInfo() {
  const [saudaraLk, setSaudaraLk] = useState(0);
  const [saudaraPr, setSaudaraPr] = useState(0);
  const [ibu, setIbu] = useState(true);
  return (
    <>
      <Label className="font-semibold text-xl">
        Apakah orang tua pewaris masih hidup?
        <Select className="mt-2">
          <option className="text-base">Bapak dan ibu masih hidup</option>
          <option className="text-base">
            Bapak masih hidup, ibu sudah meninggal
          </option>
          <option className="text-base">
            Bapak sudah meniggal, ibu masih hidup
          </option>
          <option className="text-base">Bapak dan ibu sudah meniggal</option>
        </Select>
      </Label>

      <div className={ibu === false ? "hidden" : ""}>
        <Label className={"font-semibold text-xl mt-4"}>
          Ketika pewaris meninggal, apakah nenek dari sisi ibu masih hidup?
        </Label>
        <div className="mt-2  flex flex-col ">
          <Label radio>
            <Input type="radio" value="ya" name="Status" />
            <span className="ml-2 text-base">Ya</span>
          </Label>
          <Label radio>
            <Input type="radio" value="tidak" name="Status" />
            <span className="ml-2 text-base">Tidak</span>
          </Label>
        </div>
      </div>

      <Label className="font-semibold text-xl mt-4">
        Jumlah saudara (islam)
      </Label>
      <div className="mt-2  flex flex-col gap-1">
        <Label className="w-full flex  flex-col justify-start gap-1">
          <span className=" text-base ">Saudara laki-laki</span>
          <Input
            type="number"
            name="Saudara"
            value={saudaraLk}
            style={{ width: 64, textAlign: "center", display: "inline" }}
            onChange={(e) => setSaudaraLk(e.target.value)}
          />
        </Label>
        <Label className="w-full flex  flex-col justify-start gap-1">
          <span className=" text-base ">Saudara perempuan</span>
          <Input
            type="number"
            name="Saudara"
            value={saudaraPr}
            style={{ width: 64, textAlign: "center", display: "inline" }}
            onChange={(e) => setSaudaraPr(e.target.value)}
          />
        </Label>
      </div>

      <Label className="font-semibold text-xl mt-4">
        Apakah kakek-nenek pewaris masih hidup? (dari ayah)
        <Select className="mt-2">
          <option className="text-base">Kakek dan nenek masih hidup</option>
          <option className="text-base">
            Kakek masih hidup, nenek sudah meninggal
          </option>
          <option className="text-base">
            Kakek sudah meniggal, nenek masih hidup
          </option>
          <option className="text-base">Kakek dan nenek sudah meniggal</option>
        </Select>
      </Label>

      <div className={ibu === false ? "hidden" : ""}>
        <Label className={"font-semibold text-xl mt-4"}>
          Apakah pewaris memiliki saudara satu bapak, beda ibu yang masih hidup?
        </Label>
        <div className="mt-2  flex flex-col ">
          <Label radio>
            <Input type="radio" value="ya" name="BapakIbu" />
            <span className="ml-2 text-base">Ya</span>
          </Label>
          <Label radio>
            <Input type="radio" value="tidak" name="BapakIbu" />
            <span className="ml-2 text-base">Tidak</span>
          </Label>
        </div>
      </div>
    </>
  );
}

export default SignUpInfo;
