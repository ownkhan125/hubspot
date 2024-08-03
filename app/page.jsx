'use client';


import Accordian from '@/components/Accordian';
import Achievcard from '@/components/Achievcard';
import Customertab from '@/components/Customertab';
import Featurecard from '@/components/Featurecard';
import Growcard from '@/components/Growcard';
import Productcard from '@/components/Productcard';
import Row from '@/components/Row';
import Servicecard from '@/components/Servicecard';
import style from '@/style/home.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Logo from '@/components/Logo';


export default function Home() {

  const [activeTab, setActiveTab] = useState('tab1');
  const [openAccordian, setOpenAccordian] = useState(null);
  const [number, setNumber] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = (id) => {
    setOpenAccordian(openAccordian === id ? null : id);
  };

  const click = (id) => {
    setNumber(number === id ? null : id);
  }



  return (
    <>
      {/* Start hero-section */}
      <section className={style['hero-section']}>
        <div className="container-1">
          <div className="row justify-between ">
            <div className=" w-[60%]  md:w-[40%] ">
              <div className="ratio-1x1">
                <img src="/images/heropic.png" alt="" />
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] '>
              <div className='flex items-center gap-x-1'>
                <div className={style['logo-wrapper']}>
                  <img src="/images/logo.webp" alt="" />
                </div>
                <h5 className='my-2'>Marketing Hub®</h5>
              </div>
              <h1 className='my-2'>Marketing Software</h1>
              <div className='w-[65%] row gap-2 mb-4'>
                <button className='btn-blue'>Get a demo</button>
                <button className='btn'>Get started free</button>
              </div>

              <ul>
                <li className={`${number === '1' ? style.isopen : ''} `} onClick={() => click('1')}>
                  <div><button className={style.accordian}>
                    <p className='fs-14'>Product Description</p>
                    <FaPlus className='text-blue-800' />
                  </button>
                  </div>
                  <div className={style.content}>
                    <p className='fs-14'>AI-powered marketing software that helps you generate leads and automate marketing.</p>
                  </div>
                </li>

                <li className={`${number === '2' ? style.isopen : ''}`} onClick={() => click('2')}>
                  <div><button className={style.accordian}>
                    <p className='fs-14'>Pricing overview</p>
                    <FaPlus className='text-blue-800' />
                  </button>
                    <div className={style.content}>
                      <p className='fs-14'>AI-powered marketing software that helps you generate leads and automate marketing.</p>
                    </div>
                  </div>

                </li>

                <li className={`${number === '3' ? style.isopen : ''}`} onClick={() => click('3')}>
                  <div>
                    <button className={style.accordian}>
                      <p className='fs-14'>Features</p>
                      <FaPlus className='text-blue-800' />
                    </button>
                  </div>
                  <div className={style.content}>
                    <p className='fs-14'>AI-powered marketing software that helps you generate leads and automate marketing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End hero-section */}

      {/* Start logo-section */}
      <div className='container-1'>
        <div className='text-center flex flex-col gap-[24px] justify-between mb-3'>
          <p className='fs-16'>216,000+ customers in over 135 countries grow their businesses with HubSpot</p>
        </div>

        <div className='relative'>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            className="mySwiper"

            breakpoints={{

              500: {
                slidesPerView: 4,
                spaceBetween: 0,
              },




              767: {
                slidesPerView: 6,
                spaceBetween: 10,
              },

            }}

          >

            <SwiperSlide>
              <Logo img={'/images/casio-logo-2.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/amika for HS Website-1.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/reddit-2.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/Rakuten Advertising.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/weightwatchers.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/MarineMax_Logo_NoTagline-1.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/Fastsigns_logo.svg.png'} />
            </SwiperSlide>

            <SwiperSlide>
              <Logo img={'/images/Monday.com Logo.png'} />
            </SwiperSlide>



          </Swiper>
        </div>

      </div>
      {/* End logo-section */}


      {/* Start marketing-section */}
      <section className={style['marketing-section']}>
        <div className='container-1'>
          <div className='row '>
            <div className='w-[100%] md:w-[50%]'>
              <h4 className='mb-6'>
                All your marketing tools and data can be connected in one place.
              </h4>
              <p className='mb-4'>Marketers are juggling more campaigns under increasing pressure, with no signs of it slowing down.</p>
              <p>Marketing Hub is the all-in-one marketing automation software that connects customer insights through our Smart CRM. Attract attention to your business and collect contacts. Engage leads and customers at the right place and time. </p>

            </div>
            <div className='w-[100%] md:w-[50%] px-6'>
              <div className={style['video-container']}>
                <video
                  className={style['video-element']}
                  crossOrigin="anonymous"
                  playsInline
                  preload="none"
                  id="vjs_video_3_html5_api"
                  tabIndex="-1"
                  src="blob:https://play.hubspotvideo.com/9d8ec230-ba6e-4c03-ad9d-b84ef2549dfa"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  marketing-section */}

      {/* Start solution-section */}
      <div className={`${style['solution-section']} container-1`}>
        <div className='text-center'>
          <h3 className='mb-6'>Solutions to Your Top Marketing Challenges</h3>
        </div>
        <Row
          direction={'flex-row'}
          img={'/images/row-1.png'}
          heading={'Drive Revenue'}
          para1={'Marketing Hub gives your team the tools to tailor marketing offers and messages to your audience. Those insights and personalizations make your offers relevant, attracting quality leads who are ready to convert. '}
          para2={'Now you can combine all of your marketing efforts into one cohesive and impactful approach for engaging customers. '}
        />

        <div>
          <h5 className='mb-6'>Popular Features</h5>
        </div>

        <div className='flex flex-wrap justify-between'>

          <Featurecard
            link={'Form'}
            para={'Generate leads from your website using a powerful online form builder.'}
          />

          <Featurecard
            link={'Email Marketing Tools'}
            para={'Create, personalize, and optimize your marketing emails without waiting on designers or IT.'}
          />

          <Featurecard
            link={'Ads Software'}
            para={'Create personalized and targeted ad campaigns, and see which ads are turning prospects into customers.'}
          />

        </div>

      </div>

      {/* End solution-section */}


      {/* Start resources-section */}
      <div className={`${style['resources-section']} container-1`}>

        <Row
          direction={'flex-row-reverse'}
          img={'/images/resources.png'}
          heading={'Drive Revenue'}
          para1={'Marketing Hub gives your team the tools to tailor marketing offers and messages to your audience. Those insights and personalizations make your offers relevant, attracting quality leads who are ready to convert. '}
          para2={'Now you can combine all of your marketing efforts into one cohesive and impactful approach for engaging customers. '}
        />

        <div>
          <h5 className='mb-6'>Popular Features</h5>
        </div>

        <div className='flex flex-wrap justify-between '>

          <Featurecard
            link={'AI for Marketing'}
            para={'Generate leads from your website using a powerful online form builder.'}
          />

          <Featurecard
            link={'Compaign Management'}
            para={'Create, personalize, and optimize your marketing emails without waiting on designers or IT.'}
          />

          <Featurecard
            link={'Marketing Automation'}
            para={'Create personalized and targeted ad campaigns, and see which ads are turning prospects into customers.'}
          />

        </div>

      </div>



      {/* End resources-section */}


      {/* Start optimize-section */}
      <div className={`${style['solution-section']} container-1`}>
        <div className='text-center'>
          <h3 className='mb-6'>Solutions to Your Top Marketing Challenges</h3>
        </div>
        <Row
          direction={'flex-row'}
          img={'/images/optimize.png'}
          heading={'Measure and Optimize'}
          para1={'Make strategic business decisions that optimize your marketing efforts with the data you need. HubSpot’s advanced marketing reporting tools help you understand your customer journey, track campaign performance, and boost ROI with data-backed decisions.'}
        // para2={'Now you can combine all of your marketing efforts into one cohesive and impactful approach for engaging customers. '}
        />

        <div>
          <h5 className='mb-6'>Popular Features</h5>
        </div>

        <div className='flex flex-wrap justify-between '>

          <Featurecard
            link={'Marketing Analytics'}
            para={'Generate leads from your website using a powerful online form builder.'}
          />

          <Featurecard
            link={'Dashboard & Reporting'}
            para={'Create, personalize, and optimize your marketing emails without waiting on designers or IT.'}
          />

          <Featurecard
            link={'Advanced Marketing Reporting'}
            para={'Create personalized and targeted ad campaigns, and see which ads are turning prospects into customers.'}
          />

        </div>

      </div>

      {/* End optimize-section */}


      {/* Start grows-section */}
      <section className={style['grows-section']}>
        <div className='container-1'>
          <div className='text-center'>
            <h3>Marketing Software That Grows With You</h3>
            <p className='my-6'>Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.</p>
          </div>

          <div className='flex flex-wrap justify-between mb-[30px] '>


            <Growcard
              // logo={'/images/3flash.svg'}
              heading={'Free'}
              month={'$0/month'}
              // seats={'(5 seats included)'}
              li={[
                'Everything in Professional',
                'Predictive lead scoring',
                'Adaptive testing',
                'Multi-touch revenue attribution',
                'Customer journey analytics',

              ]}

            />

            <Growcard
              logo={'/images/flash.svg'}
              heading={'Starter'}
              month={'$20/month'}
              // seats={'(5 seats included)'}
              li={[
                'Everything in Professional',
                'Predictive lead scoring',
                'Adaptive testing',
                'Multi-touch revenue attribution',
                'Customer journey analytics',

              ]}

            />

            <Growcard
              logo={'/images/2flash.svg'}
              heading={'Professinal'}
              month={'$890/month'}
              seats={'(3 seats included)'}
              li={[
                'Everything in Professional',
                'Predictive lead scoring',
                'Adaptive testing',
                'Multi-touch revenue attribution',
                'Customer journey analytics',

              ]}

            />


            <Growcard
              logo={'/images/3flash.svg'}
              heading={'Enterprise'}
              month={'$3,600/month'}
              seats={'(5 seats included)'}
              li={[
                'Everything in Professional',
                'Predictive lead scoring',
                'Adaptive testing',
                'Multi-touch revenue attribution',
                'Customer journey analytics',

              ]}

            />

          </div>

          <div className='w-[60%] flex flex-col md:flex-row gap-5 mx-auto  mb-6'>
            <button className='btn-blue'>Get a demo of premium editions</button>
            <button className='btn'>Get started with free tools</button>
          </div>
          <div className='w-[80%] text-center mx-auto'>
            <p>For more detailed information on product packaging and the limits that apply, please see our
              <Link href={'/'} className='text-blue-700 underline underline-offset-1'> Pricing Page </Link>
              Price shown in USD and subject to applicable tax.
            </p>
          </div>


        </div>
      </section>

      {/* End grows-section */}

      {/* Start service-section */}
      <div className={`${style['service-section']} container-1`}>
        <div className='text-center'>
          <h3 >It’s already easy to use. But we’re still here for you.</h3>
          <p className='my-10'>We’re here to help your whole team stay ahead of the curve as you grow.</p>
        </div>

        <div className='row justify-between mb-10'>
          <Servicecard
            img={'/images/bulb.png'}
            link={'Education'}
            para={'Grow your skills with free HubSpot Academy courses and certifications.'}
          />

          <Servicecard
            img={'/images/people.png'}
            link={'24/7 Customer Support'}
            para={'Grow your skills with free HubSpot Academy courses and certifications.'}
          />

          <Servicecard
            img={'/images/setting.png'}
            link={'Apps'}
            para={'Integrate with over 1,500 third-party apps and tools.'}
          />
        </div>

        <div className={style['number-card']}>
          <p className='fs-18'> Have a question for our sales team? Give us a call and we'll walk you through it. </p>
          <Link href={'/'} className='fs-18 text-blue-700 underline underline-offset-1'>+1 888-482-7768</Link>
        </div>
      </div>

      {/* End service-section */}

      {/* Start achievement-section */}
      <section className={style['achievement-section']}>
        <div className='container-1'>
          <div className='text-center mb-6'>
            <h4 >After 6 months, Marketing Hub customers see:</h4>
          </div>

          <div className='row justify-between '>
            <Achievcard
              img={'/images/email.png'}
              heading={'105%'}
              para={'increase in inbound leads'}

              className='hidden'
            />

            <Achievcard
              img={'/images/market.png'}
              heading={'76%'}
              para={'increase in inbound leads'}
              className='block'
            />

            <Achievcard
              img={'/images/search.png'}
              heading={'21%'}
              para={'increase in inbound leads'}
            />
          </div>

        </div>
      </section>

      {/* End achievement-section */}


      {/* Start customer-section */}
      <div className={`${style['customer-section']} container-1`}>
        <div className='text-center mb-6'>
          <h3>See How Customers Use Marketing Hub to Grow Better</h3>
        </div>
        <div className='flex border-b px-2 overflow-auto whitespace-nowrap'>
          <div
            className={`${style.tab} ${activeTab === 'tab1' ? style.active : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            <p className='fs-16'>Howard University</p>
          </div>
          <div
            className={`${style.tab} ${activeTab === 'tab2' ? style.active : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            <p className='fs-16'>ResellerRatings</p>
          </div>
          <div
            className={`${style.tab} ${activeTab === 'tab3' ? style.active : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            <p className='fs-16'>Air Stream</p>
          </div>
        </div>

        <Customertab
          logo={'/images/howard.svg'}
          heading={'Howard University School of Business Ditches Spreadsheets to Maximize Corporate Sponsorships'}
          para1={'Howard University’s school of business needed a better way to manage corporate partnerships.'}
          para2={'With Marketing Hub and Sales Hub, spreadsheets gave way to clear CRM data and improved communication, leading to a fully-funded program and happy sponsors. '}
          para3={'“Workflows and templates save us so much time. It’s also easy to clone existing emails, change a few things, and then set up new workflows.” - LaToya Turner, Program Coordinator'}
          img={'/images/howardimg.jpg'}
          className={activeTab === 'tab1' ? style.active : ''}

        />

        <Customertab
          logo={'/images/reseller.svg'}
          heading={'ResellerRatings Increases New Customer Growth by 60%'}
          para1={'ResellerRatings struggled with the technical heaviness of its Salesforce CRM, and its lack of revenue reporting.'}
          para2={'When ResellerRatings replaced Salesforce with the full HubSpot customer platform, it achieved a 60% increase in new customer growth quarter-over-quarter and a 76% decrease in customer churn rate.'}
          para3={'"Since switching to HubSpot, we increased traffic 25% to our landing pages and our conversion rate went up 5%." - Christina Kay, VP of Marketing, ResellerRatings'}
          video={<iframe src="https://www.youtube.com/embed/dMaVpQoUn1w?si=GQpqwdks2AB_VLEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          className={activeTab === 'tab2' ? style.active : ''}

        />

        <Customertab
          logo={'/images/airstream.svg'}
          heading={'Airstream Generates 78% More Leads at Scale with HubSpot'}
          para1={'As Airstream grew, they needed a simple way to generate more leads at scale and distribute them amongst their network of dealers.'}
          para2={'Airstream and Element Three generated 78% more leads than a previous campaign by implementing a journey-based advertising strategy using Facebook Lead Ads within HubSpot. More importantly, they generated leads at scale — decreasing cost per lead by roughly 44%.'}
          para3={'“We’d recommend Marketing Hub to most businesses in B2B or B2C that are looking to ramp up their lead generation efforts.” - Tim Morse, Digital Marketing Manager at Element Three, digital agency for AirStream'}
          img={'/images/case.jpg'}
          className={activeTab === 'tab3' ? style.active : ''}

        />

      </div>

      {/* End customer-section */}


      {/* Start categories-section */}
      <section className={style['categories-section']}>
        <div className='container-1'>
          <div className={style.card}>
            <div className='row'>
              <div className='w-[100%] md:w-[50%] grid grid-cols-3 grid-flow-row gap-4'>
                <div className={style['img-wrapper']}>
                  <img src="/images/leader.png" alt="" height={100} width={100} />
                </div>

                <div className={style['img-wrapper']}>
                  <img src="/images/best.png" alt="" height={100} width={100} />
                </div>

                <div className={style['img-wrapper']}>
                  <img src="/images/result.png" alt="" height={100} width={100} />
                </div>

                <div className={style['img-wrapper']}>
                  <img src="/images/leader.png" alt="" height={100} width={100} />
                </div>

                <div className={style['img-wrapper']}>
                  <img src="/images/best.png" alt="" height={100} width={100} />
                </div>

                <div className={style['img-wrapper']}>
                  <img src="/images/result.png" alt="" height={100} width={100} />
                </div>
              </div>
              <div className='w-[100%] md:w-[50%]'>
                <div className='text-center'>
                  <h4 className='my-3'>Voted #1 in 318 Categories</h4>
                  <p className='fs-16 underline underline-offset-1 text-blue-700'>Read case studies</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* End categries-section */}


      {/* Start leads-section */}
      <div className='container-1'>
        <div className='row justify-between'>
          <div className='w-[100%] md:w-[60%]'>
            <h4 className='my-4'>Generate leads and automate marketing with Marketing Hub.</h4>
            <div className='row gap-2'>
              <button className='btn-blue p-btn'>Get a demo</button>
              <button className='btn p-btn'>Get started free</button>
            </div>
          </div>

          <div className='w-[30%] '>
            <div className='ratio-1x1'>
              <img src="/images/content.png" alt="" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>

      {/* End leads-section */}


      {/* Start question-section */}
      <section className={style['question-section']}>
        <div className='container-1'>
          <div className='text-center'>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className='flex flex-col md:flex-row gap-5'>
            <div className='w-[100%] md:w-[50%]'>
              <Accordian
                id="1"
                text=" What is marketing automation software?"
                content="Marketing automation software helps you engage and convert leads with dynamic, automated campaigns across various channels, and measures the effectiveness of your strategies with powerful built-in reporting tools."
                isOpen={openAccordian === "1"}
                handleToggle={handleToggle}
              />
              <Accordian
                id="2"
                text="What are popular marketing automation software features?"
                content="Popular features in HubSpot’s marketing software include the ability to:"
                isOpen={openAccordian === "2"}
                handleToggle={handleToggle}
              />

              <Accordian
                id="3"
                text="How much does HubSpot's marketing automation software cost?"
                content="HubSpot's marketing automation software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features and customer support in its"
                isOpen={openAccordian === "3"}
                handleToggle={handleToggle}
              />
              <Accordian
                id="4"
                text="How much time does it take to implement marketing automation software?"
                content="Getting started with marketing automation software is almost instantaneous. Provide your marketing team with logins and access to the appropriate tools, and they’ll be able to get up and running in no time. Functionality like email marketing and analytics will be ready to go as soon as they log in."
                isOpen={openAccordian === "4"}
                handleToggle={handleToggle}
              />
            </div>

            <div className='w-[100%] md:w-[50%]'>
              <Accordian
                id="5"
                text="Does HubSpot’s marketing automation software integrate with Salesforce and other third-party tools?"
                content="Yes. Marketing Hub has a powerful bi-directional sync with Salesforce, which means that any changes made in one system are automatically synced to the other. You can choose which records sync from HubSpot to Salesforce and when, and automatically send important lead intelligence like email opens, form submissions, website activity, and more to your sales team so they have all the context they need to close more deals. You can also send lead scores from HubSpot to Salesforce — to help your sales team prioritize their outreach and save valuable time."
                isOpen={openAccordian === "5"}
                handleToggle={handleToggle}
              />
              <Accordian
                id="6"
                text="What reporting capabilities do I have with Marketing Hub?"
                content="Your HubSpot account includes flexible, customizable dashboards that allow you to see campaign performance data in one place and easily share reports with stakeholders. Additionally, using multi-touch revenue attribution and customer journey analytics, you can prove your business impact, optimize your campaigns, and make budget decisions with greater certainty than before."
                isOpen={openAccordian === "6"}
                handleToggle={handleToggle}
              />

              <Accordian
                id="7"
                text="How is Marketing Hub different from other marketing automation software?"
                content="We're built differently. Marketing Hub provides connected tools and experiences, all as part of HubSpot's customer platform. Marketing Hub isn’t like a lot of software. You don't have to manage various point solutions to bring your systems and data together. The best part? Marketing Hub is powerful and easy-to-use: It’s customizable without being complicated, and empowering instead of overpowering. No matter how intricate your tactics, organization, or data, Marketing Hub makes it possible to power deep customer connections with ease."
                isOpen={openAccordian === "7"}
                handleToggle={handleToggle}
              />
              <Accordian
                id="8"
                text="How does Marketing Hub work with Sales Hub, Service Hub, Content Hub, and Operations Hub?"
                content="Marketing Hub, Sales Hub, Service Hub, Content Hub, and Operations Hub are each part of our complete customer platform to help you grow better. When you use two or more hubs together, your data is automatically connected on the platform, enabling you to easily (and powerfully) track your entire customer journey from first website visit, to closed deal, to happy customer."
                isOpen={openAccordian === "8"}
                handleToggle={handleToggle}
              />
            </div>

          </div>

        </div>
      </section>


      {/* End question-section */}


      {/* Start product-section */}
      <section className={style['product-section']}>
        <div className='container-1'>
          <div className='text-center '>
            <h3 className='mb-4 text-white'>Powerful alone, even better together.</h3>
            <p className='mb-4 text-white'>Each product in the platform is connected to the same underlying CRM database. Although our products are powerful on their own, the real magic happens when you use them together.</p>
          </div>
          <div className='relative'>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              className="mySwiper"

              breakpoints={{
                767: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },

              }}

            >

              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>


              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>


              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>


              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>


              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>


              <SwiperSlide><Productcard
                img={'/images/saleshub.svg'}
                heading={'Sales Hub'}
                content={'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.'}
                link={'Learn about Sales Hub'}
              /></SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>


      {/* End product-section */}









    </>
  );
}
