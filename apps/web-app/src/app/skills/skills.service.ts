import { Injectable } from '@angular/core';
import { SkillType } from './skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public readonly skills: SkillType[] = [
    {
      name: 'Programming Languages',
      description: 'lorem',
      skills: [
        {
          name: 'HTML5',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        },
        {
          name: 'CSS3',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        },
        {
          name: 'SASS',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        },
        {
          name: 'JavaScript',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'TypeScript',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'CSharp',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: 'Python',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'Rust',
          description: '',
          borderColor: '#B87333',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
        },
      ]
    },
    {
      name: 'Major Frameworks',
      description: 'lorem',
      skills: [
        {
          name: 'Angular',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          name: 'Angular Material',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/ccf7b357bae6f4c8845851055811bbd1233abfc1da5333f3b1ecec05d78e9d95/68747470733a2f2f6d6174657269616c2e616e67756c61722e696f2f6173736574732f696d672f616e67756c61722d6d6174657269616c2d6c6f676f2e737667',
        },
        {
          name: 'Tailwind',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        },
        {
          name: 'NestJs',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
        },
        {
          name: 'NodeJs',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Express',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
      ]
    },
    {
      name: 'Other Frameworks and 3rd Parties',
      description: 'lorem',
      skills: [
        {
          name: 'OpenApi Swagger',
          description: '',
          borderColor: 'silver',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEWF6i3///8XNkeK8iuH7SyH7iwWNEcUMkcSL0gQLEgTMEeJ8SwLJkgII0gOKkgAITcAKDwAGzMALUAFIUgAFzB93S8aO0ZzzDIAHUhLij0AJTp20TE8cEEPMkRkszdwxzM3aUEqVERIhD4/dkBhrjh62DAvXEMAGUk1ZUJEfj4fQ0UiR0X09faB5C4nT0QbPUZUmDtQkjySnKNUZnFkc33JztFcpTlrvzW6v8OlrbKDjpVBV2QmQlHg4+U2TVtOjj10gYnX292fqK1dbXcxX0N7iJBdqDi2vfLYAAAWiklEQVR4nN2deV/iyNPAQy4ICUkk3AgoKjJyiCiCF4PujO//JT0JKqnqBFKdw/H51f6xn92ZkP6mu6uqq6urhVzmMn5ZrB7mj5vbp/X6WRTF5/X66XbzOH9YLV7G2b9eyPLHx4uHv0/P9pHVssvlcqcjfkmn4/633bKO7Oenx4dFppxZEY5X89vWkWWXfaxw6ZRtq9K6na+ywsyCcLzaPFuWHcWGOG3Let5kQpk64eJxXWlF9lx4b7Yq6/ki7QalSjhe3dlWLDrQl/bdKs02pUm4urOscgK6Lym7kCn2ZFqEr3/tVPC+IMvzl5Ralg7hw/ooPbwPsY+e0hmtKRCO560Wae6pqpovuv+4/6b89U7LnqegXBMTvmws+zBWUTMNp1QyzNrV9HQwHJxOr2qmUSo5hqkVD8ParU3iwZqQ8OWusn94qgUXzRgN+7NuvV0VJChCtV3vzvrDkfs3zMJ+zHLlLiFjIsKXu73TL68ZpdrZrNsWFElXFFmWBSzu/1EUXVKEdnd2VjMMLb+P8SgZYwLCvf2nFozG6e/uhe6hCVGyBb3o/h44xp6+dPsxwXyMTTh+DO8/VSuJZ92JSxcNBzF1fdI9E0taKGTZmn874UM5TL+omiM2e7KucMD5ouhyr6k6oZB25+FbCV+frZBmFEtis67rPH0X6Etd6fVrpWIIo7WONx1jET4eBe2fal4Ol0IivC9IoTu8NINfsHP0+E2Ei05wgOadq1lVijc4g6JI1VmtFFSuthjDX+Un3AQ7sOCcdhU9JbwP0eXzqRMYrJ3K38wJX8VABxYaJ73Uus8XReoNGwFG+/k1W8J5oAMLzklbSj77wkSW6kOnEJiNbxkSjp9a7PxrZMb3yXjSYOej9cRl/3kIF2XGxqulaS9Dvg/G3rTE6NVy5zUbwnmF+Zhm/jwF6xDJqJ/nTWakVjjMP53w1mIGqNMU0tcvYaIITYcZqkeb1AnHa0aHGqO69C18nkj1kYFfb9+mTPjKRNCKxuwbBqgvsj4zsOUoPxP1DY1wYWFAY9pO18BHi96e4m7s2K/pET5gHaM6v7+1Az9E1psOUqqdCilURSFkAAti7/tmIBSpJ2L7T0IkEL5hQOPP5HtUaFCUyQCPVIrViCacH6EfbTT/wQj9EnekNlBrCC5cJCEGVEvdfzNCv0TqYg+nEokYRfiGAIv5b9ehrOjtPDIbkQM1ghArGW1U/VdT0BelOtJ41M1hwhUCNIeBqOe/EFn+Y3IgHiRcIMDS2b/vwA9RzkoI8TUu4QsKqDn9f6tjoEi/HIhoH4rCHSAcd6Cr5jR/DqCL2ISIHfGAj3qAcA3Xu87NTwJ0EW8gYvkpDuF/cLnk/P5ZgGwv2nf8hG9wwVv6QXPwS6Q+VDfWXrO4jxCpUePs5wG6iGfQSd2rUPcQjuEc1Ib/2pEJF30ITH+ns0fb7CGEWqY4+gl2PkzkEXDg9mmbcMI5iIuq+eqPJazmgcW2wp3wUMIFdLed9k9xZYKi1KFCPXolE4rA1DfOf+Yk/BD9HKwXO89Uwg2whMYPtBNQpD5QqHbYBmMI4QqM0cLpzx2iH6KcgthNmMkIIQRq9AdrmS+Rq0Vf24SN0yDhXzBGG8uf3oVuJy7BVGwFczYChK9gjJo/fBJ+iNQHC2IrsJAKED77ejQ/ovagrOiSJE88SdZaRdH1bVYYTz6OcuXv23QCdp8lfPAdbrXUpr1E0S+6v4fTazHvilg7i29elPNZ83gwGk1Pj5v3PYGYlyPXQTDcYmMaDOG47P9dg7Yk1Cf3o0tjl2WoasfxCaVLUyvkt1mamuE4J12ZxCjd+CajIx4mfPTVjHpFaakszzSc+1JIQoiiaGqxdH1O+srKld8Ee36I8AWomUaP8P30NruxlyKhB9kYTghTRekBfWqNDxDe+bZQ+0X4evoykEeQLqHbDvGC8KWlX/6T5c1+whew7NUIDVLabBJB+oRivnBBUXjgycrLXsL//C407intDMthTptQzF8RCPV7f7aU7/YRAmOvUkwhMrXZEYpGk/CLUNkcvewhBF1Icdfki0ZYe9InFBuEcaos/aUi6kRACGZh8Q9FzTRD25MBofaL8JPSHz+kAWciINz4Xej0CENfDj9JkAEhSe3JPdCJmzDCse+vFYeELoS/+CH5gqZppnOSgNDRCp6wJqjUpaiFod+JrXEI4dx3Zxp1ipWdIT2jmtrw7Pfv/ux+GX9JqZ/98uRs4GAdVqAMU7nu6wXg2PiEoAtPKK6SfgwTI1RjJrgLAtoBhAM/+imTG+QqqVOKfyqd+J1oBwkf/AAiaRYK+ikcS2nv70vvaIvQoTwD542/xNgRrnfrwvwpqbEyBCQ+wyHSFG1ekhZykv/R/XXiFyGw9g5lWrsCraE5Szvcod9AvVoiTW6l63fizup/Ef7dmQr1itRYbO9LpIHNI0oXzkSD9tWBY7OLLH4R+orUnJG0PTYWpWoynpDfX8KJaL6TCHWg3zuYcOVr0ktaqAW3QExEE/r7KGBPnQWTy90j1gIR+gtDmqnwQipgFKmj1EP/eBZotIEFDcaXXyOw/oxDNNjI4KevSgWhCseI9ptGKAP/24aEq50xVGtElaH/BrouT3HzOGUCwz8aZQHliVzbPfU5TAVmkFI/lutgAZemmMAX3ScTaG+1PrVZ/oLnc5gKjCYluaSeSEPQgiTrib1SA31YoAZhoXNa9gkXu2mo1qhNlaDTlkUf6iNISP6EOjtMt4SP/IMUe1VUBcwjzCekvgAM048FhoB9UrpvIl1Bwgw0jQ5WCmKeEnTYitzb6eAP39Qj9MMXqkjfDoHThN4Auuh9qKwH5BfI4q5hlfEnoW8ryBPaFRH2YRaE0PXmMLhAybdWn4S+rTDOyUsEpMyL9E9MFuUeuBTqiPwC4Gxt7YVH6G8ZNuib2pNCxqMULS7Ua/oore7sxXbTW/ASZXcNndIHaRVGUrKwFkBlcLharujT3fDyNmkEOA3JnoPnGEPXnxQp4hS5Dd+g0h8EKsqziAK0hsR15vb9deQY32Tg01TB4kLV6NvnYCJ6FtElfPKtIWmXZyvyEi3BaQtUPlHg8snhaNqFbxFvt4S+yybSe4IJMiSIke4VHdojnjCJ4j/Y8gj9fd/CMV0jIl0ulqj+Oo+gcCXHBBKk4503VHlxCX23m7qQ3r4eehyulYmDEPUKGHI27+mEwFdwVY2Qe9stnXi+E/IaRTOL/EX0EXm0NZhB9ptL6G85NYj5M9vXX0OnbZAFIY6TcJhqub3TUa5XIwBVStnD2gmKE2VgDlll1uB5dNf57vJCyPmf6ZTnM0FzbHBMErrgd9A2Uz4E6KjnnDD2FxYcoQjlHanSLIyFa/JhPSUuVeMrU3ss+MaCvr7HG1luH2aThYrnOsciG6zzj14E31hwfCW5aoCXq9NskjSlP8AgqhyfERhrayGsfGNBT5eVkDXMxCsVWK9Coye7Kr5L2VoJvjmk7dF5oi9RngklGSSOMOksjR71QwIdZT8I8505pPrdinSONmXyf5g3y8re07ReKcEDf8b8kf4HpSyYS2KxJuB7l+cCWDtFLlC8BF550h0gQPfbwobJulBfLtty2PdWlItlt1sPTRrV5fZy2cPl0JQufpMz7E4UL304qqETP5DxKOxcGtWIfPD899nwymGKjBSQklOq/YJjGA2xH6y8IJ2PGiX3z67vA0ULFGFWaxiGo51V4afRp/hdecMYDY6b91ENVXaKsLwRbr9cGlWMmskTwyzkA1lCSMfpXfNDB6maUWcRh591dNTSgEkaVeqFzzZpjS5AxJuIHw8XC2YxilDatbJzK+ycNkI4KywHCp0aUpaXu7+jMppLB2fMtQGil9vA+FxCla7f4HH68cu1SMLdjkDnSVjvRkC0VQshLOED0DARLH8NMZR72NYSWqjpV8jwQX0gnQTzHwmE/pbDGhBGxzyDhA7yuZUZyvMpweirDB0UUb0G/csoFBOZV6a8AJFw55iqa+F5Rxgd8wwQNnAPSiP0N2CMUe7hVE24UtOHSJ+o10gPK8cO814CoZ+n+CyA9nATGkwm/QSnFsKWoG1/kYns1PAPG9gw6zNmLhIIwTcDhNFLC4bQZGoNud4q8xcA4TsebDCeMGGyxVnnSurhZ6MJYQQCEEY77+xoUZdMHzItATkoeDnLRExEpg9x1EfvMX/O2YdJ5qHamB2ah9CdY7NRnfr+eXiFf/S+kWweJtOlDXRyiEk5RXFiGXWECqP0CvZzDZQdJM0uAx82mnCwMz/QWkRv0YXYQ9yLaEMKUTD6wkAWQalBe1iA9lB/D6bL81gLlzCpT4NcEOzT4GNFysDXtAV8xN9d7fiP4R/sXYoB4fRpuPxS74ga+zoRffKl8cmhGUusm+XJ6afOVI0ps15XetrnY/nLd9QMMfBV80WtEEm4e8z1Szc7QiPSWrzP+idXDlOmGR+QUiZnprt+cIx+oKSUrNxfu+sHo1GbCYG1xaSvOYZpNAao1BZ7ZkXVnML0pN+NWsiitQXX+lBx14cXMxEbdtbDnvS63fC614pcd/8ofO2oC73l+3sdPYbjia59FWdtQZc414fca3xZl/voxYH0hkPreIVn/Y8yyzwfUaZVw8Nr/DhxGmmGEJ0s9mUEtCO/BaSdthRwnOYtZqwNnUTgCdbyCDavJr1QFdyaWcWNl0J1k0V2qSfSFJpJjlwFHC+NGfOGncgTrOUQMJtEvqAsjnn76cFc+xZxMuk5Bb+DriXQvkVrHHPvCSVK0DN4uQSf/tM4XgH3x3MCSEyMdBXgj8BVa5GNCaciOszR5XsF3j+8i7cHjDafCpkQQo+NJ6cQ7gHfxd/Hb2aeqSBAp5sjXSuwjx8vFwPvCzkZZJuwBy7i52LEzKdhMobSV6bMRjpH1hXIpzny8mlyO0JVpP8KyhzMZCMfR/Q5Ml9hTpSVIK/tIs6xJB5hviFHUuEFyvTGuYn0D4Ujh1kYRHx0jCMZAiYJP37kl/qqhkNhTbSYupzcUJT9yJG5B3KpvETv2DnCE7i6yDwLmic3UPe3ZbyqUV6et/87XHnekDCD1QXeB6Dnl6JVZaJcfXRWPYN8E+U+HmFYrn6s8xYoYSmDE5bs+pfsNUkh5y1inZlBa2CVUkKGUzBhgZznDc/MvHyde/IPXNAnNDqNoF7HxDgg+Lg6OVcfbJB81BgU8FF18jof20M1/ZPO+JAqPYYBHiv/DTt/eE2dUFVc9yNhrb2wpsLMMmY/6tBj/m46OH8Y5wwpmocc04Qs+i+grQlpFB+CCpyEnwOm+l8TuAJWzQwIYbCL7FLAc8B38Cw3GKbEPpTR5ruR/hIY7uPSo2TwLPcKVhzwhyn1PD7e73XSjyeCXU66x7z3PD4YpgXiiVtYeIov1kcUdNCYquNhTYW7hHUx8K5J+rVN8Fluajwe1sVYIUJQPJhY2wSHorKICcNQGzFMAmqbqOUcJvSXwURdg52q9A+vyaguBtHXAqllZbY+DajrSSodxhzPS3+Rz5wnIU0dmCAXqDEEojW0xR4O9nGcRCYKUqVintSFB+tE8df6ktH+bMq1vmScS07bUoFZSa2HAGHOJ6QZDH2AMpnMd/mz1lqSGSkr22rQehVdQEI0+PCYi5ULEvLW3EN+oytGYXC8LZjHEdkMANbP72c3/eORg5MhSNFK5JI+hhDy1k1k8yndx7Y1D0sJlI7+p2GamlZgk2hIqhS6eaBwefzal1id+5JEreIdrZ2Q1nSo9iUoYJqgfqk0DG1OBoQkJ4RQv5S7Bm1YzlkmhCWCX49q0P6XCycEVp9UeE86Ya8Fz4bQpCQpyLCO8OseQt5a0DjnJDPCfGQqosDUgoZduL+eN2XVrvTYNPoMCFWDsjKDCdgH6nmnUpM9ZUKVVP0e1WTHd7Alrqt/ZTDdmC6hWatTinnD0xxHLwcIY92NoBqoH1MkVE2Ddn+7Ag7ksBcGBe638H+fer+F8H56aWiFoupJsdDg2IQMEn5qZ/eHNKNxfVMlNUG6AbOwPD5IGO+OEuni/OZ4ML26vh4Nfs0SBDT0Y+9+onxerY1OmucXOjGdFF5gELgm8OA9M7RqtML2nhldkty+8xJ4E0ZsPm6rkTh+CN0zs2aB/tfuCgrevfY/dt+T/TfAE3Fnl0q5A+WfijyBB3c7QZyoe9cyqcuSpugD4BwfLUiE/4/vztuE0PxP3X/IXvW0nxDfYRk4df5zhLnDMmSMku4hLfzYGwLlKozohNybt58QpEZ7hv9fk+wRWYCn3IN3yh0kxPcBD37mOIXn/YL+aAQhvtPZ5Eit/T6RjuHeUCV0Eh4gzM3hvdwGZTn8zSL9gvHaPZcBHyLEd6uX6IeOvkmkJgzX2v/t5dhPiG6uFh3aYvHbRLqBdiK4oiARjssdiPijelFqIsB9t45HEILU2i3iD/LfJHzGM3i9KpEQK1SxlEGqczzRz9CWyV41Gk2Ye0CIxnDvCdfvFFkeol2vChu34CFkELVR4ID294tSHWkcgFGEuTfohItFtf2vR6rezqOI49FeQ0gkzM0Ropr23Vy8InVxqZejcHebh5BBFBtNWogvE5H1Ji6TEQ1IIMy9obkoGoNgJbZvEmUywDvrlaghSiNk1I1YYAvvfJdISxVvWEYpGTJhblVBY1/9JyPVG6G4GRX2Cu74hLmF1UEfz5h+u07V21NcBaRjHTT0nIS5l04Z/XzRmH1rN8r6jCnX2OkcctX4CXPjtY1eIBqj+vfNRqnOXv9trw8427EIc7lbC78j7/RJe3vJRRH6DrPVbO1fD8YnzM2xSvXKxZx/w1CV9XOVLSxYiTaDcQhzCxvrG9fDmfakbBllqTdlrzfv2DQdw0/oTsYWfpeYb5y0M2SUpfZJIBeiRZ6C/ISeC8d0o1hwjrNi9PgcNimpQ3DUkhDmXkVGp24Ze8QSxjyiSL3jRiDpyhZfOVvMS5jLbQLdKBYag66Srgugy93TQP+5HRi2u5Q2YW4R7Eax6FzNqql1pCJVZ7VSIBfJfS+PiolPmMs9BrtRVM3LYTe0hhmnyLrQHV6GZMx1jh6jm5YSYe5lbQUa4HZkqdasEzNE9uIpvX6tFJahaK2JbloqhO6KqhwcqtuaeGKzJ0uxMk5kRZJ7TdXRQhIeRbtMWSmlSegN1XJIS7aQZ+dVnS+vxkvIqZ6fiaVQPLEcb4AmJMy93FWC03ELWTAa0373wqMk5It7dBfd/rRhBDLYP/kqd/EGaFJC1zjehvfjtiuNUu1strzwrrwPKyUoe0UE3T8TLpazs1rJCO+8bf/dviZpZCJCj7Gyj9HrS9No5L06+N16uypIUIRqu969bx4P8g3D3NN3H/2XjC8xoTdWrTCd40u+oJmGUyoZZu1qejoYDk6nVzXTKJUcw9QKQaMHxbaSjM+UCF3GR6sVPiHZPlXVfNH9R1X39xmQTst6TMyXCqErq6e9EzKmqPbREynQFCnpELoTctOy0oMsW+U0um8raRG6svrPSgWybLXu0um+raRI6K6QV3e2VSbNyT3SKVv23YprhRslqRJ6snhcV1qxKDvlVmX9N8bq4bCkTpjzunLzbFlsUOcwnd2ynjfpdt6nZEHoyXg1v21VLDuyNztl26q0buertDQLK1kRbuVl8bZ5EltHVssul8sdH7bTcf/b7bajlvi0eVtkBbeVTAk/ZPyyWD3MHze3T+u1dxPD83r9dLt5nD+sFi9ZDEtG/g/TARzwYbfQrwAAAABJRU5ErkJggg==',
        },
        {
          name: 'Dapr',
          description: '',
          borderColor: 'silver',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dapr_logo.svg/1200px-Dapr_logo.svg.png',
        },
        {
          name: 'AgGrid',
          description: '',
          borderColor: 'gold',
          image: 'https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png',
        },
        {
          name: 'ChartJs',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/9be0208aa516b4d1976412d27e9f73d851ea253f8ee005a0b600939f841bba8b/68747470733a2f2f7777772e63686172746a732e6f72672f6d656469612f6c6f676f2d7469746c652e737667',
        },
        {
          name: 'HighCharts',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/546198b6ccda37a8f566e9ba4b29901b34d338782e8e37f140ecf2ef484a0b1a/68747470733a2f2f77702d6173736574732e686967686368617274732e636f6d2f7376672f6c6f676f323032312e737667',
        },
        {
          name: 'Cypress',
          description: '',
          borderColor: 'gold',
          image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg',
        },
        {
          name: 'Passport',
          description: '',
          borderColor: 'silver',
          image: 'https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png',
        },
        {
          name: 'Keycloak',
          description: '',
          borderColor: 'gold',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Keycloak_Logo.png',
        },
        {
          name: 'Minio',
          description: '',
          borderColor: 'gold',
          image: 'https://min.io/resources/img/logo/MINIO_Bird.png',
        },
        {
          name: 'Jest',
          description: '',
          borderColor: 'gold',
          image: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
        },
        {
          name: '.net Core',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        },
      ]
    },
    {
      name: 'Database',
      description: 'lorem',
      skills: [
        {
          name: 'PostgreSQL',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          name: 'MongoDB',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'MySQL',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Redis',
          description: '',
          borderColor: '#B87333',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        },
        {
          name: 'SQLServer',
          description: '',
          borderColor: '#B87333',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
      ]
    },
    {
      name: 'Containerization',
      description: 'lorem',
      skills: [
        {
          name: 'Docker',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Podman',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg',
        },
        {
          name: 'Azure',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        },
        {
          name: 'AWS',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
        {
          name: 'Kubernetes',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
      ]
    },
    {
      name: 'CI / CD',
      description: 'lorem',
      skills: [
        {
          name: 'AWS Code Build',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/feb3389f1c3db706f621113b8b6637bb2b99d5e0752ebaf94cd09f8c7cb6ddf6/68747470733a2f2f73796d626f6c732e67657476656374612e636f6d2f7374656e63696c5f31322f305f6177732d636f64656275696c642e393637383735303431302e706e67',
        },
        {
          name: 'Azure Pipelines',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/7645f63ad0b0eded5b3eb2556c3313470f5afcec8f3d243503116231af4c8de8/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3531322f312a3150757a5155524a7a53645678502d62303068444a672e706e67',
        },
        {
          name: 'GitHub Actions',
          description: '',
          borderColor: 'gold',
          image: 'https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg',
        },
        {
          name: 'Circle CI',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
        },
        {
          name: 'Travis CI',
          description: '',
          borderColor: 'gold',
          image: 'https://camo.githubusercontent.com/12a65fb0beb7c1463b472782e6349e1b9be56be1b3d3e30a510831f4cd5ce43f/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7472617669732d63692f7472617669732d63692d69636f6e2e737667',
        },
      ]
    },
    {
      name: 'Tools',
      description: 'lorem',
      skills: [
        {
          name: 'VsCode',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          name: 'Nrwl Nx',
          description: '',
          borderColor: 'gold',
          image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2995/95998d2a-00f2-4e8e-9ebc-0b06de97c37f.png',
        },
        {
          name: 'Prettier',
          description: '',
          borderColor: 'silver',
          image: 'https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.png',
        },
        {
          name: 'Semantic Release',
          description: '',
          borderColor: 'silver',
          image: 'https://avatars.githubusercontent.com/u/12867925?s=280&v=4',
        },
        {
          name: 'Renovate',
          description: '',
          borderColor: 'silver',
          image: 'data:image/png;base64,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',
        },
        {
          name: 'Nginx',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        },
        {
          name: 'Webpack',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
        },
        {
          name: 'Git',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'GitHub',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
        {
          name: 'Bash',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        },
        {
          name: 'Gulp',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg',
        },
        {
          name: 'Grunt',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg',
        },
        {
          name: 'Npm',
          description: '',
          borderColor: 'grey',
          image: 'https://camo.githubusercontent.com/cd4ab87ddf055337774619e8bc76dec96ba766f0ffc8c89d4252dc01639773da/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f313238353633303932303236333936363732312f556b364f315147435f343030783430302e6a7067',
        },
        {
          name: 'Nexus',
          description: '',
          borderColor: 'grey',
          image: 'https://camo.githubusercontent.com/00d22971d61ac20976d16437c998df8a3931d980f0d9949bd781806cf63028b6/68747470733a2f2f68656c702e736f6e61747970652e636f6d2f646f63732f66696c65732f3333313032322f33343533373936342f332f313536343637313330333634312f4e657875735265706f5f49636f6e2e706e67',
        },
        {
          name: 'Figma',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        },
        {
          name: 'Balsamic',
          description: '',
          borderColor: 'grey',
          image: 'https://camo.githubusercontent.com/769a6e7592fbd9ca109d7a3ebe08042b2249edc19855a34df7aa015761d1b890/68747470733a2f2f62616c73616d69712e636f6d2f6173736574732f636f6d70616e792f6272616e646173736574732f736d696c6579666163652d7472616e73706172656e742d3130383078313038302e706e67',
        },
        {
          name: 'Postman',
          description: '',
          borderColor: 'grey',
          image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        },
      ]
    }
  ]
}
