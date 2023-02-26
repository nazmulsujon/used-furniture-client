import React from "react";
//Import react reveal
import Fade from "react-reveal/Fade";
import { AiFillCheckCircle } from "react-icons/ai";

const Specialities = () => {
  return (
    <div className="mt-10 mx-2">
      <div className="section-title font-bold text-xl md:text-2xl text-center text-info">
        <Fade left>
          <h1>بعض تخصصاتنا</h1>
        </Fade>
      </div>
      <div className="md:flex items-center justify-center font-serif text-right">
        <Fade right>
          <div className="px-2 pt-5">
            <h3 className="text-2xl lg:text-4xl text-secondary mb-2 flex items-center justify-end">
              عمالة مدربة <AiFillCheckCircle className="ml-1 text-green-600 text-2xl"></AiFillCheckCircle>
            </h3>
            <p className="text-xl">
              نمتلك العمالة المتخصصة ، في مجال الاثاث المستعمل ، تضمن لعملائها اتمام كافة المهام المطلوبة ، يمكنك
              الاعتماد علينا بمناطق الدمام والخبر والقطيف والظهران.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="px-2 py-5">
            <h3 className="text-2xl lg:text-4xl text-secondary mb-2 flex items-center justify-end">
              اسعار مميزة <AiFillCheckCircle className="ml-1 text-green-600 text-2xl"></AiFillCheckCircle>
            </h3>
            <p className="text-xl">
              تقدر الشركة قيمة الاثاث جيدا ، لذلك تقوم بشراء الاثاث المستعملة باعلى سعر ، لذلك يمكنك ان تحصل على اعلى
              عائد ، فقط اتصل بنا لارسال افضل فريق مدرب .
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className="px-2 py-5">
            <h3 className="text-2xl lg:text-4xl text-secondary mb-2 flex items-center justify-end">
              افضل الخدمات <AiFillCheckCircle className="ml-1 text-green-600 text-2xl"></AiFillCheckCircle>
            </h3>
            <p className="text-xl">
              توفر الشركة افضل الخدمات المميزة لعملائها ، التى توفر الوقت و الجهد ، و التى تتم من خلال احدث الاساليب و
              الطرق ، فقط لدينا فى الشركة ستحصل على افضل المزايا .
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Specialities;
