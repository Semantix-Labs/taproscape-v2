// components/Overview.tsx
import Image from 'next/image';

type OverviewItem = {
  id: number;
  title: string;
  image: string;
};

const overviewItems: OverviewItem[] = [
    { id: 1, title: 'Name of the Image', image: '/Destination/o1.png' },
    { id: 2, title: 'Name of the Image', image: '/Destination/o2.png' },
    { id: 3, title: 'Name of the Image', image: '/Destination/o3.png' },
  ];

const Overview = () => {
  return (
    <div className="py-12 bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative flex ">
          {overviewItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute shadow-lg top-[-100px] right-0 rounded-xl overflow-hidden transform transition-transform duration-300 ${index === 0 ? 'z-0 w-[171px] hidden md:inline mt-10 lg:h-[202px] md:h-[132px] md:w-[101px] xl:h-[241px] xl:w-[272px] top-0' : index === 1 ? 'z-10 lg:w-[207px] mt-5 lg:h-[249px] md:h-[181px] md:w-[137px] xl:h-[319px] xl:w-[277px]' : 'z-20  lg:w-[242px] lg:h-[300px] md:w-[172px] md:h-[230px] xl:h-[375px] xl:w-[312px] right-0'} ${index === 0 ? 'md:translate-x-[-210px] lg:translate-x-[-280px]' : index === 1 ? 'md:translate-x-[-130px] xl:translate-x-[-200px]' : 'translate-x-0'}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover rounded-xl w-full h-full"
                layout="fill"
              />
              <div className="absolute bottom-2 left-1 right-1 rounded-lg bg-black bg-opacity-100 text-white p-2 text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <div className="flex mb-10  text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">our</h2>
              <div className="image-container relative">
                <img src="/textbg.png" className='w-[250px] h-12' alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 text-white bottom-5"
                  >
                   overview
                  </p>
                </div>
              </div>
            </div>
          <p className="mt-4 text-lg font-lexendDeca">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
