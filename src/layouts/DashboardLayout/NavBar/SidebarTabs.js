import { MdOutlineDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { BiTask, BiWallet } from "react-icons/bi";
import { GrAchievement } from "react-icons/gr";
import { PiCertificateLight } from "react-icons/pi";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { Code, Wallet } from "@mui/icons-material";
import { AiOutlineNotification } from "react-icons/ai";
import { SlBookOpen } from "react-icons/sl";
import { SiReaddotcv } from "react-icons/si";
import { FaListOl } from "react-icons/fa";
import { RiGroup3Line } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { TbDeviceImacQuestion } from "react-icons/tb";

export const sections = [
  {
    items: [
      {
        title: "Home",
        modules: "home",
        icon: MdOutlineDashboard,
        href: "/home",
      },
      {
        title: "Project",
        modules: "project",
        icon: GoProjectRoadmap,
        href: "/projects",
      },

      {
        title: "Task",
        modules: "task",
        icon: BiTask,
        href: "/tasks",
      },
      {
        title: "Learning Center",
        modules: "learning",
        icon: SlBookOpen,
        subRoutes: [
          {
            title: "Theory Course",
            modules: "learning",
            icon: SiReaddotcv,
            href: "/theory-courses",
          },
          {
            title: "Video Course",
            modules: "learning",
            icon: PiVideoLight,
            href: "/video-courses",
          },
        ],
      },
      {
        title: "Interview Preparation",
        modules: "learning",
        icon: RiGroup3Line,
        subRoutes: [
          {
            title: "Aptitude",
            modules: "aptitude",
            icon: FaListOl,
            href: "/aptitude",
          },
          {
            title: "Interview",
            modules: "interview",
            icon: TbDeviceImacQuestion,
            href: "/interview",
          },
        ],
      },
      // {
      //   title: "Achievements",
      //   modules: "Achievements",
      //   icon: GrAchievement,
      //   href: "/achievements",
      // },
      {
        title: "Compiler",
        modules: "Compiler",
        icon: Code,
        href: "/compiler",
      },
      {
        title: "Ask Me",
        modules: "Ask Me",
        icon: MdOutlineQuestionAnswer,
        href: "/ask-me",
      },
      {
        title: "Jobs",
        modules: "opportunity",
        icon: MdWorkOutline,
        href: "/opportunity",
      },
      {
        title: "Certificate",
        modules: "Certificate",
        icon: PiCertificateLight,
        href: "/certificate",
      },
      {
        title: "Letter of Internship",
        modules: "LetterInternship",
        icon: TiDocumentText,
        href: "/letter-of-internship",
      },
      {
        title: "View Offer Letter",
        modules: "offerLetter",
        icon: BsEnvelopePaper,
        href: "/offer-letter",
      },
      {
        title: "Notice Board",
        modules: "Notice",
        icon: AiOutlineNotification,
        href: "/notice-board",
      },
      {
        title: "Referral",
        modules: "Referral",
        icon: BiWallet,
        href: "/referral",
      },
    ],
  },
];
