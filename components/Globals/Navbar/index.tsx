"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const [header, setHeader] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const matches = useMediaQuery("(min-width:1280px)");
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div
      className={
        header
          ? "fixed w-[100%] bg-[#04DBA2] transition-all"
          : "bg-[transparent] transition-all"
      }
    >
      <div className="header flex w-[80%] justify-between m-auto py-[15px]">
        <div className="logo ">
          <h2 className="text-[#ffffff] font-bold">Vividero</h2>
        </div>
        <div className="menu ">
          <nav>
            {matches ? (
              <ul className="flex gap-[20px] ">
                <li>
                  <Link href={"/"} className="text-[#ffffff]">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#ffffff]">
                    Soluciones
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="cursor-pointer border-r-[50%]">
                <MenuOutlinedIcon
                  style={{ color: "#ffffff" }}
                  onClick={() => setDrawerOpen(true)}
                />
              </div>
            )}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              menu
            </Drawer>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
