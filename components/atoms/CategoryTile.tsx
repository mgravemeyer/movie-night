import {Category} from "../../types/Category";

type CategoryTileProps = {
    category: Category
}

const CategoryTile = ({category}: CategoryTileProps) => {

    return (
        <div className='flex flex-col items-center gap-y-2'>
            <div className='min-w-[300px] h-32 bg-red-400 rounded-md'>
            </div>
            <h4 className='font-quicksandBook'>{category.name}</h4>
        </div>
    )
}

export default CategoryTile;