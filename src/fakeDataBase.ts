type VideoGame = {
  title: string;
  desc: string;
  releaseYear: number;
  link: string;
};

type VideoGames = VideoGame[];

const objectArray: VideoGames = [
  {
    title: "World of Warcraft",
    desc: "Le jeu reprend place dans le monde imaginaire d’Azeroth, et dont le cadre historique se situe quatre ans après les évènements concluant Warcraft III. Le joueur choisit son personnage parmi huit, dix ou douze races disponibles divisées en deux factions : l’Alliance et la Horde.",
    releaseYear: 2004,
    link: "Warcraft",
  },
  {
    title: "The legend of zelda : Ocarina of Time",
    desc: "The Legend of Zelda: Ocarina of Time (« La légende de Zelda : l’ocarina du temps ») est un jeu vidéo d'action-aventure développé par Nintendo EAD et édité par Nintendo sur Nintendo 64. Il est sorti le 21 novembre 1998 au Japon, le 23 novembre 1998 en Amérique du Nord, puis le 11 décembre 1998 en Europe et en Australie. ",
    releaseYear: 1998,
    link: "Zelda",
  },
  {
    title: "Gris",
    desc: "Gris est un jeu vidéo indépendant de plateformes développé par Nomada Studio et édité par Devolver Digital, sorti le 13 décembre 2018 sur Windows, MacOS et Nintendo Switch. Le jeu sort également sur iOS le 21 août 2019 et sur Playstation 4 le 26 novembre 2019.",
    releaseYear: 2018,
    link: "Gris",
  },
  {
    title: "Celeste",
    desc: "Celeste est un jeu vidéo indépendant de plates-formes développé et édité par Extremely OK Gamesa, un petit studio canadien dirigé par Maddy Thorson. Issu d'un prototype éponyme développé en 2015 lors d'une game jam, il est publié sur Windows, macOS, Linux, PlayStation 4, Nintendo Switch et Xbox One le 25 janvier 2018, et sur Google Stadia le 28 juillet de la même année.",
    releaseYear: 2018,
    link: "Celeste",
  },
  {
    title: "Doki Doki Litterature Club",
    desc: "Doki Doki Literature Club! (souvent abrégé DDLC) est un jeu vidéo américain de type visual novel développé par Team Salvato, sorti le 22 septembre 2017 sur Microsoft Windows, macOS et Linux, et le 8 octobre 2017 sur Steam.",
    releaseYear: 2017,
    link: "DDLC",
  },
  {
    title: "The elder scroll V : Skyrim",
    desc: "The Elder Scrolls V: Skyrim (souvent abrégé en Skyrim, Bordeciel en français) est un jeu vidéo de rôle et d'action développé par Bethesda Game Studios et édité par Bethesda Softworks, sorti le 11 novembre 2011 sur PlayStation 3, Xbox 360 et Microsoft Windows. C'est le cinquième opus de la série de jeux The Elder Scrolls, après Arena, Daggerfall, Morrowind et Oblivion.",
    releaseYear: 2011,
    link: "Skyrim",
  },
];

export { objectArray };
