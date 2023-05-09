import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Game } from '../shared/game.interface';

@Component({
  selector: 'games-home',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {

  public gameHovered?: Game;

  public games: Game[] = [
    {
      name: 'Binding of Isaac',
      favorite: true,
      steamId: '250900',
      background: 'https://cdn.akamai.steamstatic.com/steam/apps/2231380/page.bg.jpg',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/250900/library_600x900.jpg',
      video: "https://www.youtube.com/embed/JUKJYuSN_KM?autoplay=1&mute=1&loop=1&controls=0",
    },
    {
      name: 'Cult of the Lamb',
      favorite: true,
      steamId: '1313140',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/library_600x900.jpg',
    },
    {
      name: 'Have a nice death',
      favorite: true,
      steamId: '1740720',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1740720/library_600x900.jpg',
    },
    {
      name: 'Tunic',
      favorite: true,
      steamId: '553420',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/553420/library_600x900.jpg',
    },
    {
      name: 'Core Keeper',
      favorite: true,
      steamId: '1621690',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1621690/library_600x900.jpg',
    },
    {
      name: 'Rogue Legacy 2',
      steamId: '1253920',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1253920/library_600x900.jpg',
    },
    {
      name: 'Tiny Rogues',
      steamId: '2088570',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/2088570/library_600x900.jpg',
    },
    {
      name: 'Hades',
      favorite: true,
      steamId: '1145360',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg',
    },
    {
      name: 'Hollow Knight',
      favorite: true,
      steamId: '367520',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg',
    },
    {
      name: 'Valheim',
      favorite: true,
      steamId: '892970',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/892970/library_600x900.jpg',
    },
    {
      name: 'Satisfactory',
      favorite: true,
      steamId: '526870',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/526870/library_600x900.jpg',
    },
    {
      name: 'Stardew Valley',
      steamId: '413150',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg',
    },
    {
      name: 'Horizon Zero Dawn',
      favorite: true,
      steamId: '1151640',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/library_600x900.jpg',
    },
    {
      name: 'God of War',
      favorite: true,
      steamId: '1593500',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/library_600x900.jpg',
    },
    {
      name: 'Control',
      favorite: true,
      steamId: '870780',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/870780/library_600x900.jpg',
    },
    {
      name: 'Icarus',
      favorite: true,
      steamId: '1149460',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1149460/library_600x900.jpg',
    },
    {
      name: 'Portal 2',
      steamId: '620',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg',
    },
    {
      name: 'Zelda',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/0287a5a007c2ea55f700d9cfc9e23360.jpg',
    },
    {
      name: 'Mario',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/2f71c384fb06eac987356d05d42c3cf6.jpg',
    },
    {
      name: 'Batman Arkham',
      steamId: '35140',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/35140/library_600x900.jpg',
    },
    {
      name: 'Darksiders',
      steamId: '462780',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/462780/library_600x900.jpg',
    },
    {
      name: 'Detroit Become Human',
      steamId: '1222140',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1222140/library_600x900.jpg',
    },
    {
      name: 'Tomb Raider',
      steamId: '750920',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/750920/library_600x900.jpg',
    },
    {
      name: 'Anno 1800',
      steamId: '916440',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/916440/library_600x900.jpg',
    },
    {
      name: 'Prey',
      steamId: '480490',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/480490/library_600x900.jpg',
    },
    {
      name: 'Rime',
      steamId: '493200',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/493200/library_600x900.jpg',
    },
    {
      name: 'Star Wars',
      steamId: '1172380',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1172380/library_600x900.jpg',
    },
    {
      name: 'A Plague Tale',
      steamId: '752590',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/752590/library_600x900.jpg',
    },
    {
      name: 'A Way Out',
      steamId: '1222700',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/library_600x900.jpg',
    },
    {
      name: 'It Takes Two',
      steamId: '1426210',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900.jpg',
    },
    {
      name: 'Astroneer',
      steamId: '361420',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/361420/library_600x900.jpg',
    },
    {
      name: 'No Mans Sky',
      steamId: '275850',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/275850/library_600x900.jpg',
    },
    {
      name: 'Deaths Door',
      steamId: '894020',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/894020/library_600x900.jpg',
    },
    {
      name: 'Dishonored',
      steamId: '205100',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/205100/library_600x900.jpg',
    },
    {
      name: 'Neon Abyss',
      steamId: '788100',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/788100/library_600x900.jpg',
    },
    {
      name: 'Ori',
      steamId: '261570',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/261570/library_600x900.jpg',
    },
    {
      name: 'Potion Craft',
      steamId: '1210320',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1210320/library_600x900.jpg',
    },
    {
      name: 'Monkey Island',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/536b6cdafca2ed6eab8ec7fd981fea65.jpg',
    },
    {
      name: 'Sniper Elite',
      steamId: '1029690',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1029690/library_600x900.jpg',
    },
    {
      name: 'Ghost Recon',
      steamId: '2231380',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/2231380/library_600x900.jpg',
    },
    {
      name: 'The Witness',
      steamId: '210970',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/210970/library_600x900.jpg',
    },
    {
      name: 'The Elder Scrolls',
      steamId: '306130',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/306130/library_600x900.jpg',
    },
    {
      name: 'World Of Warcraft',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/4b5648113336d2b63c815e45f68d9bd0.png',
    },
    {
      name: 'Diablo',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d81f3fc41fc0037e8a9044dc05ede41e.jpg',
    },
    {
      name: 'Remnant From the Ashes',
      steamId: '617290',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/617290/library_600x900.jpg',
    },
    {
      name: 'Dicey Dungeons',
      steamId: '861540',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/861540/library_600x900.jpg',
    },
    {
      name: 'The Medium',
      steamId: '1293160',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1293160/library_600x900.jpg',
    },
    {
      name: 'Minacraft',
      image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/9f03e11eac3de5e5e80ea71b985e3ca7.jpg',
    },
    // {
    //   name: 'Indiana Jones',
    //   steamId: '6010',
    //   image: 'https://cdn.akamai.steamstatic.com/steam/apps/6010/library_600x900.jpg',
    // },
    {
      name: 'Day of the Tentacle',
      steamId: '388210',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/388210/library_600x900.jpg',
    },
    {
      name: 'Full Throttle',
      steamId: '228360',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/228360/library_600x900.jpg',
    },
  ];

  constructor(private httpClient: HttpClient) {

    for (const game of this.games) {
      this.getGameInfo(game);
    }
  }

  private getGameInfo(game: Game) {
    if (game.steamId) {
      this.httpClient.get(`https://store.steampowered.com/api/appdetails?appids=${game.steamId}`).subscribe((result: any) => {
        const steamId = game.steamId as string;
        game.name = result[steamId].data.name;
        game.description = result[steamId].data.description;
        game.background = result[steamId].data.background_raw;
      });
    }
  }

  public gameHover(hover: boolean, game: Game) {
    if (hover) {
      this.gameHovered = game;
    } else {
      this.gameHovered = undefined;
    }
  }
}

