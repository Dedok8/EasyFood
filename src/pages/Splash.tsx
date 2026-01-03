import dish_1 from "@/assets/Splash/dish_1.png";
import dish_2 from "@/assets/Splash/dish_2.png";
import "@/shared/styles/scss/circle.scss";

function Splash() {
  return (
    <div className="min-h-screen pl-8 relative">
      <div className="absolute -left-25">
        <div className="w-[400px] h-[400px]">
          <img
            src={dish_1}
            alt="dish_1"
            className="absolute z-99 w-full h-auto"
          />

          <div className="circle-background absolute ">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div className="absolute -right-25 bottom-15">
        <div className="w-[400px] h-[400px]">
          <img
            src={dish_2}
            alt="dish_2"
            className="absolute z-99 w-full h-auto"
          />

          <div className="circle-background absolute ">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div className="flex items-end min-h-screen">
        <div className=" max-w-2xl pb-8">
          <h1 className="text-7xl pb-9">
            Eat
            <span className="text-orange-500">
              <strong>Easy</strong>
            </span>
          </h1>

          <p>
            Are you tired of scrolling through menus and struggling to decide
            what to order? Our new restaurant app has got you covered with
            personalized recommendations from our digital assistant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Splash;
