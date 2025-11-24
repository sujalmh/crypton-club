import { Event } from '../types';

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Intro to Penetration Testing',
    date: '2023-11-15',
    description: 'Learn the basics of Kali Linux and Metasploit. Bring your own laptop with VirtualBox installed.',
    location: 'Cyber Lab 304',
    googleFormUrl: 'https://forms.google.com/example',
    type: 'workshop',
    status: 'past'
  },
  {
    id: 'e2',
    title: 'Midnight CTF Qualifier',
    date: '2023-12-01',
    description: '48-hour online capture the flag competition to qualify for the nationals.',
    location: 'Online (Discord)',
    googleFormUrl: 'https://forms.google.com/example',
    type: 'ctf',
    status: 'past'
  },
  {
    id: 'e3',
    title: 'Reverse Engineering 101',
    date: '2024-06-20',
    description: 'Disassembling binaries with Ghidra. Understanding assembly language basics.',
    location: 'Lecture Hall B',
    googleFormUrl: 'https://forms.google.com/example',
    type: 'workshop',
    status: 'upcoming'
  },
  {
    id: 'e4',
    title: 'Crypton Summer Hackathon',
    date: '2024-07-10',
    description: 'Build security tools or exploit patches in this 24-hour hackathon. Pizza provided.',
    location: 'Main Atrium',
    googleFormUrl: 'https://forms.google.com/example',
    type: 'social',
    status: 'upcoming'
  }
];