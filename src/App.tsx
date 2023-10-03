import React from "react";
import CategoryDirectory from "./components/category-directory/category-directory.component";


export interface Category {
  title: string;
  subtitle: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}


const App = () => {
  const categories: Category[] = [
    {
      title: "Sofas",
      subtitle: "Shop now",
      imageUrl: "/images/sofa/paul-weaver-nWidMEQsnAQ-unsplash.jpg",
      id: 1,
      linkUrl: "sofas",
    },
    {
      title: "Armchairs",
      subtitle: "Shop now",
      imageUrl: "/images/armchair/daniil-silantev-1P6AnKDw6S8-unsplash.jpg",
      id: 2,
      linkUrl: "armchairs",
    },

    {
      title: "Dining Chairs",
      subtitle: "Shop now",
      imageUrl:
        "/images/dining chair/krisztian-tabori-4nmn1QSbrIA-unsplash.jpg",
      id: 3,
      linkUrl: "dining-chairs",
    },
    {
      title: "Stools",
      subtitle: "Shop now",
      imageUrl: "/images/stool/gahara-putra-qqPGw4iQHw0-unsplash.jpg",
      id: 4,
      linkUrl: "stools",
    },
    {
      title: "Dining room seating",
      subtitle: "Shop now",
      imageUrl: "/images/room/jonathan-borba-COzqEKjaxqo-unsplash.jpg",
      id: 5,
      linkUrl: "dining-room",
    },
    {
      title: "Living room seating",
      subtitle: "Shop now",
      imageUrl: "/images/room/spacejoy-c0JoR_-2x3E-unsplash.jpg",
      id: 6,
      linkUrl: "living-room",
    },
  ];


  return (
    <div>
<CategoryDirectory categories={categories}  />
    </div>
  );
};
export default App;
