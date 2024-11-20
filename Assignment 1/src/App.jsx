import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import "./index.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Home page */}

        <div className="h-[100vh]">
          {/* Navbar */}

          <div className="mt-[10px] flex justify-between mx-auto w-[80vw]">
            <div className="">
              <img src="assets/logo.png" className="max-md:w-40 w-52" />
            </div>

            <div className="flex gap-4 items-center max-lg:text-sm max-sm:hidden">
              <div>About Us</div>
              <div>Services</div>
              <div>Team</div>
              <div>Clients</div>
              <div>Contact Us</div>
            </div>

            {/* navbar (hamburger) */}

            <div className="sm:hidden">
              <Hamburger
                toggled={isActive}
                toggle={setIsActive}
                color="#0891b2"
                duration={0.5}
                size={26}
                className="z-[999]"
              />
            </div>
          </div>

          <div
            className={
              "absolute max-sm:w-[60vw] flex justify-center mx-auto rounded-xl bg-white drop-shadow-2xl right-3 duration-100 " +
              (isActive ? "block" : "hidden")
            }
          >
            <div className="flex flex-col gap-3 text-lg items-center max-sm:py-6">
              <div className="hover:text-cyan-600 duration-75">About Us</div>
              <div className="hover:text-cyan-600 duration-75">Services</div>
              <div className="hover:text-cyan-600 duration-75">Team</div>
              <div className="hover:text-cyan-600 duration-75">Clients</div>
              <div className="hover:text-cyan-600 duration-75">Contact Us</div>
            </div>
          </div>

          {/* main */}

          <div className="">
            <div className="absolute bottom-[-10px] sm:left-[50px] w-auto flex">
              <img
                src="assets/6.png"
                className="max-lm:w-[80vw] max-sm:mx-auto lm:w-[60vw] sm:max-w-[400px] lg:max-w-[550px] z-20"
              />
            </div>
            <div className="max-sm:w-[80vw] h-[70vh] sm:mr-[10%] justify-center flex flex-col sm:ml-[40%] lg:ml-[55%] m-auto gap-4">
              <div className="Rubik text-3xl sm:text-4xl lg:text-5xl font-medium">
                Mendleson Communication and Engagement
              </div>
              <div className="Rubik text-xs font-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada sed ipsum, ut quam volutpat, tortor.
              </div>
            </div>
          </div>

          {/* pngs */}

          <div className="max-sm:hidden">
            <div>
              <div className="absolute z-[-10] top-0 left-0">
                <img src="assets/2.png" className="w-[106px]" />
              </div>
              <div className="absolute z-[-10] top-[-16px] right-0">
                <img src="assets/1.png" className="w-[166px]" />
              </div>
              <div className="absolute z-[10] bottom-[-10px] left-0">
                <img src="assets/5.png" className="w-[166px]" />
              </div>
              <div className="absolute bottom-[-10px] right-0">
                <img src="assets/3.png" className="w-[150px]" />
              </div>
              <div className="absolute bottom-[-10px] left-[-6px]">
                <img
                  src="assets/4.png"
                  className="sm:w-[800px] lg:w-[1000px] -z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About us */}

        <div id="about" className="md:hidden">
          <div className="Rubik uppercase flex justify-center text-3xl my-8 font-semibold">
            About Us
          </div>
          <div className="sm:flex gap-8 flex-row-reverse mx-auto sm:w-[90vw]">
            <div className="Rubik text-justify w-[80vw] mx-auto">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </div>
            <div className="max-sm:w-[80vw] sm:w-[60vw] my-8 mx-auto">
              <img src="assets/About us.png" />
            </div>
          </div>
          <div className="Rubik max-sm:w-[80vw] sm:w-[90vw] sm:gap-8 mx-auto flex flex-col sm:flex-row max-sm:gap-5 sm:mt-5">
            <div className="flex flex-col">
              <div className="flex items-center gap-5 max-sm:my-2">
                <img src="assets/about1.png" className="max-md:w-6" />
                <div className="uppercase max-sm:text-lg font-medium">
                  Engagement
                </div>
              </div>
              <div className="text-justify">
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum. READ MORE
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5 max-sm:my-2">
                <img src="assets/about2.png" className="max-md:w-6" />
                <div className="uppercase max-sm:text-lg font-medium">
                  Communication
                </div>
              </div>
              <div className="text-justify">
                We are award-winning leaders in communications and campaign
                management. READ MORE
              </div>
            </div>
          </div>
        </div>

        {/* About us >768px */}

        <div id="about" className="max-md:hidden md:mt-10">
          <div className="sm:flex gap-12 mx-auto sm:w-[90vw]">
            <div className="max-lm:w-[80vw] md:w-[50vw] my-8 mx-auto flex items-center">
              <img src="assets/About us.png" />
            </div>
            <div className="w-[40vw] max-lg:w-[70vw] flex flex-col justify-center">
              <div className="Rubik uppercase flex text-4xl my-8 font-medium">
                About Us
              </div>
              <div className="Rubik text-justify mx-auto">
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </div>
              <div>
                <div className="Rubik sm:gap-8 mx-auto flex flex-col sm:flex-row sm:mt-5 lg:mt-10">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-5 max-lm:my-2">
                      <img
                        src="assets/about1.png"
                        className="max-lm:w-6 max-lm:h-6 md:w-5"
                      />
                      <div className="uppercase max-lm:text-lg font-medium">
                        Engagement
                      </div>
                    </div>
                    <div className="text-justify">
                      We are engagement specialists, who have led projects at
                      all levels of the IAP2 spectrum. READ MORE
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-5 max-lm:my-2">
                      <img
                        src="assets/about2.png"
                        className="max-lm:w-6 max-lm:h-6 md:w-5"
                      />
                      <div className="uppercase max-lm:text-lg font-medium">
                        Communication
                      </div>
                    </div>
                    <div className="text-justify">
                      We are award-winning leaders in communications and
                      campaign management. READ MORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}

        <div id="services" className="md:hidden">
          <div className="Rubik uppercase flex justify-center text-3xl my-8 font-semibold">
            Services
          </div>
          <div className="max-sm:w-[80vw] sm:w-[90vw] Rubik mx-auto">
            <div className="flex flex-col">
              <div className="uppercase flex justify-center text-2xl my-5 font-medium">
                engagement
              </div>
              <div className="flex gap-10">
                <div className="max-sm:hidden flex items-center">
                  <img src="assets/engagement.png" className="sm:w-[30vw]" />
                </div>
                <div className="text-justify sm:w-[70vw] flex items-center">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="uppercase flex justify-center text-2xl my-5 font-medium">
                Communications
              </div>
              <div className="flex gap-10 flex-row-reverse">
                <div className="max-sm:hidden flex items-center">
                  <img src="assets/communication.png" className="sm:w-[30vw]" />
                </div>
                <div className="text-justify sm:w-[70vw] flex items-center">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="uppercase flex justify-center text-2xl my-5 font-medium">
                facilitation
              </div>
              <div className="flex gap-10">
                <div className="max-sm:hidden flex items-center">
                  <img src="assets/facilation.png" className="sm:w-[30vw]" />
                </div>
                <div className="text-justify sm:w-[70vw] flex items-center">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="uppercase flex justify-center text-center text-2xl my-5 font-medium">
                Consultation and Research
              </div>
              <div className="flex gap-10 flex-row-reverse">
                <div className="max-sm:hidden flex items-center">
                  <img src="assets/consultation.png" className="sm:w-[30vw]" />
                </div>
                <div className="text-justify sm:w-[70vw] flex items-center">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="uppercase flex justify-center text-center text-2xl my-5 font-medium">
                Traning & Mentoring
              </div>
              <div className="flex gap-10">
                <div className="max-sm:hidden flex items-center">
                  <img src="assets/training.png" className="sm:w-[30vw]" />
                </div>
                <div className="text-justify sm:w-[70vw] flex items-center">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services >768px */}

        <div id="services" className="max-md:hidden">
          <div className="Rubik uppercase flex justify-center text-4xl my-8 font-medium">
            Services
          </div>
          <div className="w-[70vw] max-lg:w-[80vw] Rubik mx-auto flex flex-col gap-10">
            <div className="flex flex-col">
              <div className="flex gap-20 justify-between flex-row-reverse">
                <div className="max-sm:hidden flex sm:w-[30vw] items-center">
                  <img src="assets/engagement.png" className="" />
                </div>
                <div className="w-[30vw] max-lg:w-[50vw] flex justify-center flex-col items-end">
                  <div className="uppercase text-3xl my-5 font-medium">
                    engagement
                  </div>
                  <div className="text-justify flex items-center text-sm">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-20 justify-between">
                <div className="max-sm:hidden flex sm:w-[30vw] items-center">
                  <img src="assets/communication.png" className="" />
                </div>
                <div className="w-[30vw] max-lg:w-[50vw] flex justify-center flex-col items-start">
                  <div className="uppercase text-3xl my-5 font-medium">
                    communications
                  </div>
                  <div className="text-justify flex items-center text-sm">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-20 justify-between flex-row-reverse">
                <div className="max-sm:hidden flex sm:w-[30vw] items-center">
                  <img src="assets/facilation.png" className="" />
                </div>
                <div className="w-[30vw] max-lg:w-[50vw] flex justify-center flex-col items-end">
                  <div className="uppercase text-3xl my-5 font-medium">
                    facilitation
                  </div>
                  <div className="text-justify flex items-center text-sm">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-20 justify-between">
                <div className="max-sm:hidden flex sm:w-[30vw] items-center">
                  <img src="assets/consultation.png" className="" />
                </div>
                <div className="w-[30vw] max-lg:w-[50vw] flex justify-center flex-col">
                  <div className="uppercase text-3xl my-5 font-medium">
                    Consultation and Research
                  </div>
                  <div className="text-justify flex items-center text-sm">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-20 justify-between flex-row-reverse">
                <div className="max-sm:hidden flex sm:w-[30vw] items-center">
                  <img src="assets/training.png" className="" />
                </div>
                <div className="w-[30vw] max-lg:w-[50vw] flex justify-center flex-col items-end">
                  <div className="uppercase text-3xl my-5 font-medium">
                    Traning & Mentoring
                  </div>
                  <div className="text-justify flex items-center text-sm">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our team */}

        <div id="team">
          <div className="Rubik uppercase flex justify-center text-3xl md:text-4xl my-8 font-medium">
            Our team
          </div>
          <div className="max-lm:w-[80vw] mx-auto flex flex-col sm:flex-row sm:w-[90vw] gap-8 sm:justify-center lg:gap-20">
            <div className="flex flex-col items-center gap-3">
              <img src="assets/p1.png" />
              <div className="text-lg font-medium">Jessica D’suza</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="assets/p2.png" />
              <div className="text-lg font-medium">Johny Williams</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="assets/p3.png" />
              <div className="text-lg font-medium">Sanya R.</div>
            </div>
          </div>
        </div>

        {/* Our Projects */}

        <div id="projects">
          <div className="Rubik uppercase flex justify-center text-3xl md:text-4xl my-8 font-medium">
            Our Projects
          </div>
          <div className="md:hidden flex flex-col gap-1 sm:flex-row lm:w-[90vw] mx-auto">
            <div className="max-lm:w-4/5 mx-auto sm:w-[200px] sm:h-[300px]">
              <img
                src="assets/pr1.png"
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="max-lm:w-4/5 mx-auto sm:w-[200px] sm:h-[300px]">
              <img
                src="assets/pr2.png"
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="max-lm:w-4/5 mx-auto sm:w-[200px] sm:h-[300px]">
              <img
                src="assets/pr3.png"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>

          {/* project >768px */}

          <div className="max-md:hidden flex flex-col gap-1 sm:flex-row sm:w-[90vw] mx-auto justify-center">
            <div className="">
              <img
                src="assets/pr1.png"
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="">
                <img
                  src="assets/pr2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-auto">
                <img
                  src="assets/pr3.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* our clients */}

        <div id="clients">
          <div className="Rubik uppercase flex justify-center text-3xl md:text-4xl my-8 font-medium">
            Our clients
          </div>
          <div className="grid grid-cols-2 gap-8 items-center justify-center max-sm:w-4/5 m-auto sm:grid-cols-3 md:grid-cols-4 sm:w-[90vw]">
            <img src="assets/c1.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c2.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c3.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c4.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c5.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c6.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c7.png" className="max-md:w-11/12 m-auto" />
            <img src="assets/c8.png" className="max-md:w-11/12 m-auto" />
          </div>
        </div>

        {/* footbar */}

        <div className="Rubik mt-10 bg-[#BFDBFF] ">
          <div className="py-7 max-md:w-8/12 gap-5 mx-auto ">
            <div className="flex justify-between md:hidden">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Social
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s1.png" className="w-4" />
                  <div className="font-light text-xs">Facebook</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s2.png" className="w-4" />
                  <div className="font-light text-xs">Linkedin</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s3.png" className="w-4" />
                  <div className="font-light text-xs">Google</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Explore
                </div>
                <div className="font-light text-xs">Service</div>
                <div className="font-light text-xs">Team</div>
                <div className="font-light text-xs">Clients</div>
              </div>
            </div>
            <div className="max-md:py-5 md:hidden">
              <div className="uppercase text-sm font-medium max-md:mb-3">
                Contact
              </div>
              <div className="font-light text-xs flex flex-col gap-1">
                <p>Lorem Ipsum dummy address</p>
                <p>used for display</p>
                <p>1234567890</p>
              </div>
            </div>
            <div className=" md:hidden">
              <div className="uppercase text-sm font-medium max-md:mb-3">
                Email
              </div>
              <div className="font-light text-xs">
                mendlesoncommunication@email.com
              </div>
            </div>

            {/* >768px */}
            <div className="max-md:hidden flex justify-between w-[90vw] mx-auto lg:w-[70vw]">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Social
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s1.png" className="w-4" />
                  <div className="font-light text-xs">Facebook</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s2.png" className="w-4" />
                  <div className="font-light text-xs">Linkedin</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="assets/s3.png" className="w-4" />
                  <div className="font-light text-xs">Google</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Explore
                </div>
                <div className="font-light text-xs">Service</div>
                <div className="font-light text-xs">Team</div>
                <div className="font-light text-xs">Clients</div>
              </div>
              <div className="max-md:py-5">
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Contact
                </div>
                <div className="font-light text-xs flex flex-col gap-1">
                  <p>Lorem Ipsum dummy address</p>
                  <p>used for display</p>
                  <p>1234567890</p>
                </div>
              </div>
              <div>
                <div className="uppercase text-sm font-medium max-md:mb-3">
                  Email
                </div>
                <div className="font-light text-xs">
                  mendlesoncommunication@email.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs flex justify-center items-center py-3 font-thin">
          © Copyright 2018 Mendleson Communication Pty Ltd
        </div>
      </div>
    </>
  );
};

export default App;
