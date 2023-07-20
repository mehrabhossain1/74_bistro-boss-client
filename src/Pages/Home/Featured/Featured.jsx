import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
      <SectionTitle
        subHeading='Check It Out'
        heading='Featured Item'
      ></SectionTitle>
      <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
        <div>
          <img src={featuredImg} alt='' />
        </div>
        <div className='md:ml-10'>
          <p>Aug 20, 2029</p>
          <p className='uppercase'>Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            velit illo praesentium eaque illum voluptatibus eius aperiam laborum
            minus! Earum quam iste numquam minima beatae. Molestiae sint maxime
            corporis numquam, tenetur nihil debitis nisi omnis ut quos
            voluptatem quaerat ratione at laboriosam, earum quisquam delectus
            beatae fugiat consequatur rem! Non?
          </p>
          <button className='btn btn-outline border-0 border-b-4 mt-4'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
