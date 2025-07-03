/* eslint-disable */
import React from "react";
import { BiChip, BiSpreadsheet, BiUserVoice } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineApi, AiFillRobot } from "react-icons/ai";
import { FaInternetExplorer, FaTools, FaChalkboardTeacher, FaMobileAlt, FaRegNewspaper, FaCameraRetro, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAppSettingsAlt, MdOutlineDesignServices } from "react-icons/md";
import { RiComputerLine, RiLightbulbLine } from "react-icons/ri";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { TbDeviceDesktopAnalytics, TbSmartHome, TbTopologyFullHierarchy } from "react-icons/tb";

export const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        icon: <BsCodeSlash />
    },
    {
        id: 2,
        title: 'Mobile App Development',
        icon: <FaMobileAlt />
    },
    {
        id: 3,
        title: 'Backend/API Development',
        icon: <AiOutlineApi />
    },
    {
        id: 4,
        title: 'Database & Cloud Setup',
        icon: <TbTopologyFullHierarchy />
    },
    // {
    //     id: 5,
    //     title: 'AI & Machine Learning',
    //     icon: <AiFillRobot />
    // },
    // {
    //     id: 6,
    //     title: 'Computer Vision & OpenCV',
    //     icon: <FaCameraRetro />
    // },
    {
        id: 5,
        title: 'IoT',
        icon: <TbSmartHome />
    },
    {
        id: 6,
        title: 'Information System Analysis',
        icon: <HiOutlineDocumentSearch />
    },
    // {
    //     id: 9,
    //     title: 'Statistical Data Processing',
    //     icon: <BsClipboardData />
    // },
    {
        id: 7,
        title: 'Proposal & Documentation Writing',
        icon: <FaRegNewspaper />
    },
    // {
    //     id: 11,
    //     title: 'Product & Tech Ideation',
    //     icon: <RiLightbulbLine />
    // },
    // {
    //     id: 12,
    //     title: 'UI/UX Design (CSS)',
    //     icon: <MdOutlineDesignServices />
    // },
    // {
    //     id: 13,
    //     title: 'Event Branding & Naming',
    //     icon: <FaChalkboardTeacher />
    // },
    {
        id: 8,
        title: 'Integration: Payment, Marketplace, Drive',
        icon: <FaInternetExplorer />
    },
    {
        id: 9,
        title: 'Educational Tech & Apps',
        icon: <FaProjectDiagram />
    },
]
