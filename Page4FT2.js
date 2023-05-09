import React from "react";

import { Img, List, Text } from "../../components";

const FichetechniquevhiculePage = () => {
  return (
    <>
      <div className="bg-gradient  font-abeezee h-[1024px] mx-auto p-[21px] sm:px-5 relative w-full">
        <div className="absolute md:h-[823px] h-[826px] sm:h-[994px] inset-[0] justify-center m-auto max-w-[1341px] md:px-5 w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[54%]">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="bg-blue_gray_900 flex flex-col gap-[42px] items-start justify-center p-9 sm:px-5 rounded-[30px] w-auto">
                <Img src="images/img_home.svg" className="h-[27px] mt-[15px] w-auto" alt="home" />
                <div className="h-[23px] md:h-[664px] mb-[643px] relative w-[13%]">
                  <Img src="images/img_car.svg" className="absolute bottom-[0] h-[21px] left-[0] w-auto" alt="car" />
                  <div className="absolute bg-red_A700 h-2.5 right-[0] rounded-[50%] top-[0] w-2.5"></div>
                </div>
              </div>
              <Img src="images/img_mdicarrepair.svg" className="h-6 w-6" alt="mdicarrepair" />
            </div>
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-[27px] sm:px-5 right-[0] rounded-[30px] w-[94%]">
            <div className="flex flex-col gap-[29px] items-center justify-start md:ml-[0] ml-[29px] mt-[27px] w-[72%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text className="font-normal italic text-blue_gray_900 text-left text-xl w-auto">Dashboard</Text>
                <Text className="font-normal italic mt-1 text-[15px] text-blue_gray_900 text-left w-auto">
                  9 Janvier 2023
                </Text>
              </div>
              <div className="font-inter md:h-[654px] h-[690px] sm:h-[860px] relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[657px] inset-x-[0] items-center justify-start mx-auto py-5 top-[0] w-full"
                  style={{ backgroundImage: "url('images/img_group10.png')" }}
                >
                  <div className="flex flex-col gap-[19px] justify-start mb-[285px] w-full">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[41px] w-[81%] md:w-full">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-[38%] md:w-full">
                        <Img src="images/img_arrowleft.svg" className="h-5 w-auto" alt="arrowleft" />
                        <Text className="font-extrabold text-blue_gray_900 text-left text-xl w-auto"></Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-between mt-[17px] w-full">
                        <Img
                          src="images/img_image5.png"
                          className="md:flex-1 h-[174px] sm:h-auto object-cover w-auto md:w-full"
                          alt="imageFive"
                        />
                        <Img
                          src="images/img_capturedecran.png"
                          className="md:flex-1 h-[181px] sm:h-auto object-cover w-auto md:w-full"
                          alt="capturedecran"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start md:ml-[0] ml-[92px] w-[15%] md:w-full">
                        <Img
                          src="images/img_image6.png"
                          className="h-4 md:h-auto object-cover w-[30%]"
                          alt="imageSix"
                        />
                        <Img
                          src="images/img_capturedecran_16x30.png"
                          className="h-4 md:h-auto ml-[5px] object-cover w-[31%]"
                          alt="capturedecran_One"
                        />
                        <Img
                          src="images/img_capturedecran_15x30.png"
                          className="h-[15px] md:h-auto ml-[5px] object-cover w-[31%]"
                          alt="capturedecran_Two"
                        />
                      </div>
                    </div>
                    <Img src="images/img_group114.svg" className="h-[70px] w-auto" alt="group114" />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col font-graphie inset-x-[0] items-center justify-start mx-auto w-[91%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[19px] items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[4%] md:w-full">
                        <div className="bg-gray_600 h-[25px] rounded-[12px] w-[25px]"></div>
                        <div className="bg-gray_600 h-[25px] rounded-[12px] w-[25px]"></div>
                        <div className="bg-gray_600_01 h-[25px] rounded-[12px] w-[25px]"></div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                        <Text className="font-semibold text-base text-black_900 text-left w-auto">Livré</Text>
                        <Text className="font-normal text-blue_gray_700 text-left text-sm w-auto">
                          La voiture a été livré au centre de Carrefour-Pleyel
                        </Text>
                        <Text className="font-normal mt-[7px] not-italic text-base text-black_900 text-left w-auto">
                          En cours de transport
                        </Text>
                        <Text className="font-normal text-blue_gray_700 text-left text-sm w-auto">
                          {" "}
                          Le véhicule viens d’être transporter, il arriveras à destination sous une dizaine de jours.
                        </Text>
                        <Text className="font-normal mt-1.5 not-italic text-base text-black_900 text-left w-auto">
                          Centre de reconditionnement
                        </Text>
                        <Text className="font-normal text-blue_gray_700 text-left text-sm">
                          <>
                            Le véhicule a été déposer au centre de reconditionnement et est prêt a être reconditionnéele
                            a été déposer au centre <br />
                            de reconditionnement et est prêt a être reconditionnée.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start mt-1 w-[39%] md:w-full">
                      <div className="bg-gray_600_01 h-[25px] my-[3px] rounded-[12px] w-[25px]"></div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text className="font-normal not-italic text-base text-black_900 text-left w-auto">
                          Reconditionnement
                        </Text>
                        <Text className="font-normal text-blue_gray_700 text-left text-sm w-auto">
                          Le véhicule est prêt a être reconditionné.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start mt-1.5 w-[82%] md:w-full">
                      <div className="bg-red_A700 h-[25px] mb-1.5 rounded-[12px] w-[25px]"></div>
                      <div className="md:h-[18px] h-[31px] relative w-[93%] md:w-full">
                        <Text className="absolute font-normal left-[0] not-italic text-base text-left text-red_A700_d3 top-[0] w-auto">
                          Problème moteur
                        </Text>
                        <Text className="absolute bottom-[0] font-normal inset-x-[0] mx-auto text-blue_gray_700 text-left text-sm w-max">
                          Le véhicule possède un problème de moteur non signaler, il seras prêt dans a peu près 20
                          jours.{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start ml-3 md:ml-[0] w-[41%] md:w-full">
                      <div className="bg-green_700 h-[25px] mb-2.5 mt-1.5 rounded-[12px] w-[25px]"></div>
                      <div className="flex flex-col items-start justify-start w-[90%]">
                        <Text className="font-light text-blue_gray_700 text-left text-sm w-auto">
                          Les photos du véhicules ont été faites.
                        </Text>
                        <div className="md:h-[15px] h-[29px] relative w-full">
                          <Text className="absolute font-light inset-x-[0] mx-auto text-blue_gray_700 text-left text-sm top-[0] w-max">
                            Le contrôle technique et la vidange sont fait.
                          </Text>
                          <Text className="absolute bottom-[0] font-light left-[0] text-blue_gray_700 text-left text-sm w-auto">
                            Le nettoyage du véhicule est fait.{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-[42%] md:w-full">
                      <div className="bg-green_700 h-[25px] rounded-[12px] w-[25px]"></div>
                      <Text className="font-normal mt-[3px] not-italic text-base text-black_900 text-left w-auto">
                        Le vehicule est pret à être mis en vente
                      </Text>
                    </div>
                    <Text className="font-normal md:ml-[0] ml-[55px] mt-7 not-italic text-base text-black_900 text-left w-auto">
                      Le vehicule est vendu
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white_A700 flex flex-col font-graphie h-max inset-y-[0] items-center justify-start my-auto p-7 md:px-5 right-[5%] rounded-bl-none rounded-br-[30px] rounded-tl-none rounded-tr-[30px] w-[21%]">
          <div className="flex flex-col items-end justify-start mb-[181px] mt-[26px] w-[99%] md:w-full">
            <div className="flex flex-row gap-7 items-start justify-end ml-auto w-[28%] md:w-full">
              <Img src="images/img_notification.svg" className="h-5 w-auto" alt="notification" />
              <Img src="images/img_arrowright.svg" className="h-5 w-auto" alt="arrowright" />
            </div>
            <Img
              src="images/img_rectangle73.png"
              className="h-[75px] md:h-auto mt-[23px] object-cover rounded-[10px] w-[75px]"
              alt="rectangleSeventyThree"
            />
            <Text className="font-normal mt-[13px] not-italic text-blue_gray_900 text-left text-xs w-auto">
              Léa Delagrange
            </Text>
            <div className="flex flex-col font-abeezee items-start justify-start mt-[35px] w-full">
              <Text className="font-normal italic text-[15px] text-blue_gray_900 text-left w-auto">
                Mes voitures prioritaires
              </Text>
              <List className="flex-col font-graphie gap-[15px] grid items-center mt-6 w-full" orientation="vertical">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                <div className="flex flex-1 flex-col items-center justify-start w-full">
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
              <div className="font-graphie h-[51px] md:h-[62px] mt-[11px] relative w-full">
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
              <div className="flex flex-col font-graphie items-center justify-start mt-[21px] w-full">
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

export default FichetechniquevhiculePage;