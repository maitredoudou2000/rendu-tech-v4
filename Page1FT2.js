import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "../../components";

const lastWeekOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const lastWeekOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomedashboardPage = () => {
  return (
    <>
      <div className="bg-gradient  font-graphie h-[1024px] mx-auto p-[21px] sm:px-5 relative w-full">
        <div className="absolute md:h-[1396px] sm:h-[825px] h-[826px] inset-y-[0] left-[2%] my-auto md:px-5 w-[93%] md:w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[54%]">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="bg-blue_gray_900 flex flex-col items-start justify-center p-[25px] sm:px-5 rounded-[30px] w-auto">
                <Img src="images/img_home.svg" className="h-[27px] ml-2.5 md:ml-[0] mt-[26px] w-auto" alt="home" />
                <Img src="images/img_frame5.svg" className="h-[52px] mt-[29px] w-auto" alt="frameFive" />
                <div className="flex flex-col items-center justify-start mb-[324px] ml-2.5 md:ml-[0] mt-[26px] w-[10%] md:w-full">
                  <div className="h-6 md:h-[22px] relative w-6">
                    <Img
                      src="images/img_car.svg"
                      className="absolute bottom-[0] h-[22px] inset-x-[0] mx-auto w-auto"
                      alt="car"
                    />
                    <Text className="absolute font-extrabold right-[0] text-blue_gray_900 text-left text-sm top-[0] tracking-[0.14px] w-auto">
                      +
                    </Text>
                  </div>
                  <div className="h-[25px] md:h-[63px] mt-[41px] relative w-6">
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[22px] inset-x-[0] items-end justify-start mx-auto pb-2.5 pl-2.5 w-full"
                      style={{ backgroundImage: "url('images/img_car.svg')" }}
                    >
                      <div className="bg-white_A700 h-3 rounded-[50%] w-3"></div>
                    </div>
                    <Text className="absolute font-extrabold right-[8%] text-blue_gray_900 text-left text-sm top-[0] tracking-[0.14px] w-auto">
                      €
                    </Text>
                  </div>
                  <Img src="images/img_upload.svg" className="h-[22px] mt-[42px] w-auto" alt="upload" />
                  <Img src="images/img_globe.svg" className="h-6 mt-[42px] w-6" alt="globe" />
                  <div className="bg-blue_gray_900 h-6 mt-[42px] rounded-[50%] w-6"></div>
                </div>
              </div>
              <Img src="images/img_mdicarrepair.svg" className="h-6 w-6" alt="mdicarrepair" />
            </div>
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-12 md:px-10 sm:px-5 right-[0] rounded-[30px] w-[94%]">
            <div className="flex flex-col gap-[17px] items-center justify-start mb-[15px] mt-[7px] w-[76%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[91px] items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text className="font-semibold text-blue_gray_900 text-left text-xl w-auto">Dashboard</Text>
                  <Text className="font-normal italic mt-1 text-[15px] text-blue_gray_900 text-left w-auto">
                    9 Janvier 2023
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-[99%] md:w-full">
                  <div className="bg-gradient2  h-[168px] p-[11px] relative rounded-[10px] w-[18%] md:w-full">
                    <div className="bg-blue_50 flex flex-col h-[39px] items-center justify-start mb-[-0.07px] mt-1 mx-auto p-2 rounded-[19px] w-[39px] z-[1]">
                      <div className="md:h-[19px] h-[21px] relative w-5">
                        <Img
                          src="images/img_clock.svg"
                          className="absolute bottom-[0] h-[19px] inset-x-[0] mx-auto w-5"
                          alt="clock"
                        />
                        <Text className="absolute font-extrabold right-[0] text-blue_50 text-left text-xs top-[0] tracking-[0.12px] w-auto">
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="h-[82px] mb-5 mt-auto mx-auto w-[83%]">
                      <Text className="font-extrabold font-graphie mb-[-6.67px] mx-auto md:text-5xl text-[64px] text-blue_gray_900 text-left w-auto z-[1]">
                        12
                      </Text>
                      <Text className="font-abeezee font-normal italic mt-auto mx-auto text-[10px] text-gray_600 text-left w-auto">
                        Véhicules en cours d’achat
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gradient2  flex flex-col items-center justify-end sm:ml-[0] p-[7px] rounded-[10px] w-full">
                      <div className="bg-gray_100 md:h-[26px] h-[39px] mt-[7px] p-[9px] relative rounded-[19px] w-[39px]">
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[23%] flex flex-col h-[19px] inset-x-[0] items-end justify-start mx-auto pb-[9px] pl-[9px] w-5"
                          style={{ backgroundImage: "url('images/img_group11.svg')" }}
                        >
                          <div className="bg-deep_purple_A200 h-2.5 rounded-[50%] w-2.5"></div>
                        </div>
                        <Text className="absolute font-extrabold right-[31%] text-[10px] text-gray_100 text-left top-[23%] tracking-[0.10px] w-auto">
                          €
                        </Text>
                      </div>
                      <div className="h-[82px] relative w-[97%]">
                        <Text className="font-extrabold font-graphie mb-[-6.99px] mx-auto md:text-5xl text-[64px] text-blue_gray_900 text-left tracking-[0.64px] w-auto z-[1]">
                          4
                        </Text>
                        <Text className="font-abeezee font-normal italic mt-auto mx-auto text-[10px] text-gray_600 text-left w-auto">
                          Véhicules à mettre en vente
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-center mt-[9px] w-[16%] md:w-full">
                        <Img src="images/img_vector.svg" className="h-1 my-1 w-auto" alt="vector" />
                        <Text className="font-extrabold ml-1 text-green_A700 text-left text-xs tracking-[0.12px] w-auto">
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-col items-center justify-end sm:ml-[0] p-[7px] rounded-[10px] w-full">
                      <Button
                        className="bg-yellow_50 flex h-[39px] items-center justify-center mt-[7px] p-[9px] rounded-[19px] w-[39px]"
                        shape="icbRoundedBorder19"
                        size="icbPaddingAll9"
                        variant="icbFillYellow50"
                      >
                        <Img src="images/img_upload_amber_500.svg" className="" alt="upload" />
                      </Button>
                      <div className="h-[88px] relative w-[87%]">
                        <Text className="font-extrabold font-graphie mb-[-12.25px] mx-auto md:text-5xl text-[64px] text-blue_gray_900 text-left tracking-[0.64px] w-auto z-[1]">
                          56
                        </Text>
                        <Text className="font-abeezee font-normal italic mt-auto mx-auto text-[10px] text-center text-gray_600 w-full">
                          Véhicules en reconditionnement
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-center mt-0.5 w-[22%] md:w-full">
                        <Img src="images/img_vector.svg" className="h-1 w-auto" alt="vector" />
                        <Text className="font-extrabold h-[15px] text-green_A700 text-left text-xs tracking-[0.12px] w-auto">
                          13
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-col items-center justify-end sm:ml-[0] p-[7px] rounded-[10px] w-full">
                      <Button
                        className="bg-green_50 flex h-[39px] items-center justify-center mt-[7px] p-[9px] rounded-[19px] w-[39px]"
                        shape="icbRoundedBorder19"
                        size="icbPaddingAll9"
                        variant="icbFillGreen50"
                      >
                        <Img src="images/img_location.svg" className="h-5" alt="location" />
                      </Button>
                      <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                        <Text className="font-extrabold font-graphie md:text-5xl text-[64px] text-blue_gray_900 text-left tracking-[0.64px] w-auto">
                          32
                        </Text>
                        <Text className="font-abeezee font-normal italic text-[10px] text-gray_600 text-left w-auto">
                          Véhicules en ligne
                        </Text>
                        <div className="flex flex-row font-graphie items-center justify-center mt-2 w-[24%] md:w-full">
                          <Img src="images/img_vector.svg" className="h-1 w-auto" alt="vector" />
                          <Text className="font-extrabold ml-1 text-green_A700 text-left text-xs tracking-[0.12px] w-auto">
                            6
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-col items-center justify-end sm:ml-[0] p-[7px] rounded-[10px] w-full">
                      <div className="bg-deep_orange_50 flex flex-col h-[39px] items-center justify-end mt-[7px] p-[9px] rounded-[19px] w-[39px]">
                        <div className="bg-deep_orange_50 h-5 rounded-[50%] w-5"></div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                        <Text className="font-extrabold font-graphie md:text-5xl text-[64px] text-blue_gray_900 text-left tracking-[0.64px] w-auto">
                          87
                        </Text>
                        <Text className="font-abeezee font-normal italic text-[10px] text-gray_600 text-left w-auto">
                          Véhicules vendues
                        </Text>
                        <div className="flex flex-row font-graphie items-center justify-center mt-[9px] w-[24%] md:w-full">
                          <Img src="images/img_vector.svg" className="h-1 w-auto" alt="vector_One" />
                          <Text className="font-extrabold ml-1 text-green_A700 text-left text-xs tracking-[0.12px] w-auto">
                            6
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start p-[9px] w-[53%] md:w-full">
                  <div className="bg-white_A700 flex flex-col items-center justify-start mb-[22px] p-5 rounded-[15px] w-[98%] md:w-full">
                    <div className="flex flex-col gap-[26px] items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text className="font-semibold text-[15px] text-black_900 text-left w-auto">
                          Mes derniers véhicules
                        </Text>
                        <SelectBox
                          className="sm:flex-1 font-normal italic leading-[normal] text-[15px] text-black_900 text-left w-[24%] sm:w-full"
                          placeholderClassName="text-black_900"
                          indicator={
                            <Img src="images/img_vector_black_900.svg" className="h-1 mr-[0] w-[7px]" alt="Vector" />
                          }
                          isMulti={false}
                          name="groupThirteen"
                          options={lastWeekOptionsList}
                          isSearchable={false}
                          placeholder="Last week"
                        />
                      </div>
                      <div className="flex md:h-[274px] h-[277px] justify-end relative w-full">
                        <div className="flex flex-col h-full items-center justify-start mb-[18px] mt-auto w-[83%]">
                          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                              <Img
                                src="images/img_rectangle88.png"
                                className="h-[45px] md:h-auto object-cover rounded-[10px] w-[45px]"
                                alt="rectangleEightyEight"
                              />
                              <div className="flex flex-col gap-1.5 items-start justify-start mt-[3px] w-auto">
                                <Text className="font-normal not-italic text-[15px] text-black_900 text-left w-auto">
                                  Peugeot 206{" "}
                                </Text>
                                <div className="flex flex-row gap-[34px] items-start justify-start w-full">
                                  <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto">
                                    687965
                                  </Text>
                                  <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto"></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                  <Img
                                    src="images/img_rectangle88_45x45.png"
                                    className="h-[45px] md:h-auto object-cover rounded-[10px] w-[45px]"
                                    alt="rectangleEightyEight_One"
                                  />
                                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[3px] w-auto">
                                    <Text className="font-normal not-italic text-[15px] text-black_900 text-left w-auto">
                                      Toyota Yaris
                                    </Text>
                                    <div className="flex flex-row gap-[34px] items-start justify-start w-full">
                                      <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto">
                                        654767
                                      </Text>
                                      <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto"></Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                                    <Img
                                      src="images/img_rectangle88_1.png"
                                      className="h-[45px] md:h-auto object-cover rounded-[10px] w-[45px]"
                                      alt="rectangleEightyEight_Two"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                      <Text className="font-normal not-italic text-[15px] text-black_900 text-left w-auto">
                                        Ford Mustang
                                      </Text>
                                      <div className="flex flex-row gap-8 items-start justify-start w-full">
                                        <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto">
                                          785432
                                        </Text>
                                        <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto"></Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                              <Img
                                src="images/img_rectangle88_2.png"
                                className="h-[45px] md:h-auto object-cover rounded-[10px] w-[45px]"
                                alt="rectangleEightyEight_Three"
                              />
                              <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-auto">
                                <Text className="font-normal not-italic text-[15px] text-black_900 text-left w-auto">
                                  Renault Clio{" "}
                                </Text>
                                <Text className="font-normal not-italic text-black_900 text-left text-xs w-auto">
                                  986689
                                </Text>
                              </div>
                              <Text className="font-normal mt-7 not-italic text-black_900 text-left text-xs w-auto"></Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-4 ml-[52px] mt-[15px] w-auto"
                                alt="arrowright"
                              />
                            </div>
                            <Line className="bg-blue_gray_50 h-px mt-[9px] w-full" />
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-4 md:ml-[0] ml-[359px] mt-7 w-auto"
                              alt="arrowright_One"
                            />
                            <Line className="bg-blue_gray_50 h-px mt-6 w-full" />
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-4 md:ml-[0] ml-[359px] mt-[33px] w-auto"
                              alt="arrowright_Two"
                            />
                            <Line className="bg-blue_gray_50 h-px mt-[27px] w-full" />
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-4 md:ml-[0] ml-[359px] mt-[26px] w-auto"
                              alt="arrowright_Three"
                            />
                            <Line className="bg-blue_gray_50 h-px md:ml-[0] ml-[3px] mt-[30px] w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-end mb-[31px] md:mt-0 mt-[9px] p-[7px] rounded-[15px] w-[47%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start mt-4 w-[95%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-end justify-start w-[98%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text className="font-semibold text-[15px] text-black_900 text-left w-auto">Ton activité</Text>
                        <SelectBox
                          className="sm:flex-1 font-normal italic leading-[normal] text-[15px] text-black_900 text-left w-1/4 sm:w-full"
                          placeholderClassName="text-black_900"
                          indicator={
                            <Img src="images/img_vector_black_900.svg" className="h-1 mr-[0] w-[7px]" alt="Vector" />
                          }
                          isMulti={false}
                          name="groupTwelve"
                          options={lastWeekOptionsList1}
                          isSearchable={false}
                          placeholder="Last week"
                        />
                      </div>
                      <div className="font-inter md:h-[269px] h-[289px] relative w-[90%]">
                        <Img
                          src="images/img_group111.svg"
                          className="absolute bottom-[0] h-[269px] left-[2%] w-[269px]"
                          alt="group111"
                        />
                        <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[59px] mr-[79px] w-[58%] md:w-full">
                            <div className="flex flex-col justify-start mb-[5px] w-[17%]">
                              <Text className="font-semibold text-[15px] text-black_900 text-left w-auto">14%</Text>
                              <Line className="bg-black_900 h-px md:ml-[0] ml-[17px] mr-[5px] rotate-[-60deg] w-[24%]" />
                            </div>
                            <div className="h-[29px] mt-2.5 relative w-[18%]">
                              <Text className="absolute font-semibold right-[0] text-[15px] text-black_900 text-left top-[0] w-auto">
                                15%
                              </Text>
                              <Line className="absolute bg-black_900 bottom-[0] h-px left-[0] rotate-[48deg] w-2.5" />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-end ml-auto mt-[110px] w-[15%] md:w-full">
                            <Line className="bg-black_900 h-px my-2 w-[27%]" />
                            <Text className="font-semibold ml-[3px] text-[15px] text-black_900 text-left w-auto">
                              37%
                            </Text>
                          </div>
                          <div className="flex flex-col justify-start mt-[72px] w-[13%] md:w-full">
                            <Line className="bg-black_900 h-px md:ml-[0] ml-[27px] rotate-[40deg] w-[31%]" />
                            <Text className="font-semibold mr-1.5 text-[15px] text-black_900 text-left w-auto">
                              48%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-abeezee items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <div className="bg-red_400 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text className="font-normal italic text-[10px] text-black_900 text-left w-auto">
                          Very Bad leadtime
                        </Text>
                        <div className="bg-lime_300 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text className="font-normal italic text-[10px] text-black_900 text-left w-auto">
                          {" "}
                          Bad leadtime
                        </Text>
                        <div className="bg-deep_orange_300 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text className="font-normal italic text-[10px] text-black_900 text-left w-auto">
                          {" "}
                          Ok leadtime
                        </Text>
                        <div className="bg-teal_200 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text className="font-normal italic text-[10px] text-black_900 text-left w-auto">
                          {" "}
                          Good leadtime
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white_A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[5px] md:px-5 right-[5%] rounded-bl-none rounded-br-[30px] rounded-tl-none rounded-tr-[30px] w-[21%]">
          <div className="flex flex-col justify-start mb-[158px] mt-[49px] w-[97%] md:w-full">
            <div className="flex flex-row gap-7 items-start justify-end ml-auto w-[24%] md:w-full">
              <Img src="images/img_notification.svg" className="h-5 w-auto" alt="notification" />
              <Img src="images/img_arrowright_blue_gray_900.svg" className="h-5 w-auto" alt="arrowright_Four" />
            </div>
            <div className="flex flex-col gap-[13px] items-center justify-start md:ml-[0] ml-[88px] mt-[23px] w-[32%] md:w-full">
              <Img
                src="images/img_rectangle73.png"
                className="h-[75px] md:h-auto object-cover rounded-[10px] w-[75px]"
                alt="rectangleSeventyThree"
              />
              <Text className="font-normal not-italic text-blue_gray_900 text-left text-xs w-auto">Léa Delagrange</Text>
            </div>
            <div className="flex flex-col items-start justify-center mt-1.5 p-[13px] w-full">
              <Text className="font-semibold mt-4 text-[15px] text-blue_gray_900 text-left w-auto">
                Mes véhicules prioritaires
              </Text>
              <List className="flex-col gap-[15px] grid mt-6 w-[95%]" orientation="vertical">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img src="images/img_star.svg" className="h-3.5 w-[15px]" alt="star" />
                      <Text className="font-normal ml-[5px] not-italic text-blue_gray_900 text-left text-xs w-auto">
                        Dacia Sandero - 930564{" "}
                      </Text>
                      <Text className="font-light ml-[26px] text-blue_gray_900 text-left text-xs w-auto"></Text>
                    </div>
                    <div className="h-2 mt-[11px] overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                      <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "57%" }}></div>
                    </div>
                    <Text className="font-light mt-1.5 text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-full">
                      <Img src="images/img_star.svg" className="h-3.5 w-[15px]" alt="star" />
                      <Text className="font-normal ml-[5px] not-italic text-blue_gray_900 text-left text-xs w-auto">
                        Toyota Yaris - 678465
                      </Text>
                      <Text className="font-light ml-[41px] text-blue_gray_900 text-left text-xs w-auto"></Text>
                    </div>
                    <div className="h-2 mt-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                      <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "90%" }}></div>
                    </div>
                    <Text className="font-light mt-[3px] text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img src="images/img_star.svg" className="h-3.5 w-[15px]" alt="star" />
                      <Text className="font-normal ml-[5px] not-italic text-blue_gray_900 text-left text-xs w-auto">
                        Renault Clio 2 - 432456
                      </Text>
                      <Text className="font-light ml-[30px] text-blue_gray_900 text-left text-xs w-auto"></Text>
                    </div>
                    <div className="h-2 mt-[11px] overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                      <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "23%" }}></div>
                    </div>
                    <Text className="font-light mt-1 text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                  </div>
                </div>
              </List>
              <div className="h-[51px] md:h-[62px] mt-[11px] relative w-[94%]">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-row gap-[62px] items-center justify-end ml-auto w-[92%] md:w-full">
                      <Text className="font-normal not-italic text-blue_gray_900 text-left text-xs w-auto">
                        Audi A1 - 674578
                      </Text>
                      <Text className="font-light text-blue_gray_900 text-left text-xs w-auto"></Text>
                    </div>
                    <div className="h-2 mt-[11px] overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                      <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "90%" }}></div>
                    </div>
                    <Text className="font-light mt-[3px] text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Img src="images/img_star.svg" className="h-3.5 w-[15px]" alt="star" />
                        <Text className="font-normal ml-[5px] not-italic text-blue_gray_900 text-left text-xs w-auto">
                          Audi A1 - 674578
                        </Text>
                        <Text className="font-light ml-[62px] text-blue_gray_900 text-left text-xs w-auto"></Text>
                      </div>
                      <div className="h-2 mt-[11px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                        <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "73%" }}></div>
                      </div>
                      <Text className="font-light mt-[3px] text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[33px] mt-[21px] w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img src="images/img_star.svg" className="h-3.5 w-[15px]" alt="star_One" />
                      <Text className="font-normal ml-[5px] not-italic text-blue_gray_900 text-left text-xs w-auto">
                        Dacia Sandero - 678575
                      </Text>
                      <Text className="font-light ml-[26px] text-blue_gray_900 text-left text-xs w-auto"></Text>
                    </div>
                    <div className="h-2 mt-[11px] overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                      <div className="h-full absolute bg-red_400  rounded-[4px]" style={{ width: "73%" }}></div>
                    </div>
                    <Text className="font-light mt-[3px] text-[11px] text-blue_gray_900 text-left w-auto"></Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomedashboardPage;