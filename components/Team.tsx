// components/Team.tsx
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

const teamMembers: TeamMember[] = [
 
  { id: 1, name: 'Tiyara  Jayasanka ', position: 'Director ', image: '/comp.jpg' },
  { id: 2, name: 'Aashiq Razool ', position: 'Director ', image: '/comp2.jpg' },
 
  // { id: 4, name: 'Name Lorem Ipsum', position: 'Chief Financial Officer', image: '/aboutUs/t4.jpeg' },
];

const Team = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center text-2xl md:text-2xl lg:text-3xl  xl:text-4xl mb-10 ">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">Meet The</h2>
              <div className="image-container relative">
                <img className="w-28 md:w-full" src="/textbg.png" alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 text-white md:text-2xl lg:text-3xl text-xl xl:text-4xl uppercase bottom-5"
                  >
                   team
                  </p>
                </div>
              </div>
            </div>
        <div className="md:flex justify-center space-y-3 md:space-y-0 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center  md:w-1/4">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full  md:h-72  object-cover rounded-lg"
                width={294}
                height={329}
              />
              <h3 className="mt-4 text-xl font-semibold text-[#001F2B]">{member.name}</h3>
              <p className="mt-2 text-base ">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
