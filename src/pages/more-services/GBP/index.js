import Link from 'next/link';
import styles from '../ms-styles.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../images/logo.jpg';
import Tapme from '../images/tapme.png';
import Pricing2 from '../images/pricing2.png';

export default function MoreServices() {
  return (
    <div className="xl:mt-10 2xl:mt-30 md:mt-10">
      <div
        className={`${styles.buttonContainer} mx-auto md:my-10 max-w-[100px] !sm:max-w-[150px] scale-100 md:scale-150 lg:scale-200  flex justify-center items-center  `}
      >
        <Link href={'/more-services'}>
          <button className="!bg-[#32ffcc] !max-w-[80px] !sm:max-w-[150px] !text-[7px] !sm:text-[20px] px-1 text-center flex justify-center !underline-none !decoration-none items-center !font-medium !tracking-tight">
            MORE SERVICES
          </button>
        </Link>
      </div>
      <div
        className={`!pb-20 max-h-[90vh]     bg-[#3366FF] p-3  justify-center items-center flex flex-col`}
      >
        <div
          className={`${styles.moreServicesContainer}  rounded-2xl overflow-y-scroll md:overflow-y-hidden sm:max-h-80 justify-start items-center flex flex-col !p-0 `}
        >
          <h3 className="!text-[#3366FF] !p-0 !m-0 !px-4 !py-0 ">GBP</h3>
          <div
            className={`justify-between !mx-0 !my-0 !p-0 !px-2 !py-0 flex flex-col md:font-bold   text-[#3366FF]  font-medium h-[70vh] tracking-tighter text-sm 
              `}
          >
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              Your GBP is free 24/7/365 Marketing! It is essential for all
              Aesthetic and Restorative Surgeons.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              Almost half of all Google searches look for local results.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              A well-optimised GBP gets you into the top 3 Local Pack. It is
              prime screen real estate. It appears above regular organic search
              results and has massive visibility and click-through rates. It
              literally puts you on the map.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              It&apos;s often a Client&apos;s first impression of you. It
              displays photos, reviews, hours, your location and services that
              all build the trust that is so crucial.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              <br /> Clients can call, book, and get directions with one tap.
              GBPs with regular posts, review responses, and fresh content
              consistently outperform their competitors.
              <br /> Most practices underutilise their GBP; don&apos;t be one of
              them!
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              The question isn&apos;t whether you can afford to invest in your
              GBP—it&apos;s whether you can afford not to!
              <Image src={logo} height={25} width={30} alt="Logo" />
            </p>
          </div>
        </div>

        <div className=" justify-center items-center flex bg-[#3366FF] pt-3 pb-2">
          <div className="max-w-[400px]">
            <Image src={Pricing2} alt="Logo" />
          </div>
        </div>
        <div className=" justify-center items-center flex py-1 ">
          <div className="max-w-[400px]">
            <Image src={Tapme} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
