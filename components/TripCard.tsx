// components/TripCard.tsx

import Image from "next/image";

interface TripCardProps {
  mainImage: string;
  mainTitle: string;
  mainDate: string;
  mainAuthor: string;
  mainPeopleCount: number;
  overlayImage: string;
  overlayTitle: string;
  overlayCompletion: number;
}

const TripCard: React.FC<TripCardProps> = ({
  mainImage,
  mainTitle,
  mainDate,
  mainAuthor,
  mainPeopleCount,
  overlayImage,
  overlayTitle,
  overlayCompletion,
}) => {
  return (
    <div  className="relative p-4 bg-white rounded-lg z-10 shadow-md max-w-sm">
        
      <div className="overflow-hidden rounded-lg">
        <Image
          src={mainImage}
          alt={mainTitle}
          width={400}
          height={250}
          className="object-cover w-full h-52 rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{mainTitle}</h2>
        <p className="text-gray-500">
          {mainDate} &bull; by {mainAuthor}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center space-x-1">
            <svg
              width="38"
              height="39"
              viewBox="0 0 38 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.9918" cy="19.5876" r="18.7794" fill="#F5F5F5" />
              <g clip-path="url(#clip0_76_2229)">
                <path
                  d="M25.9344 13.4851C25.5495 13.3725 16.1358 12.4352 12.8297 16.9018C11.3655 18.8804 11.3435 21.5929 12.7564 24.9631C12.398 25.707 12.0842 26.4906 11.8285 27.3174C11.7508 27.5687 11.8914 27.8351 12.1424 27.9125C12.1892 27.9271 12.2365 27.9339 12.2833 27.9339C12.4862 27.9339 12.6746 27.8029 12.7375 27.5987C15.2572 19.4522 23.446 15.511 25.9572 14.5154C26.2016 14.4184 26.5281 13.6589 25.9344 13.4851Z"
                  fill="#84829A"
                />
                <path
                  d="M14.2676 25.9826C15.6305 26.5544 16.9933 26.8475 18.2606 26.8475C19.3997 26.8475 20.462 26.6133 21.3774 26.1384C23.2196 25.1827 24.3454 23.3546 24.6329 20.8512C24.9258 18.2999 25.2904 16.7019 25.5946 15.7242C22.887 16.9732 17.0812 20.2107 14.2676 25.9826Z"
                  fill="#84829A"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_2229">
                  <rect
                    width="14.6062"
                    height="14.6062"
                    fill="white"
                    transform="translate(11.6887 13.3278)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.3299" cy="19.5876" r="18.7794" fill="#F5F5F5" />
              <g clip-path="url(#clip0_76_2243)">
                <path
                  d="M25.0689 12.2845C24.9879 12.2845 24.908 12.3033 24.8355 12.3396L20.8825 14.3166L16.4126 12.3297C16.4053 12.3265 16.3969 12.326 16.3891 12.3229C16.369 12.3154 16.3484 12.3091 16.3276 12.3041C16.3068 12.2985 16.2857 12.2941 16.2644 12.2911C16.2221 12.2876 16.1795 12.2876 16.1372 12.2911C16.1159 12.2941 16.0948 12.2985 16.074 12.3041C16.0532 12.3091 16.0326 12.3154 16.0125 12.3229C16.0047 12.326 15.9963 12.3265 15.989 12.3297L11.2942 14.4162C11.1058 14.4999 10.9843 14.6868 10.9844 14.893V26.3691C10.9845 26.5456 11.0737 26.7101 11.2217 26.8062C11.3697 26.9026 11.5564 26.9175 11.7178 26.8459L16.2008 24.8532L20.6838 26.8459C20.6916 26.849 20.6999 26.8459 20.7078 26.8506C20.834 26.9071 20.979 26.9038 21.1026 26.8417C21.111 26.8381 21.1203 26.8417 21.1287 26.836L25.3018 24.7494C25.4787 24.661 25.5904 24.4803 25.5903 24.2825V12.8064C25.5905 12.5183 25.357 12.2847 25.0689 12.2845ZM15.6791 23.9435L12.0276 25.5663V15.2321L15.6791 13.6092V23.9435ZM20.3739 25.5663L16.7224 23.9435V13.6092L20.3739 15.232V25.5663ZM24.547 23.9602L21.4172 25.5251V15.2154L24.547 13.6504V23.9602Z"
                  fill="#84829A"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_2243">
                  <rect
                    width="14.6062"
                    height="14.6062"
                    fill="white"
                    transform="translate(10.9835 12.2845)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.4516" cy="19.5876" r="18.7794" fill="#F5F5F5" />
              <path
                d="M25.0263 14.624L18.4353 21.2394C18.3597 21.1956 18.2803 21.159 18.1979 21.1299L13.8465 19.6571C13.7149 19.6241 13.5981 19.5481 13.5147 19.4411C13.4312 19.3342 13.3859 19.2024 13.3859 19.0667C13.3859 18.9311 13.4312 18.7993 13.5147 18.6923C13.5981 18.5854 13.7149 18.5094 13.8465 18.4764L24.6429 14.6362C24.7135 14.6122 24.7875 14.5999 24.862 14.5997C24.9177 14.5988 24.9732 14.607 25.0263 14.624Z"
                fill="#84829A"
              />
              <path
                d="M25.4463 15.4396L21.6061 26.2481C21.5638 26.3741 21.4814 26.4828 21.3715 26.5575C21.2616 26.6322 21.1302 26.6689 20.9975 26.662C20.8633 26.6681 20.7308 26.6297 20.6207 26.5526C20.5106 26.4755 20.4291 26.3642 20.3889 26.236L18.9405 21.8845C18.9114 21.8022 18.8747 21.7228 18.8309 21.6472L25.4585 15.0562C25.4959 15.1819 25.4916 15.3164 25.4463 15.4396Z"
                fill="#84829A"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-600 flex">
            <span className="pr-2">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.360699 16.759H2.02998V7.57801C2.02998 7.42436 2.15455 7.29979 2.30819 7.29979H6.20317V0.900894C6.20317 0.747251 6.32774 0.622681 6.48139 0.622681H13.7149C13.8686 0.622681 13.9931 0.747251 13.9931 0.900894V16.759H16.4971C16.6507 16.759 16.7753 16.8836 16.7753 17.0373C16.7753 17.1909 16.6507 17.3155 16.4971 17.3155H0.360699C0.207056 17.3155 0.0824852 17.1909 0.0824852 17.0373C0.0824852 16.8836 0.207056 16.759 0.360699 16.759ZM10.9328 16.759H12.0456V14.2551C12.0456 14.1015 11.9211 13.9769 11.7674 13.9769H11.211C11.0574 13.9769 10.9328 14.1015 10.9328 14.2551V16.759ZM9.81994 7.57801V16.759H10.3764V14.2551C10.3764 13.7942 10.75 13.4205 11.211 13.4205H11.7674C12.2284 13.4205 12.6021 13.7942 12.6021 14.2551V16.759H13.4367V1.17911H6.7596V7.29979H9.54173C9.69537 7.29979 9.81994 7.42436 9.81994 7.57801ZM2.5864 16.759H9.26352V7.85622H2.5864V16.759Z"
                  fill="#84829A"
                />
                <path
                  d="M7.87233 4.5177H9.54161C9.69525 4.5177 9.81982 4.64227 9.81982 4.79591V6.46519C9.81982 6.61883 9.69525 6.7434 9.54161 6.7434H7.87233C7.71869 6.7434 7.59412 6.61883 7.59412 6.46519V4.79591C7.59412 4.64227 7.71869 4.5177 7.87233 4.5177ZM8.15055 6.18698H9.2634V5.07413H8.15055V6.18698Z"
                  fill="#84829A"
                />
                <path
                  d="M7.87233 1.73547H9.54161C9.69525 1.73547 9.81982 1.86004 9.81982 2.01369V3.68297C9.81982 3.83661 9.69525 3.96118 9.54161 3.96118H7.87233C7.71869 3.96118 7.59412 3.83661 7.59412 3.68297V2.01369C7.59412 1.86004 7.71869 1.73547 7.87233 1.73547ZM8.15055 3.40475H9.2634V2.2919H8.15055V3.40475Z"
                  fill="#84829A"
                />
                <path
                  d="M10.6546 4.5177H12.3238C12.4775 4.5177 12.6021 4.64227 12.6021 4.79591V6.46519C12.6021 6.61883 12.4775 6.7434 12.3238 6.7434H10.6546C10.5009 6.7434 10.3763 6.61883 10.3763 6.46519V4.79591C10.3763 4.64227 10.5009 4.5177 10.6546 4.5177ZM10.9328 6.18698H12.0456V5.07413H10.9328V6.18698Z"
                  fill="#84829A"
                />
                <path
                  d="M10.6546 1.73547H12.3238C12.4775 1.73547 12.6021 1.86004 12.6021 2.01369V3.68297C12.6021 3.83661 12.4775 3.96118 12.3238 3.96118H10.6546C10.5009 3.96118 10.3763 3.83661 10.3763 3.68297V2.01369C10.3763 1.86004 10.5009 1.73547 10.6546 1.73547ZM10.9328 3.40475H12.0456V2.2919H10.9328V3.40475Z"
                  fill="#84829A"
                />
                <path
                  d="M10.6546 7.29968H12.3238C12.4775 7.29968 12.6021 7.42425 12.6021 7.5779V9.24717C12.6021 9.40082 12.4775 9.52539 12.3238 9.52539H10.6546C10.5009 9.52539 10.3763 9.40082 10.3763 9.24717V7.5779C10.3763 7.42425 10.5009 7.29968 10.6546 7.29968ZM10.9328 8.96896H12.0456V7.85611H10.9328V8.96896Z"
                  fill="#84829A"
                />
                <path
                  d="M10.6546 10.0819H12.3238C12.4775 10.0819 12.6021 10.2065 12.6021 10.3601V12.0294C12.6021 12.183 12.4775 12.3076 12.3238 12.3076H10.6546C10.5009 12.3076 10.3763 12.183 10.3763 12.0294V10.3601C10.3763 10.2065 10.5009 10.0819 10.6546 10.0819ZM10.9328 11.7512H12.0456V10.6383H10.9328V11.7512Z"
                  fill="#84829A"
                />
                <path
                  d="M5.36839 13.4204H3.69912C3.54547 13.4204 3.4209 13.2958 3.4209 13.1422V11.4729C3.4209 11.3193 3.54547 11.1947 3.69912 11.1947H5.36839C5.52204 11.1947 5.64661 11.3193 5.64661 11.4729V13.1422C5.64661 13.2958 5.52204 13.4204 5.36839 13.4204ZM5.09018 11.7511H3.97733V12.864H5.09018V11.7511Z"
                  fill="#84829A"
                />
                <path
                  d="M5.36839 10.6382H3.69912C3.54547 10.6382 3.4209 10.5136 3.4209 10.36V8.69069C3.4209 8.53705 3.54547 8.41248 3.69912 8.41248H5.36839C5.52204 8.41248 5.64661 8.53705 5.64661 8.69069V10.36C5.64661 10.5136 5.52204 10.6382 5.36839 10.6382ZM5.09018 8.9689H3.97733V10.0818H5.09018V8.9689Z"
                  fill="#84829A"
                />
                <path
                  d="M5.36839 16.2026H3.69912C3.54547 16.2026 3.4209 16.0781 3.4209 15.9244V14.2551C3.4209 14.1015 3.54547 13.9769 3.69912 13.9769H5.36839C5.52204 13.9769 5.64661 14.1015 5.64661 14.2551V15.9244C5.64661 16.0781 5.52204 16.2026 5.36839 16.2026ZM5.09018 14.5334H3.97733V15.6462H5.09018V14.5334Z"
                  fill="#84829A"
                />
                <path
                  d="M8.15062 13.4204H6.48134C6.3277 13.4204 6.20313 13.2958 6.20313 13.1422V11.4729C6.20313 11.3193 6.3277 11.1947 6.48134 11.1947H8.15062C8.30426 11.1947 8.42883 11.3193 8.42883 11.4729V13.1422C8.42883 13.2958 8.30426 13.4204 8.15062 13.4204ZM7.87241 11.7511H6.75955V12.864H7.87241V11.7511Z"
                  fill="#84829A"
                />
                <path
                  d="M8.15062 10.6382H6.48134C6.3277 10.6382 6.20313 10.5136 6.20313 10.36V8.69069C6.20313 8.53705 6.3277 8.41248 6.48134 8.41248H8.15062C8.30426 8.41248 8.42883 8.53705 8.42883 8.69069V10.36C8.42883 10.5136 8.30426 10.6382 8.15062 10.6382ZM7.87241 8.9689H6.75955V10.0818H7.87241V8.9689Z"
                  fill="#84829A"
                />
                <path
                  d="M8.15062 16.2026H6.48134C6.3277 16.2026 6.20313 16.0781 6.20313 15.9244V14.2551C6.20313 14.1015 6.3277 13.9769 6.48134 13.9769H8.15062C8.30426 13.9769 8.42883 14.1015 8.42883 14.2551V15.9244C8.42883 16.0781 8.30426 16.2026 8.15062 16.2026ZM7.87241 14.5334H6.75955V15.6462H7.87241V14.5334Z"
                  fill="#84829A"
                />
              </svg>
            </span>{" "}
            {mainPeopleCount} people going
          </div>
          <button className="text-purple-500 hover:text-purple-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21l-6-6m0 0l6-6m-6 6h18"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" absolute ml-48   top-48 lg:left-[20px] right-4 w-[200px] flex items-center p-2 bg-white shadow-md rounded-md">
        <div className="relative w-10 h-10  rounded-full">
          <Image
            src={overlayImage}
            alt={overlayTitle}
            width={40}
            height={40}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm font-medium">{overlayTitle}</p>
          <div className="text-xs text-gray-400">Ongoing</div>
          <div className="w-full bg-gray-200 rounded-full mt-1">
            <div
              className="h-1 bg-purple-500 rounded-full"
              style={{ width: `${overlayCompletion}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;