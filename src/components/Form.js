
import React, { useState } from "react";
import DataPewaris from "./DataPewaris";
import DataHarta from "./DataHarta";
import DataKeluarga from "./DataKeluarga";
import Ringkasan from "./Ringkasan";
import Hasil from "./Hasil";
import { IoIosArrowBack } from "react-icons/io";
import PageTitle from "../components/Typography/PageTitle";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = [
    "Data Pewaris",
    "Data Harta",
    "Data Keluarga",
    "Ringkasan",
    "Hasil",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <DataPewaris formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <DataHarta formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <DataKeluarga formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Ringkasan formData={formData} setFormData={setFormData} />;
    } else {
      return <Hasil />;
    }
  };

  return (
    <>
      <header className="z-40 py-4 bg-white shadow-bottom flex justify-center ">
        <div className="relative flex items-center justify-center lg:w-3/5 w-4/5">
          <button
            className={"absolute left-0 flex items-center justify-center"}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <IoIosArrowBack
              style={{ stroke: "black", strokeWidth: "5" }}
              size={30}
              className={page === 0 ? "hidden" : ""}
            />
          </button>
          <Link className="font-bold text-2xl cursor-pointer" to="/">Kawaris</Link>
        </div>
      </header>

      <main className="lg:px-64 px-8 pb-24">
        <PageTitle>{FormTitles[page]}</PageTitle>

        <Card>
          <CardBody className="pb-4">{PageDisplay()}</CardBody>
        </Card>
      </main>
      <div className={page === FormTitles.length - 1 ? "hidden" : ""}>
        <footer className=" fixed bottom-0 w-full z-40 py-4 bg-white border-t  border-gray-100  flex justify-center">
          <Button
            className="lg:w-2/5 w-4/5"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
            size="large"
          >
            {page == 3 ? "Hitung" : "Lanjut"}
          </Button>
        </footer>
      </div>
    </>
  );
}

export default Form;
