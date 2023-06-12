import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ModeContext from "../context/DarkModeContext";

const Navbar = () => {
    const { mode, setMode } = useContext(ModeContext);
    return (
        <nav
            className={`${
                mode ? " bg-slate-600 shadow-md" : "bg-white shadow-md"
            } border-b-2 `}
        >
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-gray text-lg font-semibold">
                        <Link to="/"> Menu Logo</Link>
                    </h1>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className=" hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div
                        className=" cursor-pointer"
                        onClick={() => setMode(!mode)}
                    >
                        {mode ? (
                            <LightModeOutlinedIcon sx={{ color: "#ffff" }} />
                        ) : (
                            <DarkModeIcon color="dark" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
