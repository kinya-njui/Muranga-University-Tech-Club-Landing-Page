// src/data/events.js
import cyberSecurityImage from "../assets/cyberSecurity.jpg";
import uiUxImage from "../assets/uiUx.jpg";
import webDevelopmentImage from "../assets/webDevelopment.jpg";
import mobileAppsImage from "../assets/mobileApps.jpg";
import cloudEngineeringImage from "../assets/cloudEngineering.jpg";
import powerPlatformImage from "../assets/powerPlatform.jpg";

const events = [
  {
    eventImage: cyberSecurityImage,
    eventName: "Cyber Security",
    eventTime: "Every Monday from 4pm to 7pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Webster Ifedha",
    eventDescription:
      "Explore critical aspects of protecting systems, networks, and data from cyber threats.",
  },
  {
    eventImage: uiUxImage,
    eventName: "UI/UX Design",
    eventTime: "Every Tuesday from 5pm to 8pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Manase Gunga",
    eventDescription:
      "Learn principles of creating user-friendly and visually appealing interfaces.",
  },
  {
    eventImage: webDevelopmentImage,
    eventName: "Web Development",
    eventTime: "Every Wednesday from 6pm to 9pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Carolyne Githenduka",
    eventDescription:
      "Gain knowledge in building dynamic and responsive websites.",
  },
  {
    eventImage: mobileAppsImage,
    eventName: "Mobile Apps Development",
    eventTime: "Every Thursday from 4pm to 7pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Stanley Amunze",
    eventDescription:
      "Learn to design and build applications for mobile devices.",
  },
  {
    eventImage: cloudEngineeringImage,
    eventName: "Cloud Engineering",
    eventTime: "Every Friday from 3pm to 6pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Paul Karanja",
    eventDescription:
      "Dive into the world of cloud computing and its applications.",
  },
  {
    eventImage: powerPlatformImage,
    eventName: "Power Platform",
    eventTime: "Every Saturday from 1pm to 4pm",
    eventLocation: "Computer Lab F04",
    eventLeader: "Evyonn Mbithe",
    eventDescription: "Explore capabilities of Microsoft's Power Platform.",
  },
];

export default events;
