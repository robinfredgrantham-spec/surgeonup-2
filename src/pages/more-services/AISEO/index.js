import Link from 'next/link';
import styles from '../ms-styles.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../images/logo.jpg';
import Tapme from '../images/tapme.png';
import Pricing2 from '../images/pricing2.png';

export default function MoreServices() {
  return (
    <div>
      <div
        className={`${styles.buttonContainer} mx-auto md:my-10 max-w-[100px] scale-100 md:scale-150 lg:scale-200   flex justify-center items-center  `}
      >
        <Link href={'/more-services'}>
          <button className="!bg-[#32ffcc] !max-w-[80px] !text-[7px] px-1 text-center flex justify-center !underline-none !decoration-none items-center !font-medium !tracking-tight">
            MORE SERVICES
          </button>
        </Link>
      </div>
      <div
        className={`bg-[#3366FF] p-3 !pb-32 max-h-[90vh]   justify-center items-center flex flex-col`}
      >
        <div
          className={`${styles.moreServicesContainer}  rounded-2xl overflow-y-scroll justify-start  items-center flex flex-col !p-0 `}
        >
          <h3 className="!text-[#3366FF] !p-0 !m-0 !px-4 !py-0 ">AISEO</h3>
          <div
            className={`justify-between !mx-0 !my-0 !p-0 !px-2 !py-0 flex flex-col md:h-[30vh]   text-[#3366FF]  font-medium tracking-tighter text-sm 
              `}
          >
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              AI Search Engines are reshaping how Clients discover Surgeons like
              you. Platforms like ChatGPT, Perplexity, and Google&apos;s AI
              Overview are now available.
            </p>{' '}
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              They answer millions of health queries daily. When someone asks,
              &quot;Best rhinoplasty surgeon near me,&quot; AI doesn&apos;t just
              give a list of websites. It offers recommendations with context.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              Being featured in AI responses is the new frontier of digital
              visibility.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              AI engines prioritise authoritative, structured content that
              answers patient questions. They get their information from
              verified sources, reviews, and detailed service descriptions.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              If your practice isn&apos;t optimised for AI discovery,
              you&apos;re invisible. A growing section of Clients now trusts AI
              when searching for a Surgeon.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              The vast majority of practices haven&apos;t even started AI Search
              optimisation.
            </p>
            <p className="m-0 leading-tight md:text-lg md:leading-[1.1]">
              Don&apos;t fall behind! Get in now, ride the crest of the wave!
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
