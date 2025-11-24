import { Member } from '../types';

export const MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Alex "NullPtr" Chen',
    role: 'President',
    bio: 'Senior CS student specializing in network security and infrastructure.',
    imageUrl: 'https://picsum.photos/200/200?random=1',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'm2',
    name: 'Sarah "ZeroDay" Jones',
    role: 'Vice President',
    bio: 'CTF Captain. Loves binary exploitation and cryptography challenges.',
    imageUrl: 'https://picsum.photos/200/200?random=2',
    socials: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm3',
    name: 'Marcus "Root" Johnson',
    role: 'Workshop Lead',
    bio: 'Passionate about teaching and open source intelligence (OSINT).',
    imageUrl: 'https://picsum.photos/200/200?random=3',
    socials: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com'
    }
  },
  {
    id: 'm4',
    name: 'Emily "Ghost" Davis',
    role: 'Treasurer',
    bio: 'Keeping the club funds secure using blockchain technology (just kidding).',
    imageUrl: 'https://picsum.photos/200/200?random=4',
    socials: {
      github: 'https://github.com'
    }
  }
];