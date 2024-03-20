import "./App.css";
import ImageUploader from "./components/slide1/ImageUploader";
import Form from "./components/slide2/Form";
import Success from "./components/slide3/Success";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const updateFormData = (formdata) => {
    setFormData(formdata);
  };
  const handleNextSlide = () => {
    const currentIndex = data.findIndex((item) => item.id === visibleSlide);
    const nextIndex = (currentIndex + 1) % data.length;
    setVisibleSlide(data[nextIndex].id);
  };
  const data = [
    {
      id: "1",
      SlideTitle: "Step 1",
      SlideContent: <ImageUploader onNext={handleNextSlide} />,
    },
    {
      id: "2",
      SlideTitle: "Step 2",
      SlideContent: (
        <Form updateFormData={updateFormData} onNext={handleNextSlide} />
      ),
    },
    {
      id: "3",
      SlideTitle: "Success",
      SlideContent: <Success formData={formData} />,
    },
  ];

  const [visibleSlide, setVisibleSlide] = useState(data[0].id);

  const progress =
    (data.findIndex((item) => item.id === visibleSlide) +
      1 / (data.length - 1)) *
    0.16;

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
    </div>
  ));

  return (
    <div className="App">
      <div className="Slides">
        <ul className="Slides-titles">{listTitles}</ul>
        <div
          className="ProgressBar"
          style={{ width: `${progress * 100}%` }}
        ></div>
        <div className="Slide-content">{listContent}</div>
      </div>
    </div>
  );
}

export default App;
