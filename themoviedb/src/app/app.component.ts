import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items = [];
  private response;
  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.response = {
      "page": 1,
      "total_results": 10000,
      "total_pages": 500,
      "results": [
          {
              "popularity": 534.771,
              "vote_count": 4809,
              "video": false,
              "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
              "id": 475557,
              "adult": false,
              "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
              "original_language": "en",
              "original_title": "Joker",
              "genre_ids": [
                  80,
                  18,
                  53
              ],
              "title": "Joker",
              "vote_average": 8.5,
              "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
              "release_date": "2019-10-04"
          },
          {
              "popularity": 374.6,
              "vote_count": 296,
              "video": false,
              "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
              "id": 290859,
              "adult": false,
              "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
              "original_language": "en",
              "original_title": "Terminator: Dark Fate",
              "genre_ids": [
                  28,
                  878
              ],
              "title": "Terminator: Dark Fate",
              "vote_average": 6.6,
              "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
              "release_date": "2019-11-01"
          },
          {
              "popularity": 214.876,
              "vote_count": 671,
              "video": false,
              "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
              "id": 420809,
              "adult": false,
              "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
              "original_language": "en",
              "original_title": "Maleficent: Mistress of Evil",
              "genre_ids": [
                  12,
                  14,
                  10751
              ],
              "title": "Maleficent: Mistress of Evil",
              "vote_average": 7.2,
              "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
              "release_date": "2019-10-18"
          },
          {
              "popularity": 121.893,
              "vote_count": 8304,
              "video": false,
              "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
              "id": 920,
              "adult": false,
              "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
              "original_language": "en",
              "original_title": "Cars",
              "genre_ids": [
                  12,
                  16,
                  35,
                  10751
              ],
              "title": "Cars",
              "vote_average": 6.7,
              "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
              "release_date": "2006-06-09"
          },
          {
              "popularity": 108.112,
              "vote_count": 1288,
              "video": false,
              "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
              "id": 559969,
              "adult": false,
              "backdrop_path": "/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg",
              "original_language": "en",
              "original_title": "El Camino: A Breaking Bad Movie",
              "genre_ids": [
                  80,
                  18,
                  53
              ],
              "title": "El Camino: A Breaking Bad Movie",
              "vote_average": 7.1,
              "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
              "release_date": "2019-10-11"
          },
          {
              "popularity": 107.197,
              "vote_count": 150,
              "video": false,
              "poster_path": "/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg",
              "id": 480105,
              "adult": false,
              "backdrop_path": "/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
              "original_language": "en",
              "original_title": "47 Meters Down: Uncaged",
              "genre_ids": [
                  12,
                  18,
                  27,
                  53
              ],
              "title": "47 Meters Down: Uncaged",
              "vote_average": 5.1,
              "overview": "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
              "release_date": "2019-08-16"
          },
          {
              "popularity": 106.325,
              "vote_count": 261,
              "video": false,
              "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
              "id": 338967,
              "adult": false,
              "backdrop_path": "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
              "original_language": "en",
              "original_title": "Zombieland: Double Tap",
              "genre_ids": [
                  28,
                  35,
                  27
              ],
              "title": "Zombieland: Double Tap",
              "vote_average": 7.4,
              "overview": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
              "release_date": "2019-10-18"
          },
          {
              "popularity": 122.885,
              "vote_count": 314,
              "video": false,
              "poster_path": "/tximyCXMEnWIIyOy9STkOduUprG.jpg",
              "id": 521777,
              "adult": false,
              "backdrop_path": "/zIZv4pPJRg3YTnWWuotwXnYu1fM.jpg",
              "original_language": "en",
              "original_title": "Good Boys",
              "genre_ids": [
                  35
              ],
              "title": "Good Boys",
              "vote_average": 6.6,
              "overview": "A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.",
              "release_date": "2019-08-16"
          },
          {
              "popularity": 139.524,
              "vote_count": 3366,
              "video": false,
              "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
              "id": 420818,
              "adult": false,
              "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
              "original_language": "en",
              "original_title": "The Lion King",
              "genre_ids": [
                  12,
                  16,
                  18
              ],
              "title": "The Lion King",
              "vote_average": 7.1,
              "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
              "release_date": "2019-07-19"
          },
          {
              "popularity": 92.996,
              "vote_count": 0,
              "video": false,
              "poster_path": "/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg",
              "id": 449924,
              "adult": false,
              "backdrop_path": "/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",
              "original_language": "cn",
              "original_title": "葉問4",
              "genre_ids": [
                  28,
                  18,
                  36
              ],
              "title": "Ip Man 4: The Finale",
              "vote_average": 0,
              "overview": "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
              "release_date": "2019-12-20"
          },
          {
              "popularity": 115.898,
              "vote_count": 1743,
              "video": false,
              "poster_path": "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
              "id": 384018,
              "adult": false,
              "backdrop_path": "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
              "original_language": "en",
              "original_title": "Fast & Furious Presents: Hobbs & Shaw",
              "genre_ids": [
                  28,
                  12,
                  35
              ],
              "title": "Fast & Furious Presents: Hobbs & Shaw",
              "vote_average": 6.5,
              "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
              "release_date": "2019-08-02"
          },
          {
              "popularity": 159.667,
              "vote_count": 64,
              "video": false,
              "poster_path": "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
              "id": 568012,
              "adult": false,
              "backdrop_path": "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
              "original_language": "ja",
              "original_title": "ワンピーススタンピード",
              "genre_ids": [
                  28,
                  12,
                  16
              ],
              "title": "One Piece: Stampede",
              "vote_average": 7.6,
              "overview": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
              "release_date": "2019-10-24"
          },
          {
              "popularity": 94.595,
              "vote_count": 127,
              "video": false,
              "poster_path": "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
              "id": 501170,
              "adult": false,
              "backdrop_path": "/4D4Ic9N4tnwaW4x241LGb1XOi7O.jpg",
              "original_language": "en",
              "original_title": "Doctor Sleep",
              "genre_ids": [
                  27
              ],
              "title": "Doctor Sleep",
              "vote_average": 7,
              "overview": "A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to \"shine.\" He tries to protect her from the True Knot, a cult whose goal is to feed off people like them in order to remain immortal.",
              "release_date": "2019-11-08"
          },
          {
              "popularity": 106.455,
              "vote_count": 4829,
              "video": false,
              "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
              "id": 429617,
              "adult": false,
              "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
              "original_language": "en",
              "original_title": "Spider-Man: Far from Home",
              "genre_ids": [
                  28,
                  12,
                  878
              ],
              "title": "Spider-Man: Far from Home",
              "vote_average": 7.6,
              "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
              "release_date": "2019-07-02"
          },
          {
              "popularity": 79.143,
              "vote_count": 469,
              "video": false,
              "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
              "id": 453405,
              "adult": false,
              "backdrop_path": "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
              "original_language": "en",
              "original_title": "Gemini Man",
              "genre_ids": [
                  28,
                  53
              ],
              "title": "Gemini Man",
              "vote_average": 5.8,
              "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
              "release_date": "2019-10-11"
          },
          {
              "popularity": 77.834,
              "vote_count": 0,
              "video": false,
              "poster_path": "/ljAMsxYS3i8GlEoXAKZxaK88EAO.jpg",
              "id": 566057,
              "adult": false,
              "backdrop_path": "/uIAnWjl1PNsFL9M24KzVMmO6sdo.jpg",
              "original_language": "ja",
              "original_title": "ルパンレンジャーＶＳパトレンジャーＶＳキュウレンジャー",
              "genre_ids": [
                  28,
                  12,
                  80,
                  878
              ],
              "title": "Lupinranger VS Patranger VS Kyuranger",
              "vote_average": 0,
              "overview": "\"Lupinranger VS Patranger VS Kyuranger\" is an upcoming V-Cinext film between Kaitou Sentai Lupinranger VS Keisatsu Sentai Patranger and Uchu Sentai Kyuranger. The story begins when the Lupinrangers, Kairi, Touma, and Umika, are kidnapped by someone mysterious. The Patrangers are then tasked with an Abduction Case to find the missing thieves, where they run into the Kyuranger team as they pass through space. Just who exactly kidnapped them? And why did the 12 Kyurangers return to space?",
              "release_date": "2019-05-03"
          },
          {
              "popularity": 108.473,
              "vote_count": 2349,
              "video": false,
              "poster_path": "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
              "id": 320288,
              "adult": false,
              "backdrop_path": "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
              "original_language": "en",
              "original_title": "Dark Phoenix",
              "genre_ids": [
                  28,
                  12,
                  878
              ],
              "title": "Dark Phoenix",
              "vote_average": 6.1,
              "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
              "release_date": "2019-06-07"
          },
          {
              "popularity": 72.731,
              "vote_count": 1856,
              "video": false,
              "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
              "id": 474350,
              "adult": false,
              "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
              "original_language": "en",
              "original_title": "It Chapter Two",
              "genre_ids": [
                  27
              ],
              "title": "It Chapter Two",
              "vote_average": 6.9,
              "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
              "release_date": "2019-09-06"
          },
          {
              "popularity": 98.54,
              "vote_count": 3964,
              "video": false,
              "poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
              "id": 420817,
              "adult": false,
              "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
              "original_language": "en",
              "original_title": "Aladdin",
              "genre_ids": [
                  12,
                  35,
                  14,
                  10749,
                  10751
              ],
              "title": "Aladdin",
              "vote_average": 7.1,
              "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
              "release_date": "2019-05-24"
          },
          {
              "popularity": 80.121,
              "vote_count": 530,
              "video": false,
              "poster_path": "/q5298SICFzqMcKtQoBktk8p6FH.jpg",
              "id": 417384,
              "adult": false,
              "backdrop_path": "/qBI3Spq93lNxGzecdGpbwV5lOvU.jpg",
              "original_language": "en",
              "original_title": "Scary Stories to Tell in the Dark",
              "genre_ids": [
                  27,
                  53
              ],
              "title": "Scary Stories to Tell in the Dark",
              "vote_average": 6.3,
              "overview": "Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.",
              "release_date": "2019-08-09"
          }
      ]
    };
    this.items = this.response.results;
  }
}
