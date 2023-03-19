import { Movie } from "./movie";

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Incepcja",
    director: "Christopher Nolan",
    poster: "assets/incepcja.jpg",
    description:
      "Lider zespołu specjalistów ds. kradzieży tajemniczych sekretów przedsiębiorstw wykorzystuje technologię snu do wtargnięcia do umysłu swojego celu i wprawienie go w stan, w którym zrobi on, co zechce.",
    rating: 4.5,
    reviews: [
      {
        user: "Krzysztof",
        comment:
          "Ten film zawsze mnie zadziwia swoim wyobraźnią i oryginalnością.",
        rating: 5,
      },
      {
        user: "Marek",
        comment:
          "Film był dość trudny do zrozumienia, ale ogólnie podobał mi się.",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    poster: "assets/forrest.jpg",
    description:
      "Podczas oczekiwania na autobus Forrest Gump, człowiek o niskim ilorazie inteligencji, opowiada nieznajomemu o swoim życiu, które obejmowało między innymi wzięcie udziału w wojnie w Wietnamie i spotkanie prezydenta Stanów Zjednoczonych.",
    rating: 4,
    reviews: [
      {
        user: "Anna",
        comment:
          "Ten film jest jednym z moich ulubionych ze względu na wspaniałą opowieść o życiu Forresta.",
        rating: 5,
      },
      {
        user: "Piotr",
        comment:
          "Film jest dość długi, ale warto go obejrzeć dla świetnej gry aktorskiej Toma Hanksa.",
        rating: 4,
      },
    ],
  },
];
