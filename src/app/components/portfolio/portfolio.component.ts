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
    { id: 'all', name: 'Tous les chantiers' },
    { id: 'chantier1', name: 'Chantier 1' },
    { id: 'chantier2', name: 'Chantier 2' },
    { id: 'chantier3', name: 'Chantier 3' },
    { id: 'chantier4', name: 'Chantier 4' },
    { id: 'chantier5', name: 'Chantier 5' },
    { id: 'chantier6', name: 'Chantier 6' },
    { id: 'chantier7', name: 'Chantier 7' },
    { id: 'chantier8', name: 'Chantier 8' },
    { id: 'chantier9', name: 'Chantier 9' },
    { id: 'chantier10', name: 'Chantier 10' },
    { id: 'chantier11', name: 'Chantier 11' },
    { id: 'chantier12', name: 'Chantier 12' }
  ];

  portfolioItems: PortfolioItem[] = [
    // Chantier 1 — 27 juin 2024 (21 photos)
    { id: '1', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0002.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '2', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0004.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '3', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0005.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '4', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0006.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '5', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0007.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '6', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0008.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '7', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0009.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '8', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0010.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '9', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0011.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '10', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0012.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '11', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0013.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '12', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0014.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '13', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0015.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '14', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0016.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '15', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0017.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '16', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0018.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '17', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0019.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '18', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0020.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '19', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0021.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '20', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0033.jpg', description: 'Réalisation du 27 juin 2024' },
    { id: '21', title: 'Chantier 1', category: 'chantier1', image: 'assets/photos/IMG-20240627-WA0034.jpg', description: 'Réalisation du 27 juin 2024' },

    // Chantier 2 — 28 juin 2024 (2 photos)
    { id: '22', title: 'Chantier 2', category: 'chantier2', image: 'assets/photos/IMG-20240628-WA0001.jpg', description: 'Réalisation du 28 juin 2024' },
    { id: '23', title: 'Chantier 2', category: 'chantier2', image: 'assets/photos/IMG-20240628-WA0002.jpg', description: 'Réalisation du 28 juin 2024' },

    // Chantier 3 — 8 juillet 2024 (88 photos)
    { id: '24', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0004.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '25', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0005.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '26', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0006.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '27', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0007.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '28', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0008.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '29', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0009.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '30', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0010.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '31', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0011.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '32', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0012.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '33', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0013.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '34', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0014.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '35', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0015.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '36', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0016.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '37', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0017.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '38', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0018.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '39', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0019.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '40', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0020.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '41', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0022.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '42', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0023.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '43', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0024.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '44', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0025.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '45', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0026.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '46', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0027.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '47', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0028.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '48', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0029.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '49', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0030.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '50', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0031.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '51', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0032.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '52', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0033.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '53', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0034.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '54', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0035.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '55', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0036.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '56', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0037.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '57', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0038.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '58', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0039.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '59', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0040.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '60', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0041.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '61', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0042.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '62', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0043.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '63', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0044.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '64', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0045.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '65', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0046.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '66', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0047.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '67', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0048.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '68', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0049.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '69', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0050.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '70', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0051.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '71', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0052.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '72', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0053.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '73', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0054.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '74', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0055.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '75', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0056.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '76', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0057.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '77', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0058.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '78', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0059.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '79', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0060.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '80', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0061.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '81', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0062.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '82', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0063.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '83', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0064.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '84', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0065.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '85', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0066.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '86', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0067.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '87', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0068.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '88', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0069.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '89', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0070.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '90', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0071.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '91', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0072.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '92', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0073.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '93', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0074.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '94', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0075.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '95', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0076.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '96', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0077.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '97', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0078.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '98', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0079.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '99', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0080.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '100', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0081.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '101', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0082.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '102', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0083.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '103', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0084.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '104', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0085.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '105', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0086.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '106', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0087.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '107', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0088.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '108', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0089.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '109', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0090.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '110', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0091.jpg', description: 'Réalisation du 8 juillet 2024' },
    { id: '111', title: 'Chantier 3', category: 'chantier3', image: 'assets/photos/IMG-20240708-WA0092.jpg', description: 'Réalisation du 8 juillet 2024' },

    // Chantier 4 — 16 juillet 2024 (1 photo)
    { id: '112', title: 'Chantier 4', category: 'chantier4', image: 'assets/photos/IMG-20240716-WA0008.jpg', description: 'Réalisation du 16 juillet 2024' },

    // Chantier 5 — 30 octobre 2024 (8 photos)
    { id: '113', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0011.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '114', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0012.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '115', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0013.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '116', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0014.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '117', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0015.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '118', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0016.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '119', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0017.jpg', description: 'Réalisation du 30 octobre 2024' },
    { id: '120', title: 'Chantier 5', category: 'chantier5', image: 'assets/photos/IMG-20241030-WA0018.jpg', description: 'Réalisation du 30 octobre 2024' },

    // Chantier 6 — 7 décembre 2024 (4 photos)
    { id: '121', title: 'Chantier 6', category: 'chantier6', image: 'assets/photos/IMG-20241207-WA0000.jpg', description: 'Réalisation du 7 décembre 2024' },
    { id: '122', title: 'Chantier 6', category: 'chantier6', image: 'assets/photos/IMG-20241207-WA0001.jpg', description: 'Réalisation du 7 décembre 2024' },
    { id: '123', title: 'Chantier 6', category: 'chantier6', image: 'assets/photos/IMG-20241207-WA0002.jpg', description: 'Réalisation du 7 décembre 2024' },
    { id: '124', title: 'Chantier 6', category: 'chantier6', image: 'assets/photos/IMG-20241207-WA0003.jpg', description: 'Réalisation du 7 décembre 2024' },

    // Chantier 7 — 25 janvier 2025 (3 photos)
    { id: '125', title: 'Chantier 7', category: 'chantier7', image: 'assets/photos/IMG-20250125-WA0009.jpg', description: 'Réalisation du 25 janvier 2025' },
    { id: '126', title: 'Chantier 7', category: 'chantier7', image: 'assets/photos/IMG-20250125-WA0010.jpg', description: 'Réalisation du 25 janvier 2025' },
    { id: '127', title: 'Chantier 7', category: 'chantier7', image: 'assets/photos/IMG-20250125-WA0011.jpg', description: 'Réalisation du 25 janvier 2025' },

    // Chantier 8 — 11-12 mars 2025 (3 photos)
    { id: '128', title: 'Chantier 8', category: 'chantier8', image: 'assets/photos/IMG-20250311-WA0000.jpg', description: 'Réalisation du 11 mars 2025' },
    { id: '129', title: 'Chantier 8', category: 'chantier8', image: 'assets/photos/IMG-20250311-WA0001.jpg', description: 'Réalisation du 11 mars 2025' },
    { id: '130', title: 'Chantier 8', category: 'chantier8', image: 'assets/photos/IMG-20250312-WA0011.jpg', description: 'Réalisation du 12 mars 2025' },

    // Chantier 9 — 30 avril 2025 (2 photos)
    { id: '131', title: 'Chantier 9', category: 'chantier9', image: 'assets/photos/IMG-20250430-WA0003.jpg', description: 'Réalisation du 30 avril 2025' },
    { id: '132', title: 'Chantier 9', category: 'chantier9', image: 'assets/photos/IMG-20250430-WA0004.jpg', description: 'Réalisation du 30 avril 2025' },

    // Chantier 10 — 30 octobre 2025 (8 photos)
    { id: '133', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0001.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '134', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0002.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '135', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0003.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '136', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0004.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '137', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0005.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '138', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0006.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '139', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0007.jpg', description: 'Réalisation du 30 octobre 2025' },
    { id: '140', title: 'Chantier 10', category: 'chantier10', image: 'assets/photos/IMG-20251030-WA0008.jpg', description: 'Réalisation du 30 octobre 2025' },

    // Chantier 11 — 1 février 2026 (1 photo)
    { id: '141', title: 'Chantier 11', category: 'chantier11', image: 'assets/photos/IMG-20260201-WA0000.jpg', description: 'Réalisation du 1 février 2026' },

    // Chantier 12 — 29 mars 2026 (14 photos)
    { id: '142', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0000.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '143', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0001.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '144', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0002.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '145', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0003.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '146', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0004.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '147', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0005.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '148', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0006.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '149', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0007.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '150', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0008.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '151', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0009.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '152', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0011.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '153', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0012.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '154', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0013.jpg', description: 'Réalisation du 29 mars 2026' },
    { id: '155', title: 'Chantier 12', category: 'chantier12', image: 'assets/photos/IMG-20260329-WA0014.jpg', description: 'Réalisation du 29 mars 2026' }
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
