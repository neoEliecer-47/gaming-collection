import windowsSrc from "../assets/platforms/windows.avif";
import linuxSrc from "../assets/platforms/linux.avif";
import appleSrc from "../assets/platforms/apple.avif";
import androidSrc from "../assets/platforms/android.avif";
import playstationSrc from "../assets/platforms/ps.avif";
import xboxSrc from "../assets/platforms/xbox.avif";
import nintendoSrc from "../assets/platforms/nintendo.avif";
import segaSrc from "../assets/platforms/sega-2.avif";
import webSrc from "../assets/platforms/web.avif";
import commodoreSrc from "../assets/platforms/commodore-amiga.avif";
import atariSrc from "../assets/platforms/atari.avif";
import doSrc from "../assets/platforms/3DO_Logo.svg.avif";
import { platformsProps } from "@/types";

import platinumSrc from "../assets/trophies/platinum.avif";
import goldSrc from "../assets/trophies/gold.avif";
import silverSrc from "../assets/trophies/silver.avif";
import bronceSrc from "../assets/trophies/bronce.avif";

import devSrc from "../assets/collections/developers.avif";
import genresSrc from "../assets/collections/genres.avif";
import platSrc from "../assets/collections/platforms.avif";
import storesSrc from "../assets/collections/stores.avif";
import tagsSrc from "../assets/collections/tags.avif";
import publiSrc from "../assets/collections/publishers.avif";

export const platformsImages: platformsProps[] = [
  { slug: "pc", imgSrc: windowsSrc },
  { slug: "ios", imgSrc: appleSrc },
  { slug: "linux", imgSrc: linuxSrc },
  { slug: "playstation", imgSrc: playstationSrc },
  { slug: "xbox", imgSrc: xboxSrc },
  { slug: "nintendo", imgSrc: nintendoSrc },
  { slug: "android", imgSrc: androidSrc },
  { slug: "sega", imgSrc: segaSrc },
  { slug: "web", imgSrc: webSrc },
  { slug: "commodore-amiga", imgSrc: commodoreSrc },
  { slug: "atari", imgSrc: atariSrc },
  { slug: "3do", imgSrc: doSrc },
];

export const trophiesImages = [
  { image: platinumSrc },
  { image: goldSrc },
  { image: silverSrc },
  { image: bronceSrc },
];

export const mainPlatformsFilters = [
  { name: "PC", id: 4, platforms: [] },
  {
    name: "playStation",
    id: 0,
    platforms: [
      { name: "playStation 4", id: 18 },
      { name: "playStation 5", id: 187 },
    ],
  },
  {
    name: "xbox",
    id: 0,
    platforms: [
      { name: "xbox one", id: 1 },
      { name: "xbox series s/x", id: 186 },
    ],
  },
  {
    name: "nintendo",
    id: 0,
    platforms: [
      { name: "nintendo switch", id: 7 },
      { name: "nintendo 3ds", id: 8 },
    ],
  },
  { name: "iOS", id: 3, platforms: [] },
  { name: "android", id: 21, platforms: [] },
  { name: "apple macintosh", id: 5, platforms: [] },
  { name: "linux", id: 6, platforms: [] },
];

export const mainOrderingFilters = [
  { name: "name", id: "name", platforms: [] },
  { name: "released", id: "-released", platforms: [] },
  { name: "rating", id: "-rating", platforms: [] },
  { name: "metacritic", id: "-metacritic", platforms: [] },
  { name: "created", id: "-created", platforms: [] },
  { name: "updated", id: "-updated", platforms: [] },
];

export const mainCollectionsFilters = [
  { name: "developers", id: 1, imgSrc: devSrc },
  { name: "genres", id: 2, imgSrc: genresSrc },
  { name: "platforms", id: 3, imgSrc: platSrc },
  { name: "stores", id: 4, imgSrc: storesSrc },
  { name: "tags", id: 5, imgSrc: tagsSrc },
  { name: "publishers", id: 6, imgSrc: publiSrc },
];

export const storesData = [
  { id: 1, name: "steam" },
  { id: 3, name: "PlayStation Store" },
  { id: 2, name: "Xbox Store" },
  { id: 4, name: "App Store" },
  { id: 5, name: "GOG" },
  { id: 6, name: "Nintendo Store" },
  { id: 7, name: "Xbox 360 Store" },
  { id: 8, name: "Google Play" },
  { id: 9, name: "itch.io" },
  { id: 11, name: "Epic Games" },
];

export const platformsData = [
  { id: 4, name: "PC" },
  { id: 187, name: "PlayStation 5" },
  { id: 2, name: "Xbox Store" },
  { id: 4, name: "App Store" },
  { id: 5, name: "GOG" },
  { id: 6, name: "Nintendo Store" },
  { id: 7, name: "Xbox 360 Store" },
  { id: 8, name: "Google Play" },
  { id: 9, name: "itch.io" },
  { id: 11, name: "Epic Games" },
];

export const genresData = [
  {
    slug: "action",
    description:
      "<p>The action game is a genre that includes fights, puzzles, and strategies emphasizing coordination and reaction. It includes a large variety of sub-genres like fighting, beat &#39;em ups, shooters, survivals, mazes, and platforms; sometimes even multiplayer online battles and real-time strategies. Usually, the player performs as the protagonist with its unique abilities; some games add power-ups along the way. The character aims to complete levels, collect items, avoid obstacles, and battle against antagonists. It&#39;s necessary to avoid severe injuries during fights; if the health bar goes low, the player loses. Some games have an unbeatable number of enemies, and the only goal is to maximize score and survive for as long as possible. There might be a boss enemy who appears at the last level; he has unique abilities and a longer health bar. Pong is one of the first action games, released in 1972; the latest include Battlefield, Assasin&#39;s Creed, Fortnite and Dark Souls.</p>",
  },
  {
    slug: "indie",
    description:
      "<p>Indie is one of the vaguest categories in video games. Generally, it describes any title developed by independent (thus the name) studio which means that game&#39;s launch was not powered with publisher&#39;s funds or any financial support other than crowdfunding. The genre is kickstarted mainly because of the variety of crowd-funding policies and many early-access platforms like Steam Greenlight. A corporation does not develop indies, so primarily the genre is associated with single developers or small studios. Lacking the budget, indie games are mostly shorter and lesser than their publisher-financed competitors. Such titles, therefore, bear no attachment to censorship regulations and can express whatever authors wish. It is worth to mention that a large portion of adult games is indie. The rules above can be applied to the most games; however, not all. Some titles may feature publisher, but it cannot affect the final product. Some specific examples of indie are World of Goo, Undertale, and Braid.</p>",
  },
  {
    slug: "adventure",
    description:
      "<p>An adventure game is a genre in which the player performs as a protagonist. It is usually supported by puzzle-solving, gathering items, dialogues, and intervening goals. Adventure focus on story, many of them are designed for a single player. Colossal Cave Adventure is known as the first of the genre, released in 1976. They rocketed in the 1980s; later it led to the appearance of independent video game developers. The Walking Dead by TellTale Games is considered as the game which renewed the whole genre. It has a revolutionary mechanics which change the gameplay as the players make their choices. These games are still favorite among the users; independent developers start crowd-funding companies to raise money; the genre is celebrated on practically any platform.</p>",
  },
  {
    slug: "role-playing-games-rpg",
    description:
      "<p>Role-playing games use protagonists as the leading figures in the occurring events. The player performs as a protagonist; his moves affect the setting and the possible outcome. Some RPGs are created in the form of trading card games; some relate to wargames. Except for the video RPGs, the genre is divided into two primary forms; the original tabletop role-playing, handled through discussion, and live-action role-playing, conducted through the characters&#39; actions. Each of them has a game master who&#39;s in charge of the rules and settings. The video RPGs include sandboxes, like GTA; tactical games, like Dragonfall; and roguelikes, like Mystery Dungeon. Usually, the primary purpose is to save the world or other characters. That includes taking part in collaborative storytelling, fighting, collecting items and solving puzzles if needed. The plot tends to develop in a fantasy or science fiction universe.</p>",
  },
  {
    slug: "strategy",
    description:
      "<p>A strategy is a broad genre, its main feature lies in letting players be autonomous, they claim decision-making and high situational awareness, require private decision tree-style thinking as each action can determine the possible outcome. There are all sorts of strategies such as team plays, simulation games, and wargames. Many actions and adventure games need strategic thinking, but they can be hardly seen as ones. A strategy usually is extensive in range of sub-genres, its primary emphasis is on the player&#39;s ability to outthink opponents. It rarely involves a physical challenge, focusing on puzzles.<br />\nThere might be no enemy at all, which makes strategies very different from other genres. Resources, actions, powers, and gaps of each side of competitors are generally balanced. The last strategies released are Total War: Warhammer II, Mutant Year Zero: Road to Eden, and Into the Breach.</p>",
  },
  {
    slug: "shooter",
    description:
      "<p>A shooter is a sub-genre of action video games the gameplay of which is thoroughly centered around shooting targets. Such games can be presented from first and the third perspectives with the latter being mostly twin-stick platforming shooters. Mouse and keyboard are widely regarded as the best controllers for shooters, as the firing demands high precision achieved only with manual aiming. The primary goal of shooters is to defeat enemies by discharging loads of bullets into them. Shooters are the most discussable video game genre when it comes to judging violence in games, as the gunfire process involves realistic scenes of killing quite often. Sub-genre of shooters is also divided by sub-subgenres such as shoot&#39;em ups, tactical shooters, and hero shooters.  The former involves changing a direction of movement and shooting forward while the latter focuses on wiping out tons of enemies by one protagonist. Notable games of the genre are Resogun, Bulletstorm and Call of Duty.</p>",
  },
  {
    slug: "casual",
    description:
      "<p>Casual games are a sub-genre, they can exhibit any gameplay. They are typically identified by simple rules and low requirements for timing and skills. Usually, casual games impose low production and distribution costs, which is why developers widely produce them. Casual games can perform at any platform; they do not require any individual peripherals. Usually, there&#39;s no need to save to continue later, mechanics include a one-button mouse or cellphone keypad, but the gameplay is still puzzling and elegant. They also have simple gameplay and allow to take breaks between rounds without losing interest in it. The first well-known game of the genre is an arcade Pac-Man released in 1980. However, actions, graphics, and sounds are often quite limited but can display additional features in multiplayer modes. Simplicity along with elegance aren&#39;t the only traits making the genre popular; these games are also quite cheap.</p>",
  },
  {
    slug: "simulation",
    description:
      "<p>Simulation games are a diverse and broad genre, commonly created for imitating real-life activities. There are no strict goals, the player is allowed to perform freely; he can play for one or more characters, dabbling into occupations, building towers, making relationships, and doing sports. This genre is divided into sub-genres, such as sports, construction and management, strategies, and wars. Each one has its famous games. Life simulators are known for the Sims series; sports simulators - for the NBA series; city-buildings for the SimCity series. The first simulations ever developed are BMX Simulator, Pro Boxing Simulator, and Grand Prix Simulator; each released in the 1980s. Among recently released, the most famous are Jurassic World Revolution, F1 2018, and Cities: Skylines.</p>",
  },
  {
    slug: "puzzle",
    description:
      "<p>Puzzle games are a broad genre that maintains logical and conceptual challenges; it may include concentration, logic, pattern recognition, word completion, and sequence searching. The games have either infinite attempts to solve puzzles and an unlimited amount of time or involve restricted timing and limited tries. They typically offer related puzzles for each theme, using the same colors, shapes, and numbers; however, the game design might be quite simple. There is also a set of rules which form the mechanics, and various outcomes leading to next levels. Sometimes they are tied into a whole story developing throughout the play. Minesweeper is one of the first puzzles developed in the 1980s. The gameplay and mechanics are very easy, and the game itself is cheap. At the time, it led to tremendous success which made puzzles one of the most favored genres ever since. It is now divided into various types and is available via the majority of platforms.</p>",
  },
  {
    slug: "arcade",
    description:
      "<p>Arcades are the most common and preferred genre of video games. Starting with the arcade machines which were activated by inserting a coin, the history of the genre backtracks to 1978&#39;s Space Invaders. Due to the limited time of gameplay, arcades often have short levels and structured as platformers with simple mechanics including jumping, shooting or moving around the screen space. There are little-to-none puzzles in such video games, and a lot of in-game situations are incredibly skill-dependent which is also very much reminiscent of arcade machines past — the leaderboard was an essential element awaking the competitive and exciting element in players. The primary feature to early arcades is their unbeatable nature — most of them focus the attention on an infinite amount of levels making the title practically unbeatable. The most significant examples of the arcades are Pac-Man, Donkey Kong Jr., and Mario Bros.</p>",
  },
  {
    slug: "platformer",
    description:
      "<p>Platformer is a sub-genre of action games. Normally, the player aims to perform as a protagonist and complete levels and tasks while exploring areas. It often requires solely jumping and climbing, but more complex games also include puzzle solving and fighting enemies. One of the distinctive elements is the jump button, swiping or touchscreen. The players have control over the height and distance of jumps; they have to avoid falling as it leads to either losing points and health bars or their death. However, in some platformers like The Legend of Zelda series, jumps are done automatically. They originated in the 1980s, back then the main mechanics were to climb ladders as much as jumping. Recent developments changed the design a bit; now platformers typically exist in a 3D environment. The last released are Super Mario Galaxy and Ratchet &amp; Clank Future: Tools of Destruction.</p>",
  },
  {
    slug: "massively-multiplayer",
    description:
      "<p>Massively-multiplayer games is an online sub-genre is an online game which includes large numbers of players performing on the same server. The aim is to explore the universe, collect items, complete tasks and participate in battles. Usually, this is pretty much the gameplay; some multiplayer follow a specific plot. They suit every network-capable platform. MMs enable users to cooperate and battle with each other and represent many genres. The most popular type is RPG multiplayer such as World of Warcraft and Final Fantasy XIV.<br />\nTo upgrade avatars or equipment, one should buy it with real money accumulated in the virtual economy; the first game which implemented the system is Ultima Online. This often leads to cheating or pirating. One of the most famous among the recent MMs is SCUM, Battlerite Royale, The Elder Scrolls, and DayZ.</p>",
  },
  {
    slug: "racing",
    description:
      "<p>Racing games is the video game genre with a high focus on driving competition. Such games are usually presented from the first-person or a third-person perspective. It is noted that gamepads are generally more suited to control the vehicle than keyboard/mouse pair. Although car avatars may render real-life examples, there are many instances where spaceships, formless mechanisms and other fantastical entities take the role of the avatar. Grand Prix released in 1969 is considered to be the first racing game ever made. Racings is a defining genre of a video game which is, in turn, can be divided into a lot of sub-genres: for instance, a primary focus may be made on destroying enemies&#39; vehicles (FlatOut, Twisted Metal) or crushing as many environments as possible (Split/Second). Those mechanics can alternatively be mixed with open world structure or set in the defined assortment of separate racing events.</p>",
  },
  {
    slug: "sports",
    description:
      "<p>Sports games are a genre that simulates competitive and single-player sports like arcades, management, simulation, multisport, and fighting. The primary goal is to compete with other players, either online or via consoles, upgrade clubs and buy new players, maintain a team&#39;s strategy. The genre was released in the 1970s, and the sales rocketed right away. The games recreate track and field, needed equipment, teams. Some of them maintain playing while others emphasize strategy and sports management. Games like Need for Speed and Punch-Out!!, mock sports for a subtle effect. It can be performed on every platform; some of them, like the Wii console, specialize in featuring sports games. EA and 2K dominate sports and hold licenses for developing games based on official leagues such as the Madden NFL series, the NBA series, the WWE 2K series, the NBA 2K series.</p>",
  },
  {
    slug: "fighting",
    description:
      "<p>Fighting games are a genre based on combat between several characters in which they fight until defeating each other or until the timer expires. Usually, there are numerous rounds set in an arena. Each personality has its abilities which are relatively free and limited to choose. During combats, the players master fighting techniques and learn how to chain attacks into combos. The first release of the genre was Heavyweight Champ in 1976. From the 1990s, developers spawned dozens of other fighting games, including Street Fighter, Mortal Kombat, and Super Smash Bros. Each protagonist has its health bar and special attacks. Typically, usage of combos, infliction of massive wounds, and, finally, winning gives several points.<br />\nSometimes the player can apply them for particular weapons or avatars. This genre can be mixed with others — for example, there are various indie fighting games like Blade Strangers. Every platform supports it.</p>",
  },
  {
    slug: "card",
    description:
      "<p>Card video games is the wide genre of titles using cards as main gameplay units. There is a common division between games derived originally from tabletop and card games and ones initially created for computer medium. The first type covers a large variety of traditional card games such as poker, monopoly, go and many others. There are no definite mechanics to such games except the &quot;imperfect information&quot; gamble meaning that there is always unknown elements to the game which spice it up. The titles of that sort are often hard to transfer to video games because the cooperative action takes place within one screen so the most popular games are played remotely. Finally, the second type features a similar variety in sub-genres, however, collectible card games prevail in quantity — games like Gwent, Hearthstone with their vast audience and many alike illustrate that turn-based combats with the cards collected can be popular within the medium.</p>",
  },
  {
    slug: "educational",
    description:
      "<p>Educational games are the video games genre centered around useful information throughout a playthrough. It is the secondary characteristic in the game&#39;s description because it denotes the value a player can make out of the gameplay and say little to nothing about the actual game itself. So, platformers, shooters, puzzles, and card games can be didactic. The ability to educate is utterly mean that playing given title may replace the textbook or a lesson experience due to the procedural nature of a video game medium as it can persuade the players to learn information in a more efficient way than just reading or watching. The most popular genres within the sub-genre are strategies as they teach one to think forward strategically; simulators as they mimic the real working experience and point-and-click adventures as they train logic, teach how to solve puzzles and guide the player through the variety of tricky situations.</p>",
  },
];


export const selectedPlatformsMenu = [
  { name: "PC", slug: 'pc', imgSrc: windowsSrc, id: 4 },
  { name: "playstation 4", slug: 'playstation4', imgSrc: playstationSrc, id: 18 },
  { name: "xbox 360", slug: 'xbox360', imgSrc: xboxSrc, id: 14 },
  { name: "nintendo 3ds", slug: 'nintendo-3ds', imgSrc: windowsSrc, id: 8 },
  { name: "playstation 2", slug: 'playstation-2', imgSrc: playstationSrc, id: 15 },
  { name: "android", slug: 'android', imgSrc: androidSrc, id: 21 },
  { name: "IOS", slug: 'ios', imgSrc: appleSrc, id: 3 },
]
