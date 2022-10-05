import React, { useState } from "react";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

function DataKeluargaNikah() {
     const [anakLk, setAnakLk] = useState(0);
     const [anakPr, setAnakPr] = useState(0);
     const [cucuLk, setCucuLk] = useState(0);
     const [cucuPr, setCucuPr] = useState(0);
     const [ibu, setIbu] = useState(true);
     const hidden = false;
     return (
          <>
               <Label className="font-semibold text-xl">
                    Apakah pasangan sah pewaris masih hidup

               </Label>
               <div className="mt-2  flex flex-col ">
                    <Label radio>
                         <Input type="radio" value="ya" name="PasanganHidup" />
                         <span className="ml-2 text-base">Ya</span>
                    </Label>
                    <Label radio>
                         <Input type="radio" value="tidak" name="PasanganHidup" />
                         <span className="ml-2 text-base">Tidak</span>
                    </Label>
               </div>

               <Label className="font-semibold text-xl mt-4">
                    Apakah pewaris dan pasangan telah bercerai

               </Label>
               <div className="mt-2  flex flex-col ">
                    <Label radio>
                         <Input type="radio" value="ya" name="PasanganStatus" />
                         <span className="ml-2 text-base">Ya</span>
                    </Label>
                    <Label radio>
                         <Input type="radio" value="tidak" name="PasanganStatus" />
                         <span className="ml-2 text-base">Tidak</span>
                    </Label>
               </div>

               <Label className="font-semibold text-xl mt-4">
                    Apakah pewaris memiliki anak dari pasangan yang sah?

               </Label>
               <div className="mt-2  flex flex-col ">
                    <Label radio>
                         <Input type="radio" value="ya" name="AnakStatus" />
                         <span className="ml-2 text-base">Ya</span>
                    </Label>
                    <Label radio>
                         <Input type="radio" value="tidak" name="AnakStatus" />
                         <span className="ml-2 text-base">Tidak</span>
                    </Label>
               </div>

               <div className={hidden === true ? "hidden" : ""}>
                    <Label className="font-semibold text-xl mt-4">
                         Jumlah anak pewaris
                    </Label>
                    <div className="mt-2  flex flex-col gap-1">
                         <Label className="w-full flex  flex-col justify-start gap-1">
                              <span className=" text-base ">Anak laki-laki</span>
                              <Input
                                   type="number"
                                   name="Anak"
                                   value={anakLk}
                                   style={{ width: 64, textAlign: "center", display: "inline" }}
                                   onChange={(e) => setAnakLk(e.target.value)}
                              />
                         </Label>
                         <Label className="w-full flex  flex-col justify-start gap-1">
                              <span className=" text-base ">Anak perempuan</span>
                              <Input
                                   type="number"
                                   name="Anak"
                                   value={anakPr}
                                   style={{ width: 64, textAlign: "center", display: "inline" }}
                                   onChange={(e) => setAnakPr(e.target.value)}
                              />
                         </Label>
                    </div>
               </div>


               <Label className="font-semibold text-xl mt-4">
                    Apakah pewaris memiliki cucu dari anak laki-lakinya?

               </Label>
               <div className="mt-2  flex flex-col ">
                    <Label radio>
                         <Input type="radio" value="ya" name="CucuStatus" />
                         <span className="ml-2 text-base">Ya</span>
                    </Label>
                    <Label radio>
                         <Input type="radio" value="tidak" name="CucuStatus" />
                         <span className="ml-2 text-base">Tidak</span>
                    </Label>
               </div>

               <div className={hidden === true ? "hidden" : ""}>
                    <Label className="font-semibold text-xl mt-4">
                         Jumlah cucu pewaris
                    </Label>
                    <div className="mt-2  flex flex-col gap-1">
                         <Label className="w-full flex  flex-col justify-start gap-1">
                              <span className=" text-base ">Cucu laki-laki</span>
                              <Input
                                   type="number"
                                   name="Cucu"
                                   value={cucuLk}
                                   style={{ width: 64, textAlign: "center", display: "inline" }}
                                   onChange={(e) => setCucuLk(e.target.value)}
                              />
                         </Label>
                         <Label className="w-full flex  flex-col justify-start gap-1">
                              <span className=" text-base ">Cucu perempuan</span>
                              <Input
                                   type="number"
                                   name="Cucu"
                                   value={cucuPr}
                                   style={{ width: 64, textAlign: "center", display: "inline" }}
                                   onChange={(e) => setCucuPr(e.target.value)}
                              />
                         </Label>
                    </div>
               </div>


          </>
     );
}

export default DataKeluargaNikah;
