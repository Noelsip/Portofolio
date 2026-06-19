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
        title: 'Requirement Analysis Learning',
        icon: <HiOutlineDocumentSearch />
    },
    {
        id: 2,
        title: 'QA Fundamentals & Test Cases',
        icon: <BsClipboardData />
    },
    {
        id: 3,
        title: 'User Flow Mapping',
        icon: <TbTopologyFullHierarchy />
    },
    {
        id: 4,
        title: 'Product Documentation Practice',
        icon: <FaRegNewspaper />
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
        title: 'Team & Stakeholder Coordination',
        icon: <BiUserVoice />
    },
    {
        id: 6,
        title: 'Information System Analysis Basics',
        icon: <TbDeviceDesktopAnalytics />
    },
    // {
    //     id: 9,
    //     title: 'Statistical Data Processing',
    //     icon: <BsClipboardData />
    // },
    {
        id: 7,
        title: 'Product Ideation Practice',
        icon: <RiLightbulbLine />
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
        title: 'Integration Testing Learning',
        icon: <FaTools />
    },
    {
        id: 9,
        title: 'Educational Product Exploration',
        icon: <FaProjectDiagram />
    },
]
