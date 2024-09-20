export const categories = ["Portfolio", "Business"] as const;
export const types = ["Free", "Paid"] as const;

type Category = typeof categories[number];
type Types = typeof types[number]

interface Templates {
  name: string,
  type: Types,
  categories: Category[],
  image: string,
  jpageVersion: string,
  viewLink: string,
  getLink: string
}

export const templates:Templates[] = [
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio", "Business"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Free",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  },
  {
    name: "Teste",
    type: "Paid",
    categories: ["Portfolio"],
    image: "https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png",
    jpageVersion: "v2.0.2",
    viewLink: "#",
    getLink: "#"
  }
]