export interface Photo {
  src: string;
  alt: string;
}

export interface Chantier {
  id: string;
  slug: string;
  title: string;
  date: string;
  cover: string;
  photos: Photo[];
}

export const CHANTIERS: Chantier[] = [
  {
    id: 'chantier1',
    slug: 'chantier-1',
    title: 'Chantier 1',
    date: '27 juin 2024',
    cover: 'assets/photos/IMG-20240627-WA0002.jpg',
    photos: [
      { src: 'assets/photos/IMG-20240627-WA0002.jpg', alt: 'Chantier 1 - Photo 1' },
      { src: 'assets/photos/IMG-20240627-WA0004.jpg', alt: 'Chantier 1 - Photo 2' },
      { src: 'assets/photos/IMG-20240627-WA0005.jpg', alt: 'Chantier 1 - Photo 3' },
      { src: 'assets/photos/IMG-20240627-WA0006.jpg', alt: 'Chantier 1 - Photo 4' },
      { src: 'assets/photos/IMG-20240627-WA0007.jpg', alt: 'Chantier 1 - Photo 5' },
      { src: 'assets/photos/IMG-20240627-WA0008.jpg', alt: 'Chantier 1 - Photo 6' },
      { src: 'assets/photos/IMG-20240627-WA0009.jpg', alt: 'Chantier 1 - Photo 7' },
      { src: 'assets/photos/IMG-20240627-WA0010.jpg', alt: 'Chantier 1 - Photo 8' },
      { src: 'assets/photos/IMG-20240627-WA0011.jpg', alt: 'Chantier 1 - Photo 9' },
      { src: 'assets/photos/IMG-20240627-WA0012.jpg', alt: 'Chantier 1 - Photo 10' },
      { src: 'assets/photos/IMG-20240627-WA0013.jpg', alt: 'Chantier 1 - Photo 11' },
      { src: 'assets/photos/IMG-20240627-WA0014.jpg', alt: 'Chantier 1 - Photo 12' },
      { src: 'assets/photos/IMG-20240627-WA0015.jpg', alt: 'Chantier 1 - Photo 13' },
      { src: 'assets/photos/IMG-20240627-WA0016.jpg', alt: 'Chantier 1 - Photo 14' },
      { src: 'assets/photos/IMG-20240627-WA0017.jpg', alt: 'Chantier 1 - Photo 15' },
      { src: 'assets/photos/IMG-20240627-WA0018.jpg', alt: 'Chantier 1 - Photo 16' },
      { src: 'assets/photos/IMG-20240627-WA0019.jpg', alt: 'Chantier 1 - Photo 17' },
      { src: 'assets/photos/IMG-20240627-WA0020.jpg', alt: 'Chantier 1 - Photo 18' },
      { src: 'assets/photos/IMG-20240627-WA0021.jpg', alt: 'Chantier 1 - Photo 19' },
      { src: 'assets/photos/IMG-20240627-WA0033.jpg', alt: 'Chantier 1 - Photo 20' },
      { src: 'assets/photos/IMG-20240627-WA0034.jpg', alt: 'Chantier 1 - Photo 21' }
    ]
  },
  {
    id: 'chantier2',
    slug: 'chantier-2',
    title: 'Chantier 2',
    date: '28 juin 2024',
    cover: 'assets/photos/IMG-20240628-WA0001.jpg',
    photos: [
      { src: 'assets/photos/IMG-20240628-WA0001.jpg', alt: 'Chantier 2 - Photo 1' },
      { src: 'assets/photos/IMG-20240628-WA0002.jpg', alt: 'Chantier 2 - Photo 2' }
    ]
  },
  {
    id: 'chantier3',
    slug: 'chantier-3',
    title: 'Chantier 3',
    date: '8 juillet 2024',
    cover: 'assets/photos/IMG-20240708-WA0004.jpg',
    photos: [
      { src: 'assets/photos/IMG-20240708-WA0004.jpg', alt: 'Chantier 3 - Photo 1' },
      { src: 'assets/photos/IMG-20240708-WA0005.jpg', alt: 'Chantier 3 - Photo 2' },
      { src: 'assets/photos/IMG-20240708-WA0006.jpg', alt: 'Chantier 3 - Photo 3' },
      { src: 'assets/photos/IMG-20240708-WA0007.jpg', alt: 'Chantier 3 - Photo 4' },
      { src: 'assets/photos/IMG-20240708-WA0008.jpg', alt: 'Chantier 3 - Photo 5' },
      { src: 'assets/photos/IMG-20240708-WA0009.jpg', alt: 'Chantier 3 - Photo 6' },
      { src: 'assets/photos/IMG-20240708-WA0010.jpg', alt: 'Chantier 3 - Photo 7' },
      { src: 'assets/photos/IMG-20240708-WA0011.jpg', alt: 'Chantier 3 - Photo 8' },
      { src: 'assets/photos/IMG-20240708-WA0012.jpg', alt: 'Chantier 3 - Photo 9' },
      { src: 'assets/photos/IMG-20240708-WA0013.jpg', alt: 'Chantier 3 - Photo 10' },
      { src: 'assets/photos/IMG-20240708-WA0014.jpg', alt: 'Chantier 3 - Photo 11' },
      { src: 'assets/photos/IMG-20240708-WA0015.jpg', alt: 'Chantier 3 - Photo 12' },
      { src: 'assets/photos/IMG-20240708-WA0016.jpg', alt: 'Chantier 3 - Photo 13' },
      { src: 'assets/photos/IMG-20240708-WA0017.jpg', alt: 'Chantier 3 - Photo 14' },
      { src: 'assets/photos/IMG-20240708-WA0018.jpg', alt: 'Chantier 3 - Photo 15' },
      { src: 'assets/photos/IMG-20240708-WA0019.jpg', alt: 'Chantier 3 - Photo 16' },
      { src: 'assets/photos/IMG-20240708-WA0020.jpg', alt: 'Chantier 3 - Photo 17' },
      { src: 'assets/photos/IMG-20240708-WA0022.jpg', alt: 'Chantier 3 - Photo 18' },
      { src: 'assets/photos/IMG-20240708-WA0023.jpg', alt: 'Chantier 3 - Photo 19' },
      { src: 'assets/photos/IMG-20240708-WA0024.jpg', alt: 'Chantier 3 - Photo 20' },
      { src: 'assets/photos/IMG-20240708-WA0025.jpg', alt: 'Chantier 3 - Photo 21' },
      { src: 'assets/photos/IMG-20240708-WA0026.jpg', alt: 'Chantier 3 - Photo 22' },
      { src: 'assets/photos/IMG-20240708-WA0027.jpg', alt: 'Chantier 3 - Photo 23' },
      { src: 'assets/photos/IMG-20240708-WA0028.jpg', alt: 'Chantier 3 - Photo 24' },
      { src: 'assets/photos/IMG-20240708-WA0029.jpg', alt: 'Chantier 3 - Photo 25' },
      { src: 'assets/photos/IMG-20240708-WA0030.jpg', alt: 'Chantier 3 - Photo 26' },
      { src: 'assets/photos/IMG-20240708-WA0031.jpg', alt: 'Chantier 3 - Photo 27' },
      { src: 'assets/photos/IMG-20240708-WA0032.jpg', alt: 'Chantier 3 - Photo 28' },
      { src: 'assets/photos/IMG-20240708-WA0033.jpg', alt: 'Chantier 3 - Photo 29' },
      { src: 'assets/photos/IMG-20240708-WA0034.jpg', alt: 'Chantier 3 - Photo 30' },
      { src: 'assets/photos/IMG-20240708-WA0035.jpg', alt: 'Chantier 3 - Photo 31' },
      { src: 'assets/photos/IMG-20240708-WA0036.jpg', alt: 'Chantier 3 - Photo 32' },
      { src: 'assets/photos/IMG-20240708-WA0037.jpg', alt: 'Chantier 3 - Photo 33' },
      { src: 'assets/photos/IMG-20240708-WA0038.jpg', alt: 'Chantier 3 - Photo 34' },
      { src: 'assets/photos/IMG-20240708-WA0039.jpg', alt: 'Chantier 3 - Photo 35' },
      { src: 'assets/photos/IMG-20240708-WA0040.jpg', alt: 'Chantier 3 - Photo 36' },
      { src: 'assets/photos/IMG-20240708-WA0041.jpg', alt: 'Chantier 3 - Photo 37' },
      { src: 'assets/photos/IMG-20240708-WA0042.jpg', alt: 'Chantier 3 - Photo 38' },
      { src: 'assets/photos/IMG-20240708-WA0043.jpg', alt: 'Chantier 3 - Photo 39' },
      { src: 'assets/photos/IMG-20240708-WA0044.jpg', alt: 'Chantier 3 - Photo 40' },
      { src: 'assets/photos/IMG-20240708-WA0045.jpg', alt: 'Chantier 3 - Photo 41' },
      { src: 'assets/photos/IMG-20240708-WA0046.jpg', alt: 'Chantier 3 - Photo 42' },
      { src: 'assets/photos/IMG-20240708-WA0047.jpg', alt: 'Chantier 3 - Photo 43' },
      { src: 'assets/photos/IMG-20240708-WA0048.jpg', alt: 'Chantier 3 - Photo 44' },
      { src: 'assets/photos/IMG-20240708-WA0049.jpg', alt: 'Chantier 3 - Photo 45' },
      { src: 'assets/photos/IMG-20240708-WA0050.jpg', alt: 'Chantier 3 - Photo 46' },
      { src: 'assets/photos/IMG-20240708-WA0051.jpg', alt: 'Chantier 3 - Photo 47' },
      { src: 'assets/photos/IMG-20240708-WA0052.jpg', alt: 'Chantier 3 - Photo 48' },
      { src: 'assets/photos/IMG-20240708-WA0053.jpg', alt: 'Chantier 3 - Photo 49' },
      { src: 'assets/photos/IMG-20240708-WA0054.jpg', alt: 'Chantier 3 - Photo 50' },
      { src: 'assets/photos/IMG-20240708-WA0055.jpg', alt: 'Chantier 3 - Photo 51' },
      { src: 'assets/photos/IMG-20240708-WA0056.jpg', alt: 'Chantier 3 - Photo 52' },
      { src: 'assets/photos/IMG-20240708-WA0057.jpg', alt: 'Chantier 3 - Photo 53' },
      { src: 'assets/photos/IMG-20240708-WA0058.jpg', alt: 'Chantier 3 - Photo 54' },
      { src: 'assets/photos/IMG-20240708-WA0059.jpg', alt: 'Chantier 3 - Photo 55' },
      { src: 'assets/photos/IMG-20240708-WA0060.jpg', alt: 'Chantier 3 - Photo 56' },
      { src: 'assets/photos/IMG-20240708-WA0061.jpg', alt: 'Chantier 3 - Photo 57' },
      { src: 'assets/photos/IMG-20240708-WA0062.jpg', alt: 'Chantier 3 - Photo 58' },
      { src: 'assets/photos/IMG-20240708-WA0063.jpg', alt: 'Chantier 3 - Photo 59' },
      { src: 'assets/photos/IMG-20240708-WA0064.jpg', alt: 'Chantier 3 - Photo 60' },
      { src: 'assets/photos/IMG-20240708-WA0065.jpg', alt: 'Chantier 3 - Photo 61' },
      { src: 'assets/photos/IMG-20240708-WA0066.jpg', alt: 'Chantier 3 - Photo 62' },
      { src: 'assets/photos/IMG-20240708-WA0067.jpg', alt: 'Chantier 3 - Photo 63' },
      { src: 'assets/photos/IMG-20240708-WA0068.jpg', alt: 'Chantier 3 - Photo 64' },
      { src: 'assets/photos/IMG-20240708-WA0069.jpg', alt: 'Chantier 3 - Photo 65' },
      { src: 'assets/photos/IMG-20240708-WA0070.jpg', alt: 'Chantier 3 - Photo 66' },
      { src: 'assets/photos/IMG-20240708-WA0071.jpg', alt: 'Chantier 3 - Photo 67' },
      { src: 'assets/photos/IMG-20240708-WA0072.jpg', alt: 'Chantier 3 - Photo 68' },
      { src: 'assets/photos/IMG-20240708-WA0073.jpg', alt: 'Chantier 3 - Photo 69' },
      { src: 'assets/photos/IMG-20240708-WA0074.jpg', alt: 'Chantier 3 - Photo 70' },
      { src: 'assets/photos/IMG-20240708-WA0075.jpg', alt: 'Chantier 3 - Photo 71' },
      { src: 'assets/photos/IMG-20240708-WA0076.jpg', alt: 'Chantier 3 - Photo 72' },
      { src: 'assets/photos/IMG-20240708-WA0077.jpg', alt: 'Chantier 3 - Photo 73' },
      { src: 'assets/photos/IMG-20240708-WA0078.jpg', alt: 'Chantier 3 - Photo 74' },
      { src: 'assets/photos/IMG-20240708-WA0079.jpg', alt: 'Chantier 3 - Photo 75' },
      { src: 'assets/photos/IMG-20240708-WA0080.jpg', alt: 'Chantier 3 - Photo 76' },
      { src: 'assets/photos/IMG-20240708-WA0081.jpg', alt: 'Chantier 3 - Photo 77' },
      { src: 'assets/photos/IMG-20240708-WA0082.jpg', alt: 'Chantier 3 - Photo 78' },
      { src: 'assets/photos/IMG-20240708-WA0083.jpg', alt: 'Chantier 3 - Photo 79' },
      { src: 'assets/photos/IMG-20240708-WA0084.jpg', alt: 'Chantier 3 - Photo 80' },
      { src: 'assets/photos/IMG-20240708-WA0085.jpg', alt: 'Chantier 3 - Photo 81' },
      { src: 'assets/photos/IMG-20240708-WA0086.jpg', alt: 'Chantier 3 - Photo 82' },
      { src: 'assets/photos/IMG-20240708-WA0087.jpg', alt: 'Chantier 3 - Photo 83' },
      { src: 'assets/photos/IMG-20240708-WA0088.jpg', alt: 'Chantier 3 - Photo 84' },
      { src: 'assets/photos/IMG-20240708-WA0089.jpg', alt: 'Chantier 3 - Photo 85' },
      { src: 'assets/photos/IMG-20240708-WA0090.jpg', alt: 'Chantier 3 - Photo 86' },
      { src: 'assets/photos/IMG-20240708-WA0091.jpg', alt: 'Chantier 3 - Photo 87' },
      { src: 'assets/photos/IMG-20240708-WA0092.jpg', alt: 'Chantier 3 - Photo 88' }
    ]
  },
  {
    id: 'chantier4',
    slug: 'chantier-4',
    title: 'Chantier 4',
    date: '16 juillet 2024',
    cover: 'assets/photos/IMG-20240716-WA0008.jpg',
    photos: [
      { src: 'assets/photos/IMG-20240716-WA0008.jpg', alt: 'Chantier 4 - Photo 1' }
    ]
  },
  {
    id: 'chantier5',
    slug: 'chantier-5',
    title: 'Chantier 5',
    date: '30 octobre 2024',
    cover: 'assets/photos/IMG-20241030-WA0011.jpg',
    photos: [
      { src: 'assets/photos/IMG-20241030-WA0011.jpg', alt: 'Chantier 5 - Photo 1' },
      { src: 'assets/photos/IMG-20241030-WA0012.jpg', alt: 'Chantier 5 - Photo 2' },
      { src: 'assets/photos/IMG-20241030-WA0013.jpg', alt: 'Chantier 5 - Photo 3' },
      { src: 'assets/photos/IMG-20241030-WA0014.jpg', alt: 'Chantier 5 - Photo 4' },
      { src: 'assets/photos/IMG-20241030-WA0015.jpg', alt: 'Chantier 5 - Photo 5' },
      { src: 'assets/photos/IMG-20241030-WA0016.jpg', alt: 'Chantier 5 - Photo 6' },
      { src: 'assets/photos/IMG-20241030-WA0017.jpg', alt: 'Chantier 5 - Photo 7' },
      { src: 'assets/photos/IMG-20241030-WA0018.jpg', alt: 'Chantier 5 - Photo 8' }
    ]
  },
  {
    id: 'chantier6',
    slug: 'chantier-6',
    title: 'Chantier 6',
    date: '7 décembre 2024',
    cover: 'assets/photos/IMG-20241207-WA0000.jpg',
    photos: [
      { src: 'assets/photos/IMG-20241207-WA0000.jpg', alt: 'Chantier 6 - Photo 1' },
      { src: 'assets/photos/IMG-20241207-WA0001.jpg', alt: 'Chantier 6 - Photo 2' },
      { src: 'assets/photos/IMG-20241207-WA0002.jpg', alt: 'Chantier 6 - Photo 3' },
      { src: 'assets/photos/IMG-20241207-WA0003.jpg', alt: 'Chantier 6 - Photo 4' }
    ]
  },
  {
    id: 'chantier7',
    slug: 'chantier-7',
    title: 'Chantier 7',
    date: '25 janvier 2025',
    cover: 'assets/photos/IMG-20250125-WA0009.jpg',
    photos: [
      { src: 'assets/photos/IMG-20250125-WA0009.jpg', alt: 'Chantier 7 - Photo 1' },
      { src: 'assets/photos/IMG-20250125-WA0010.jpg', alt: 'Chantier 7 - Photo 2' },
      { src: 'assets/photos/IMG-20250125-WA0011.jpg', alt: 'Chantier 7 - Photo 3' }
    ]
  },
  {
    id: 'chantier8',
    slug: 'chantier-8',
    title: 'Chantier 8',
    date: '11–12 mars 2025',
    cover: 'assets/photos/IMG-20250311-WA0000.jpg',
    photos: [
      { src: 'assets/photos/IMG-20250311-WA0000.jpg', alt: 'Chantier 8 - Photo 1' },
      { src: 'assets/photos/IMG-20250311-WA0001.jpg', alt: 'Chantier 8 - Photo 2' },
      { src: 'assets/photos/IMG-20250312-WA0011.jpg', alt: 'Chantier 8 - Photo 3' }
    ]
  },
  {
    id: 'chantier9',
    slug: 'chantier-9',
    title: 'Chantier 9',
    date: '30 avril 2025',
    cover: 'assets/photos/IMG-20250430-WA0003.jpg',
    photos: [
      { src: 'assets/photos/IMG-20250430-WA0003.jpg', alt: 'Chantier 9 - Photo 1' },
      { src: 'assets/photos/IMG-20250430-WA0004.jpg', alt: 'Chantier 9 - Photo 2' }
    ]
  },
  {
    id: 'chantier10',
    slug: 'chantier-10',
    title: 'Chantier 10',
    date: '30 octobre 2025',
    cover: 'assets/photos/IMG-20251030-WA0001.jpg',
    photos: [
      { src: 'assets/photos/IMG-20251030-WA0001.jpg', alt: 'Chantier 10 - Photo 1' },
      { src: 'assets/photos/IMG-20251030-WA0002.jpg', alt: 'Chantier 10 - Photo 2' },
      { src: 'assets/photos/IMG-20251030-WA0003.jpg', alt: 'Chantier 10 - Photo 3' },
      { src: 'assets/photos/IMG-20251030-WA0004.jpg', alt: 'Chantier 10 - Photo 4' },
      { src: 'assets/photos/IMG-20251030-WA0005.jpg', alt: 'Chantier 10 - Photo 5' },
      { src: 'assets/photos/IMG-20251030-WA0006.jpg', alt: 'Chantier 10 - Photo 6' },
      { src: 'assets/photos/IMG-20251030-WA0007.jpg', alt: 'Chantier 10 - Photo 7' },
      { src: 'assets/photos/IMG-20251030-WA0008.jpg', alt: 'Chantier 10 - Photo 8' }
    ]
  },
  {
    id: 'chantier11',
    slug: 'chantier-11',
    title: 'Chantier 11',
    date: '1 février 2026',
    cover: 'assets/photos/IMG-20260201-WA0000.jpg',
    photos: [
      { src: 'assets/photos/IMG-20260201-WA0000.jpg', alt: 'Chantier 11 - Photo 1' }
    ]
  },
  {
    id: 'chantier12',
    slug: 'chantier-12',
    title: 'Chantier 12',
    date: '29 mars 2026',
    cover: 'assets/photos/IMG-20260329-WA0000.jpg',
    photos: [
      { src: 'assets/photos/IMG-20260329-WA0000.jpg', alt: 'Chantier 12 - Photo 1' },
      { src: 'assets/photos/IMG-20260329-WA0001.jpg', alt: 'Chantier 12 - Photo 2' },
      { src: 'assets/photos/IMG-20260329-WA0002.jpg', alt: 'Chantier 12 - Photo 3' },
      { src: 'assets/photos/IMG-20260329-WA0003.jpg', alt: 'Chantier 12 - Photo 4' },
      { src: 'assets/photos/IMG-20260329-WA0004.jpg', alt: 'Chantier 12 - Photo 5' },
      { src: 'assets/photos/IMG-20260329-WA0005.jpg', alt: 'Chantier 12 - Photo 6' },
      { src: 'assets/photos/IMG-20260329-WA0006.jpg', alt: 'Chantier 12 - Photo 7' },
      { src: 'assets/photos/IMG-20260329-WA0007.jpg', alt: 'Chantier 12 - Photo 8' },
      { src: 'assets/photos/IMG-20260329-WA0008.jpg', alt: 'Chantier 12 - Photo 9' },
      { src: 'assets/photos/IMG-20260329-WA0009.jpg', alt: 'Chantier 12 - Photo 10' },
      { src: 'assets/photos/IMG-20260329-WA0011.jpg', alt: 'Chantier 12 - Photo 11' },
      { src: 'assets/photos/IMG-20260329-WA0012.jpg', alt: 'Chantier 12 - Photo 12' },
      { src: 'assets/photos/IMG-20260329-WA0013.jpg', alt: 'Chantier 12 - Photo 13' },
      { src: 'assets/photos/IMG-20260329-WA0014.jpg', alt: 'Chantier 12 - Photo 14' }
    ]
  }
];
