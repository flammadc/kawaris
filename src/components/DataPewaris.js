import React from "react";
import { Input,  Label } from "@windmill/react-ui";

function DataPewaris( {formData, setFormData} ) {

  return (
    <>
      <Label className="font-semibold text-xl">Jenis kelamin pewaris</Label>
      <div className="mt-2  flex flex-col ">
        <Label radio>
          <Input
            type="radio"
            value="lk"
            name="Gender"
            onChange={(e) =>
              setFormData({ ...formData, jenisKelamin: e.target.value })
            }
          />
          <span className="ml-2 text-base">Laki-Laki</span>
        </Label>
        <Label radio>
          <Input
            type="radio"
            value="pr"
            name="Gender"
            onChange={(e) =>
              setFormData({ ...formData, jenisKelamin: e.target.value })
            }
          />
          <span className="ml-2 text-base">Perempuan</span>
        </Label>
      </div>

      <Label className="font-semibold text-xl mt-4">
        Apakah pewaris telah menikah secara sah?
      </Label>
      <div className="mt-2  flex flex-col ">
        <Label radio>
          <Input
            type="radio"
            value="sudah"
            name="Status"
            onChange={(e) =>
              setFormData({ ...formData, statusNikah: e.target.value })
            }
          />
          <span className="ml-2 text-base">Ya, pewaris telah menikah</span>
        </Label>
        <Label radio>
          <Input
            type="radio"
            value="belum"
            name="Status"
            onChange={(e) =>
              setFormData({ ...formData, statusNikah: e.target.value })
            }
          />
          <span className="ml-2 text-base">Tidak, pewaris belum menikah</span>
        </Label>
      </div>
    </>
  );
}

export default DataPewaris;
