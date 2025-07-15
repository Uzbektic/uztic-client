import { NewsLetterItemProps } from '../../types/news-letter';
import NewsLetter1Image from '../../assets/images/news-letters/1.png';
import NewsLetter2Image from '../../assets/images/news-letters/2.png';
import NewsLetter3Image from '../../assets/images/news-letters/3.png';
import NewsLetter4Image from '../../assets/images/news-letters/4.png';
import NewsLetter5Image from '../../assets/images/news-letters/5.png';
import NewsLetter6Image from '../../assets/images/news-letters/6.png';
import NewsLetter7Image from '../../assets/images/news-letters/7.png';
import NewsLetter8Image from '../../assets/images/news-letters/8.png';
import NewsLetter9Image from '../../assets/images/news-letters/9.png';
import NewsLetter10Image from '../../assets/images/news-letters/10.png';
import NewsLetter11Image from '../../assets/images/news-letters/11.png';

export const newsletters: NewsLetterItemProps[] = [
  {
    image: NewsLetter1Image,
    tooltipText: 'News Letter For August, 2023',
    title: 'August, 2023',
    date: '2023-08-01',
    pdfPath: require('../../pdfs/aug-2023.pdf'),
    viewLink: '/view-pdf/3',
  },
  {
    image: NewsLetter2Image,
    tooltipText: 'News Letter For January, 2023',
    title: 'January, 2023',
    date: '2023-01-01',
    pdfPath: require('../../pdfs/jan-2023.pdf'),
    viewLink: '/view-pdf/1',
  },
  {
    image: NewsLetter3Image,
    tooltipText: 'News Letter For September, 2022',
    title: 'September, 2022',
    date: '2022-10-01',
    pdfPath: require('../../pdfs/sept-2022.pdf'),
    viewLink: '/view-pdf/0',
  },
  {
    image: NewsLetter4Image,
    tooltipText: 'News Letter For April, 2023',
    title: 'April, 2023',
    date: '2023-04-01',
    pdfPath: require('../../pdfs/apr-2023.pdf'),
    viewLink: '/view-pdf/2',
  },
  {
    image: NewsLetter5Image,
    tooltipText: 'News Letter For November, 2023',
    title: 'November, 2023',
    date: '2023-11-01',
    pdfPath: require('../../pdfs/nov-2023.pdf'),
    viewLink: '/view-pdf/4',
  },
  {
    image: NewsLetter6Image,
    tooltipText: 'News Letter For March, 2024',
    title: 'March, 2024',
    date: '2024-03-01',
    pdfPath: require('../../pdfs/mar-2024.pdf'),
    viewLink: '/view-pdf/5',
  },
  {
    image: NewsLetter7Image,
    tooltipText: 'News Letter For June, 2024',
    title: 'June, 2024',
    date: '2024-06-01',
    pdfPath: require('../../pdfs/june-2024.pdf'),
    viewLink: '/view-pdf/6',
  },
  {
    image: NewsLetter8Image,
    tooltipText: 'Special Edition',
    title: 'Special Edition',
    date: '2024-08-01',
    pdfPath: require('../../pdfs/special.pdf'),
    viewLink: '/view-pdf/7',
  },
  {
    image: NewsLetter9Image,
    tooltipText: 'Food Tourism',
    title: 'Food Tourism',
    date: '2024-10-01',
    pdfPath: require('../../pdfs/food.pdf'),
    viewLink: '/view-pdf/8',
  },
  {
    image: NewsLetter10Image,
    tooltipText: 'News Letter For January, 2025',
    title: 'January, 2025',
    date: '2025-01-01',
    pdfPath: require('../../pdfs/jan-2025.pdf'),
    viewLink: '/view-pdf/9',
  },
  {
    image: NewsLetter11Image,
    tooltipText: 'News Letter For April, 2025',
    title: 'April, 2025',
    date: '2025-04-01',
    pdfPath: require('../../pdfs/apr-2025.pdf'),
    viewLink: '/view-pdf/10',
  },
];
