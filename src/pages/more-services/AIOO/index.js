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
        className={`  bg-[#3366FF] p-3 !pb-20    max-h-[93vh]     justify-around items-center flex flex-col`}
      >
        <div
          className={`${styles.moreServicesContainer}  rounded-2xl overflow-y-scroll md:overflow-y-hidden sm:max-h-70 justify-start items-center flex flex-col !p-0 `}
        >
          <h3 className="!text-[#3366FF] !p-0 !m-0 !px-4 !py-0 ">AIOO</h3>
          <div
            className={`justify-between !mx-0 !my-0 !p-0 !px-2  !py-0 flex flex-col md:font-bold   text-[#3366FF]  font-medium h-[70vh] tracking-tighter text-sm 
              `}
          >
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              Google&apos;s AI Overviews represent the future of search, already
              starting to appear above even Paid Ads (PPC)! This is where
              tomorrow&apos;s Clients will find you.
            </p>{' '}
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              As search evolves, AI Overviews will dominate discovery. When
              someone searches &quot;best facelift surgeon&quot;, Google&apos;s
              AI blends &ldquo;mentions&rdquo; from all authoritative sources.
              You must be among them.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              AIOO positions you for this inevitable shift. Practices optimised
              now will gain massive visibility as AI-driven search becomes the
              norm,
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              It will build the trust that is so crucial for Surgeons through
              recommendations.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              This isn&apos;t just another marketing trend—it&apos;s the next
              era of digital discovery.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              {' '}
              Most Surgeons haven&apos;t heard of AIOO. Jump on now, ride the
              wave with Surge-on Up
              <Image src={logo} height={12} width={15} alt="Logo" />
            </p>
          </div>
        </div>
        <div className=" justify-center items-center flex bg-[#3366FF] pt-3 pb-2">
          <div className="max-w-[400px] md:max-w-[400px]">
            <Image src={Pricing2} alt="Logo" />
          </div>
        </div>
        <div className=" justify-center items-center flex py-1 ">
          <div className="max-w-[400px] md:max-w-[400px]">
            <Image src={Tapme} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
