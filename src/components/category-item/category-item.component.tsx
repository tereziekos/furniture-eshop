import React from "react";
import "./category-item.styles.scss";

interface Category {
  title: string;
  subtitle: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { title, subtitle, imageUrl, id } = category;

  return (
    <div className="category-container" key={id}>
      <img src={imageUrl} alt={title} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
