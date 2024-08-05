export type Link = {
  title: string;
  imgUrl: string;
};

export const links: Link[] = [
  {
    title: "Preventive Care",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjQBm-bw6MGUNYl3x_iDctEJ3wS5_lAsb9w&s",
  },
  {
    title: "Cosmetic Dentistry",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FGc-A0Dru-QTFvuYatq5h37MvELFNf4dqg&s",
  },
  {
    title: "Restorative Treatments",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTezXgJC7rZ1Ja2aTsOxWXZ4BdInODSD71A&s",
  },
  {
    title: "Orthodontics",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Orthobraces_-_dental_braces_lower_upper_jaw.jpg",
  },
  {
    title: "Pediatric Dentistry",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHxqMbpOhzK1eY9No-khexmZ5nC6Sf2O5rQ&s",
  },
];

export const initialState: Link = {
  title: "Dental",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23vwvLb7cHZ5naK9OHtFcRwRqnhYbGdCCMw&s",
};
