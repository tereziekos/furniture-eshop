import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import "./category-directory.styles.scss";
import { Category } from '../../App';

interface CategoryDirectoryProps {

    categories: Category[];


}

const CategoryDirectory: React.FC<CategoryDirectoryProps> = ({ categories })  => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default CategoryDirectory;