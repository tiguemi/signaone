import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedCategory = signal<string>('all');

  categories = [
    { id: 'all', name: 'Toutes nos réalisations' },
    { id: 'juin2024', name: 'Juin 2024' },
    { id: 'juillet2024', name: 'Juillet 2024' },
    { id: 'octobre2024', name: 'Octobre 2024' },
    { id: 'decembre2024', name: 'Décembre 2024' },
    { id: 'janvier2025', name: 'Janvier 2025' },
    { id: 'mars2025', name: 'Mars 2025' },
    { id: 'recentes', name: 'Récentes 2025-2026' }
  ];

  portfolioItems: PortfolioItem[] = [
    // Juin 2024 - 27/06
    { id: '1', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0002.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '2', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0004.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '3', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0005.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '4', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0006.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '5', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0007.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '6', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0008.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '7', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0009.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '8', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0010.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '9', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0011.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '10', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0012.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '11', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0013.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '12', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0014.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '13', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0015.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '14', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0016.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '15', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0017.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '16', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0018.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '17', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0019.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '18', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0020.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '19', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0021.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '20', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0033.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '21', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240627-WA0034.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '22', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240628-WA0001.jpg', description: 'Enseigne réalisée en juin 2024' },
    { id: '23', title: 'Réalisation juin 2024', category: 'juin2024', image: 'assets/photos/IMG-20240628-WA0002.jpg', description: 'Enseigne réalisée en juin 2024' },

    // Juillet 2024
    { id: '24', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0004.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '25', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0005.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '26', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0006.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '27', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0007.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '28', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0008.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '29', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0009.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '30', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0010.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '31', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0011.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '32', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0012.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '33', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0013.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '34', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0014.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '35', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0015.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '36', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0016.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '37', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0017.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '38', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0018.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '39', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0019.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '40', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0020.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '41', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0022.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '42', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0023.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '43', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0024.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '44', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0025.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '45', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0026.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '46', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0027.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '47', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0028.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '48', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0029.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '49', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0030.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '50', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0031.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '51', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0032.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '52', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0033.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '53', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0034.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '54', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0035.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '55', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0036.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '56', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0037.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '57', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0038.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '58', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0039.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '59', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0040.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '60', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0041.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '61', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0042.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '62', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0043.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '63', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0044.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '64', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0045.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '65', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0046.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '66', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0047.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '67', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0048.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '68', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0049.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '69', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0050.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '70', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0051.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '71', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0052.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '72', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0053.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '73', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0054.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '74', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0055.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '75', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0056.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '76', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0057.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '77', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0058.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '78', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0059.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '79', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0060.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '80', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0061.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '81', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0062.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '82', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0063.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '83', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0064.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '84', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0065.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '85', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0066.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '86', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0067.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '87', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0068.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '88', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0069.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '89', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0070.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '90', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0071.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '91', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0072.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '92', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0073.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '93', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0074.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '94', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0075.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '95', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0076.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '96', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0077.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '97', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0078.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '98', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0079.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '99', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0080.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '100', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0081.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '101', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0082.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '102', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0083.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '103', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0084.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '104', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0085.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '105', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0086.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '106', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0087.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '107', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0088.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '108', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0089.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '109', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0090.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '110', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0091.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '111', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240708-WA0092.jpg', description: 'Enseigne réalisée en juillet 2024' },
    { id: '112', title: 'Réalisation juillet 2024', category: 'juillet2024', image: 'assets/photos/IMG-20240716-WA0008.jpg', description: 'Enseigne réalisée en juillet 2024' },

    // Octobre 2024
    { id: '113', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0011.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '114', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0012.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '115', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0013.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '116', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0014.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '117', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0015.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '118', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0016.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '119', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0017.jpg', description: 'Enseigne réalisée en octobre 2024' },
    { id: '120', title: 'Réalisation octobre 2024', category: 'octobre2024', image: 'assets/photos/IMG-20241030-WA0018.jpg', description: 'Enseigne réalisée en octobre 2024' },

    // Décembre 2024
    { id: '121', title: 'Réalisation décembre 2024', category: 'decembre2024', image: 'assets/photos/IMG-20241207-WA0000.jpg', description: 'Enseigne réalisée en décembre 2024' },
    { id: '122', title: 'Réalisation décembre 2024', category: 'decembre2024', image: 'assets/photos/IMG-20241207-WA0001.jpg', description: 'Enseigne réalisée en décembre 2024' },
    { id: '123', title: 'Réalisation décembre 2024', category: 'decembre2024', image: 'assets/photos/IMG-20241207-WA0002.jpg', description: 'Enseigne réalisée en décembre 2024' },
    { id: '124', title: 'Réalisation décembre 2024', category: 'decembre2024', image: 'assets/photos/IMG-20241207-WA0003.jpg', description: 'Enseigne réalisée en décembre 2024' },

    // Janvier 2025
    { id: '125', title: 'Réalisation janvier 2025', category: 'janvier2025', image: 'assets/photos/IMG-20250125-WA0009.jpg', description: 'Enseigne réalisée en janvier 2025' },
    { id: '126', title: 'Réalisation janvier 2025', category: 'janvier2025', image: 'assets/photos/IMG-20250125-WA0010.jpg', description: 'Enseigne réalisée en janvier 2025' },
    { id: '127', title: 'Réalisation janvier 2025', category: 'janvier2025', image: 'assets/photos/IMG-20250125-WA0011.jpg', description: 'Enseigne réalisée en janvier 2025' },

    // Mars 2025
    { id: '128', title: 'Réalisation mars 2025', category: 'mars2025', image: 'assets/photos/IMG-20250311-WA0000.jpg', description: 'Enseigne réalisée en mars 2025' },
    { id: '129', title: 'Réalisation mars 2025', category: 'mars2025', image: 'assets/photos/IMG-20250311-WA0001.jpg', description: 'Enseigne réalisée en mars 2025' },
    { id: '130', title: 'Réalisation mars 2025', category: 'mars2025', image: 'assets/photos/IMG-20250312-WA0011.jpg', description: 'Enseigne réalisée en mars 2025' },

    // Récentes 2025-2026
    { id: '131', title: 'Réalisation avril 2025', category: 'recentes', image: 'assets/photos/IMG-20250430-WA0003.jpg', description: 'Enseigne réalisée en avril 2025' },
    { id: '132', title: 'Réalisation avril 2025', category: 'recentes', image: 'assets/photos/IMG-20250430-WA0004.jpg', description: 'Enseigne réalisée en avril 2025' },
    { id: '133', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0001.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '134', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0002.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '135', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0003.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '136', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0004.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '137', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0005.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '138', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0006.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '139', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0007.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '140', title: 'Réalisation octobre 2025', category: 'recentes', image: 'assets/photos/IMG-20251030-WA0008.jpg', description: 'Enseigne réalisée en octobre 2025' },
    { id: '141', title: 'Réalisation février 2026', category: 'recentes', image: 'assets/photos/IMG-20260201-WA0000.jpg', description: 'Enseigne réalisée en février 2026' },
    { id: '142', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0000.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '143', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0001.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '144', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0002.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '145', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0003.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '146', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0004.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '147', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0005.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '148', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0006.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '149', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0007.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '150', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0008.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '151', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0009.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '152', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0011.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '153', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0012.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '154', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0013.jpg', description: 'Enseigne réalisée en mars 2026' },
    { id: '155', title: 'Réalisation mars 2026', category: 'recentes', image: 'assets/photos/IMG-20260329-WA0014.jpg', description: 'Enseigne réalisée en mars 2026' }
  ];

  filteredItems = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === category);
  });

  selectCategory(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }

  trackByFn(index: number, item: PortfolioItem): string {
    return item.id;
  }
}
