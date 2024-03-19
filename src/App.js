// import "./App.css";
// import ImageUploader from "./components/slide1/ImageUploader";
// import Form from "./components/slide2/Form";
// import Success from "./components/slide3/Success";
// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({});

//   // Function to update form data
//   const updateFormData = (formdata) => {
//     setFormData(formdata);
//   };

//   const data = [
//     { id: "1", SlideTitle: "Slide 1", SlideContent: <ImageUploader /> },
//     {
//       id: "2",
//       SlideTitle: "Slide 2",
//       SlideContent: <Form updateFormData={updateFormData} />,
//     },
//     {
//       id: "3",
//       SlideTitle: "Slide 3",
//       SlideContent: <Success formData={formData} />,
//     },
//   ];

//   const [visibleSlide, setVisibleSlide] = useState(data[0].id);

//   const handleNextSlide = () => {
//     const currentIndex = data.findIndex((item) => item.id === visibleSlide);
//     const nextIndex = (currentIndex + 1) % data.length; // Loop back to the first slide if the last slide is reached
//     setVisibleSlide(data[nextIndex].id);
//   };

//   const progress =
//     ((parseInt(visibleSlide) - 1) / (data.length - 1)) * 100 + "%";

//   const listTitles = data.map((item) => (
//     <li
//       key={item.id}
//       onClick={() => setVisibleSlide(item.id)}
//       className={
//         visibleSlide === item.id
//           ? "Slide-title Slide-title--active"
//           : "Slide-title"
//       }
//     >
//       {item.SlideTitle}
//     </li>
//   ));

//   const listContent = data.map((item, index) => (
//     <div
//       key={item.id}
//       style={visibleSlide === item.id ? {} : { display: "none" }}
//     >
//       {item.SlideContent}
//       {index < data.length - 1 && visibleSlide === item.id && (
//         <button onClick={handleNextSlide}>Next</button>
//       )}
//     </div>
//   ));

//   return (
//     <div className="App">
//       <ul className="Slides-titles">{listTitles}</ul>
//       <div className="ProgressBar" style={{ width: progress }}></div>
//       <div className="Slide-content">{listContent}</div>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import ImageUploader from "./components/slide1/ImageUploader";
import Form from "./components/slide2/Form";
import Success from "./components/slide3/Success";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  // Function to update form data
  const updateFormData = (formdata) => {
    setFormData(formdata);
  };

  const data = [
    { id: "1", SlideTitle: "Slide 1", SlideContent: <ImageUploader /> },
    {
      id: "2",
      SlideTitle: "Slide 2",
      SlideContent: <Form updateFormData={updateFormData} />,
    },
    {
      id: "3",
      SlideTitle: "Slide 3",
      SlideContent: <Success formData={formData} />,
    },
  ];

  const [visibleSlide, setVisibleSlide] = useState(data[0].id);

  const handleNextSlide = () => {
    const currentIndex = data.findIndex((item) => item.id === visibleSlide);
    const nextIndex = (currentIndex + 1) % data.length; // Loop back to the first slide if the last slide is reached
    setVisibleSlide(data[nextIndex].id);
  };

  const progress =
    (data.findIndex((item) => item.id === visibleSlide)+1 / (data.length - 1)) * .3


  const listTitles = data.map((item) => (
    <li
      key={item.id}
      onClick={() => setVisibleSlide(item.id)}
      className={
        visibleSlide === item.id
          ? "Slide-title Slide-title--active"
          : "Slide-title"
      }
    >
      {item.SlideTitle}
    </li>
  ));

  const listContent = data.map((item, index) => (
    <div
      key={item.id}
      style={visibleSlide === item.id ? {} : { display: "none" }}
    >
      {item.SlideContent}
      {index < data.length - 1 && visibleSlide === item.id && (
        <button onClick={handleNextSlide}>Next</button>
      )}
    </div>
  ));

  return (
    <div className="App">
      <ul className="Slides-titles">{listTitles}</ul>
      <div className="ProgressBar" style={{ width: `${progress * 100}%` }}>
        {/* Optional: Add visual elements within the progress bar */}
      </div>
      <div className="Slide-content">{listContent}</div>
    </div>
  );
}

export default App;
