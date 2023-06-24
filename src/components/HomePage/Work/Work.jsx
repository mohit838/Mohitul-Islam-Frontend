'use client';
import SectionTitle from '@/components/Common/Layouts/SectionTitle';
import { useState } from 'react';
import TabContent from './TabContent';
import TabNavigation from './TabNavigation';

const Work = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div id="#work" className="globalMarginBottom">
      {/* Section Title and Paragraph */}
      <SectionTitle title={'Work'} />

      {/* Main Work Content */}
      <TabNavigation
        tabs={tabs.map((tab) => tab.name)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent activeTab={activeTab} tabs={tabs} />
    </div>
  );
};

export default Work;

const tabs = [
  {
    id: 1,
    name: 'All',
    types: 'all',
    active: true,
    content: [
      {
        id: 1,
        title: 'All 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'All 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'All 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'All 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'All 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
  {
    id: 2,
    name: 'Web Development',
    types: 'web',
    active: true,
    content: [
      {
        id: 1,
        title: 'Web Dev 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'Web Dev 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'Web Dev 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'Web Dev 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'Web Dev 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
  {
    id: 3,
    name: 'Apps Development',
    types: 'apps',
    active: true,
    content: [
      {
        id: 1,
        title: 'Apps Dev 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'Apps Dev 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'Apps Dev 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'Apps Dev 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'Apps Dev 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
  {
    id: 4,
    name: 'Marketing',
    types: 'marketing',
    active: true,
    content: [
      {
        id: 1,
        title: 'Marketing Dev 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'Marketing Dev 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'Marketing Dev 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'Marketing Dev 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'Marketing Dev 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
  {
    id: 5,
    name: 'Grphics',
    types: 'graphics',
    active: true,
    content: [
      {
        id: 1,
        title: 'Grphics Dev 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'Grphics Dev 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'Grphics Dev 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'Grphics Dev 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'Grphics Dev 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
  {
    id: 6,
    name: 'Game Development',
    types: 'game',
    active: true,
    content: [
      {
        id: 1,
        title: 'Game Dev 1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 2,
        title: 'Game Dev 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 3,
        title: 'Game Dev 3',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 4,
        title: 'Game Dev 4',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
      {
        id: 5,
        title: 'Game Dev 5',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        imgDrc: '/profile/protfolio2.png',
        github: '/',
        live: '/',
      },
    ],
  },
];
