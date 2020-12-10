# Monitoring and controlling smart home appliances using IoT devices

For this  thesis I am going to monitor and control smart home appliances to have better efficency when it comes to energy usage. The idea is to control smart home appliances mainly based on user location and maybe later on implement some machine learning algorithms for figuring out routines of users and thus maximizing the efficency of power consumption.

User tracking has two stages: outer and inner stage. At the outer stage we want to know if user is at home or not. With this information we can for example switch off all the smart lightnings and media devices and also switch other appliances to more power efficent modes. This can be monitored if users smart device is logged into the house wifi network.

The second stage, the inner stage is for tracking user location in the house. This can be done in number of ways but here we are using wifi yet again for this task. Main idea is to use one router for this task, record its location in house and all the rooms around it. Then using the wifi strenght between the smart device and router we can somewhat estimate where the user is. Better idea would be to use wifi AP as well and have few of them all around the house so that users location could be figured out through triangulation. When users location is figured out in the house then we can do number of actions like switching off tv when user leaves the or lights.

The main brain of this operation will be raspberry pi 4 with openhab software acting as main control unit for smart devices. Of course wifi router is also needed for this operation for it will be the bridge between the hub, user and smart devices. For this theasis the main smart home devices to be controled are mainly smart lights and media devices. Maybe even a smart air contitoner or heater, but this is still open.

For better understanding the smart home system and what is going on in it the author of this thesis will also make a way for viewing all the information about the house, devices in it that are connected to hub and their status. Also there will be manual override switches for every smart home device connected to the hub. Visualy all of the information and controlls are going to be accessible in computers webpage and on smartphones (Android / IOS).

From openHab the main components that are going to be used are the different plugins for communicating with different brands smart home devices. There will also be functionality for keeping track of users location using openHabs 3rd party applications. That would allow us to track users location inside the house.

## The main focusing points of this thesis are:

* Hub creation and development
* logic for user location
* smart devices controlling and monitoring throught hub based on user location
* (implementing adaptive / continuously learning algorithm for figuring out users locational habits)

## The main time planning is as such:

* Figuring out and writing out the thesis problem:                                    07.11.2020
* Sorting out and reading the litearture and materials(API documentations):           24.11.2020
* First part of thesis submitted to mentor:                                           07.12.2020
* Constructing a conclusion to thesis                                                 20.03.2021
* Thesis draft submission                                                             20.04.2021
* Thesis laungage inspection                                                          28.04.2021
* Applying for licenses                                                               07.05.2021
* Thesis submission                                                                   15.05.2021
* Thesis defence                                                                      1.-10.06.2021
