// components/Team.tsx
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Name Lorem Ipsum', position: 'Chief Financial Officer', image: '/aboutUs/t1.png' },
  { id: 2, name: 'Name Lorem Ipsum', position: 'Chief Financial Officer', image: '/aboutUs/t2.jpeg' },
  { id: 3, name: 'Name Lorem Ipsum', position: 'Chief Financial Officer', image: '/aboutUs/t3.jpeg' },
  { id: 4, name: 'Name Lorem Ipsum', position: 'Chief Financial Officer', image: '/aboutUs/t4.jpeg' },
];

const Team = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex text-xl md:text-2xl lg:text-3xl mb-5 xl:text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">meet the</h2>
              <div className="image-container relative">
                <img className="w-28 md:w-full" src="/textbg.png" alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 text-white bottom-5"
                  >
                   team
                  </p>
                </div>
              </div>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover rounded-lg"
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
