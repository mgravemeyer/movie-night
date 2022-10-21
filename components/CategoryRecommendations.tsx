import CategoryTile from "./atoms/CategoryTile";
import {useState, useEffect} from "react";
import {Category} from "../types/Category";

enum times {
    "Morning",
    "Afternoon",
    "Evening",
    "Night"
}

const CategoryRecommendations = () => {

    const getTimeDescriptionCode = (time): number => {
        console.log(time)
        switch (time) {
            case (time > 0 && time < 12):
                return 0
            case (time > 12 && time < 17):
                return 1
            case (time > 17 && time < 20):
                return 2
            default:
                return 3
        }
    }

    const MINUTE_MS = 60000;
    const [time, setTime] = useState<number>(0)

    useEffect(() => {
        const date = new Date();
        date.toLocaleString('en-US', {
            hour12: false,
        })
        // const interval = setInterval(() => {
        //     setTime(getTimeDescriptionCode(date.getHours()))
        // }, MINUTE_MS)
        // return () => clearInterval(interval);
    }, [MINUTE_MS])

    const [categories, setCategories] = useState<Category[]>([
        {
            name: 'Horror',
            imageURL: ''
        },
        {
            name: 'Comedy',
            imageURL: ''
        },
        {
            name: 'Action',
            imageURL: ''
        },
        {
            name: 'Test4',
            imageURL: ''
        },
        {
            name: 'Test5',
            imageURL: ''
        },
        {
            name: 'Test6',
            imageURL: ''
        },
        {
            name: 'Test7',
            imageURL: ''
        }
    ])

    return (
        <div className='w-full h-96 flex justify-center bg-gradient-to-b from-white to-slate-100'>
            <div className='flex flex-col justify-center items-center w-full gap-y-8'>
                <h3 className='text-stone-500 text-3xl font-quicksandBook'>Movie {times[time]}</h3>
                <div className='flex gap-x-4 overflow-scroll shrink-0 w-full drop-shadow-xl'>
                    {categories.map(category => {
                        return (
                            <CategoryTile category={category} />
                        )
                    })}
                </div>
                <div className='flex gap-x-4'>
                    <button className='flex justify-center items-center text-white bg-cyan-500 rounded-full h-12 w-12 font-quicksandBook'>
                        Back
                    </button>
                    <button className='font-quicksandBook'>
                        All Categories
                    </button>
                    <button className='flex justify-center items-center text-white bg-cyan-500 rounded-full h-12 w-12 font-quicksandBook'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryRecommendations;