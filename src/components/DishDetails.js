import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dishesData from "../data/dishes";
import LoadingSpinner from "./Spinner";
import ModeContext from "../context/DarkModeContext";

const DishDetails = () => {
    const { id } = useParams();
    // const dish = dishesData.dishes.find((dish) => dish.id === parseInt(id));
    const [isLoading, setIsLoading] = useState(true);
    const [dish, setDish] = useState(null);
    const { mode } = useContext(ModeContext);

    useEffect(() => {
        // Simulating an asynchronous data fetch
        setTimeout(() => {
            const fetchedDish = dishesData.dishes.find(
                (item) => item.id === parseInt(id)
            );
            setDish(fetchedDish);
            setIsLoading(false);
        }, 2000); // Simulating a 2-second delay
    }, [id]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    return (
        <div
            className={`p-2 md:p-4 flex gap-2 md:gap-20 flex-col md:flex-row ${
                mode ? " bg-slate-600" : " bg-white"
            }`}
        >
            <div className="w-full md:w-[400px] md:h-[350px] h-[200px] mb-4">
                <img
                    src={`${process.env.PUBLIC_URL}/images/${dish.image}`}
                    alt=""
                    className="h-full w-full rounded"
                />
            </div>
            <div>
                <Typography
                    variant="h6"
                    component="h2"
                    className="text-2xl font-semibold mb-4"
                >
                    {dish.name}
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-2">
                    <span className=" font-bold"> Description:</span>{" "}
                    {dish.description}
                </Typography>
                <Typography variant="body1" className="font-semibold mb-2">
                    <span className=" font-bold"> Price:</span> ${dish.price}
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-2">
                    <span className=" font-bold"> Ingredients:</span>{" "}
                    {dish.ingredients}
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                    <span className=" font-bold"> Preparation Time:</span>{" "}
                    {dish.preparation_time}
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                    <span className=" font-bold"> Dietary tags:</span>{" "}
                    {dish.dietary_tags.join(",")}
                </Typography>
            </div>
        </div>
    );
};

export default DishDetails;
