interface Category {
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
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 1,
      linkUrl: "sofas",
    },
    {
      title: "Armchairs",
      subtitle: "Shop now",
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 2,
      linkUrl: "armchairs",
    },

    {
      title: "Dining Chairs",
      subtitle: "Shop now",
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 3,
      linkUrl: "dining-chairs",
    },
    {
      title: "Stools",
      subtitle: "Shop now",
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 4,
      linkUrl: "stools",
    },
    {
      title: "Dining room",
      subtitle: "Shop now",
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 5,
      linkUrl: "dining-room",
    },
    {
      title: "Living room",
      subtitle: "Shop now",
      imageUrl:
        "https://www.ikea.com/images/ektorp-three-seat-sofa-10-year-guarantee__1364485295954-s5-250x250.jpg",
      id: 6,
      linkUrl: "living-room",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, subtitle, imageUrl, id }) => (
        <div className="category-container" key={id}>
          <img src={imageUrl} alt={title} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
