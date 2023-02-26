import React from "react";
// react icons
import { GiRoundStar } from "react-icons/gi";
// react reveal
import Fade from "react-reveal/Fade";
// react photoview package
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// image
import aboutIamge from "../../../assets/about-image.webp";
import Specialities from "../../../components/Specialities/Specialities";

const About = () => {
  return (
    <div className="mx-3 lg:mx-12 my-8">
      <Fade top>
        <div className="section-title mx-2 font-bold text-xl md:text-2xl text-center pb-6 text-info">
          <h1>Learn more about us || تعلم المزيد عنا</h1>
        </div>
      </Fade>
      <div className="lg:flex justify-between items-center">
        <Fade left>
          <div className="about-image-box lg:w-1/2 lg:mr-5">
            <PhotoProvider>
              <PhotoView src={aboutIamge}>
                <img src={aboutIamge} alt="aboutIamge" className="w-full lg:h-[540px] rounded-tl-3xl rounded-br-3xl" />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Fade>
        <Fade right>
          <div className="about-descrioption-box lg:w-1/2">
            <h2 className="text-right my-5 lg:mt-0 text-accent text-xl font-bold font-sans">
              نَحْنُ شَرِكَةٌ تَشْتَرِي الْأَثَاثَ الْمُسْتَعْمَلَ فِي الدَمَامِ، الْخُبَرِ، الْقَطِيفِ، الْجُبَيْلِ،
              الْعَشَا
            </h2>
            <ul className="text-right text-secondary text-xl py-5">
              <p className="flex items-center justify-end pb-2">
                "نشتري جميع أثاث منزلك معًا" <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2 ">
                "نشتري جميع أثاث منزلك كمجموعة."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "نشتري جميع أثاث منزلك كصفقة متكاملة."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "سنشتري مجموعتك الكاملة من أثاث المنزل."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "نشتري جميع أثاث منزلك كمجموعة."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "نشتري جميع أثاث منزلك كصفقة متكاملة."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "سنشتري مجموعتك الكاملة من أثاث المنزل."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "إذا كنت تريد بيع كل أثاث منزلك مرة واحدة ، فيمكننا شرائه منك."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "لا داعي لبيع أثاث منزلك قطعة قطعة - يمكننا شرائه دفعة واحدة."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
              <p className="flex items-center justify-end pb-2">
                "قم بتبسيط عملية بيع أثاث منزلك عن طريق بيع كل شيء مرة واحدة - نحن هنا لنشتري كل شيء."
                <GiRoundStar className="text-xs ml-4"></GiRoundStar>
              </p>
            </ul>
          </div>
        </Fade>
      </div>
      <Specialities></Specialities>
    </div>
  );
};

export default About;
