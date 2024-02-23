import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function Breadcrumb({ categories }: { categories: string[] }) {
  return (
    <div className="breadcrumb-container">
      {categories.length === 0 && <br />}
      {categories.length > 0 && (
        <div className="breadcrumb">
          {categories.map((category, index) => (
            <span key={index}>
              {index === categories.length - 1 ? (
                <span className="last-category-name"> {category}</span>
              ) : (
                <span className="category-name"> {category}</span>
              )}

              {index < categories.length - 1 && <MdOutlineKeyboardArrowRight className="breadcrumb-icon" />}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
