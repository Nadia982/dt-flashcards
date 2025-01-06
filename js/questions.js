const questions = [
  {
    id: 0,
    q: "Which electronic components are there in a torch?",
    definition: `(1) Resistor
(2) Light Emitting Diode (LED)
(3) Switch
(4) Battery
(5) Printed Circuit Board (PCB)`,
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 1,
    q: "What is the circuit diagram symbol for an LED?",
    definition:
      "<img src='./images/LED.png' width='200' style='margin-left: 25%'><p style='display:none>Just some text so this takes a while to read</p>",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 2,
    q: "Give 2 reasons why we use circuit diagram symbols",
    definition: `(1) They are quicker to draw than the actual component. (2) They are universally understood international symbols`,
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 3,
    q: "What is a system?",
    definition: "A group of things working together to achieve an outcome.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 4,
    q: "What are the 3 stages a system can be broken into in a block diagram?",
    definition: `(1) input
    (2) process
    (3) outcome.`,
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 5,
    q: "Why do manufacturers sometimes want to limit a product's lifespan?",
    definition:
      "To increase sales of newer products (and therefore make more money).",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 6,
    q: "How can a company limit the life of a product (list 4)?",
    definition:
      "(1) Use cheaper materials which break easily. (2) Make it difficult to replace components that break. (3) Make replacement components expensive or difficult to get hold of. (4) Stop providing support or updates.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 7,
    q: "What does it mean when we say that something is obsolete?",
    definition:
      "It is no longer useful or used because something newer or better has replaced it.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 8,
    q: "What is planned obsolescence?",
    definition:
      "Planned obsolescence is when a manufacture deliberately designs a product to stop working after a set time, even though it could be designed to work for longer.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 9,
    q: "What is perceived obsolescence?",
    definition:
      "Perceived obsolescence is when people believe a product is obsolete, but it may be that it is not actually obsolete. This can be due to advertising, fashions or trends.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 10,
    q: "What is an electronic input?",
    definition:
      "An electronic input device is something that sends an electronic signal into a device.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 11,
    q: "What are examples of electronic inputs?",
    definition:
      "Switches, buttons and microphones are examples of electronic inputs.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 12,
    q: "What is an electronic output?",
    definition:
      "Output devices in electronic systems transform electrical energy into another type of energy, such as light, sound or kinetic energy (movement).",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 13,
    q: "What are examples of electronic outputs?",
    definition:
      "Lights, speakers and motors are examples of electronic outputs.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 14,
    q: "What is an electrical circuit?",
    definition: `An electronic circuit is made up of electronic components connected together. For a circuit to work, the load (the component that uses energy) and energy source (battery) must form a 'closed' loop.`,
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 15,
    q: "What is an electrical conductor?",
    definition:
      "An electrical conductor is a material that electricity can flow through. ",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 16,
    q: "What is an electrical insulator?	",
    definition:
      "An electrical insulator is a material that electricity cannot flow through.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 17,
    q: "What two things does a battery do in a circuit?",
    definition:
      "A battery: (1) forces electrons around a circuit; and (2) gives electrons energy, which they can transfer to a load in the circuit.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 18,
    q: "In a circuit, what is a load?",
    definition:
      "A load is a component in a circuit that uses energy, such as an LED, buzzer or motor.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 19,
    q: "What do resistors do?",
    definition:
      "Resistors are electronic components that restrict the flow of current around a circuit.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 20,
    q: "How can you tell the value (resistance) of a resistor?",
    definition:
      "(1) The coloured bands on a resister indicate its resistance. (2) They can be used to calculate the value of the resistor.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 21,
    q: "Which units used to measure resistance?",
    definition: "Ohms (Ω)",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 22,
    q: "How do you fix components to a PCB (printed circuit board)?",
    definition: "Components are fixed to a PCB using solder.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 23,
    q: "List 4 safety precautions you should take when soldering.",
    definition:
      "(1) Always wear goggles. (2) Use a stand to hold the PCB. (3) Only one person uses the soldering iron. (4) Put the soldering iron in the stand whenever it is not being used.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 24,
    q: "How are polymers produced?",
    definition:
      "(1) Crude oil is made up of a mixture of lots of different hydrocarbons. (2) Fractional distillation is used to separate the out. (3) Naphtha is used to produce monomers. (4) Monomers are joined together to produce polymers.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 25,
    q: "What is the difference between a renewable and non-renewable material?",
    definition:
      "Non-renewable material will eventually run out. Renewable materials can be replaced.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 26,
    q: "Give two examples of renewable materials and two examples of non-renewable materials",
    definition:
      "Renewable materials include timber and cotton. Non-renewable material include metals and plastics.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 27,
    q: "State 4 facts about thermoplastics",
    definition:
      "(1) Thermoplastics have no crosslinks = can be melted and shaped many times. (2) Thermoplastics can be recycled. (3) Thermoplastics have a lower melting than thermosetting plastics. (4) Most plastic items are made using thermoplastics.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 28,
    q: "State 4 facts about thermosetting plastics.",
    definition:
      "(1) Crosslinks form when thermosetting plastics are shaped for the first time. (2) Thermosetting plastics can only be formed once. (3) Thermosetting plastics can withstand higher temperature. (4) Thermosetting plastics are used in electrical and cooking items",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 29,
    q: "What is sustainability?",
    definition:
      "Sustainability means meeting the needs of the present, without compromising the ability of future generations to meet their own needs.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 30,
    q: "What are the 6 Rs?",
    definition:
      "(1) Re-think, (2) re-use, (3) recycle, (4) repair, (5) reduce, (6) refuse",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 31,
    q: "What is the circuit diagram symbol for a resistor?",
    definition:
      "<img src='./images/resistor.png' width='200' style='margin-left: 25%'><p style='display:none>Just some text so this takes a while to read</p>",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 32,
    q: "What is the circuit diagram symbol for a switch?",
    definition:
      "<img src='./images/switch.png' width='200' style='margin-left: 25%'><p style='display:none>Just some text so this takes a while to read</p>",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 33,
    q: "What is the circuit diagram symbol for a battery?",
    definition:
      "<img src='./images/battery.png' width='200' style='margin-left: 25%'><p style='display:none>Just some text so this takes a while to read</p>",
    options: ["yes", "no"],
    a: 0,
  },

  {
    id: 34,
    q: "What is the role of a designer?",
    definition:
      "The role of a designer is to solve a problem or create a new idea to deal with a situation. It is also to carry out research and develop possible solutions.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 35,
    q: "What happens to energy in a closed circuit?",
    definition: "There is a continuous flow of electrical charge.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 36,
    q: "Why are printed circuit boards (PCBs) used?",
    definition:
      "To hold electrical components in place and provide electrical connections between the components.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 37,
    q: "What do resistors do?",
    definition:
      "Resistors reduce or control the flow of electrical current in a circuit, creating specific voltage levels. They are used in devices such as dimmer switches.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 38,
    q: "What is a flow diagram?",
    definition:
      "A diagram that shows the step-by-step flow of instructions, a workflow or a process.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 39,
    q: "What is the flow diagram symbol for the start/end?",
    definition: "An oval",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 40,
    q: "What is the flow diagram symbol for a process?",
    definition: "A rectangle",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 41,
    q: "What is the flow diagram symbol for a decision?",
    definition: "A diamond",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 42,
    q: "True or false:  heat is usually used to produce plastic products.",
    definition: "true",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 43,
    q: "What are the two groups of plastics?",
    definition: "Thermoplastics and thermosetting plastics.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 44,
    q: "Which plastics are easier to recycle - thermo setting plastics or thermoplastics?",
    definition: "Thermoplastics",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 45,
    q: "What is an adhesive?",
    definition: "An adhesive is a sticky substance, like glue, used to join materials together by forming a strong surface bond.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 46,
    q: "What is the difference between adhesive and solvent bonding?",
    definition: "Adhesive bonding uses glue to join materials, while solvent bonding dissolves surfaces to create a strong chemical bond.",
    options: ["yes", "no"],
    a: 0,
  },
];

// Template
// {
//   id: 42,
//   q: "?",
//   definition: "",
//   options: ["yes", "no"],
//   a: 0,
// },

//  
// Which group of plastics have crosslinks - thermoplastics or thermosetting plastics? Thermosetting plastics
// Which group of plastics have no crosslinks - thermoplastics or thermosetting plastics? thermoplastics
// Which group of plastics can be melted and shaped many times - thermoplastics or thermosetting plastics? thermoplastics
// Which group of plastics can be recycled - thermoplastics or thermosetting plastics? thermoplastics
// Which has a lower melting point - thermoplastics or thermosetting plastics? thermoplastics
// Which has a higher melting point - thermoplastics or thermosetting plastics? Thermosetting plastics
// What are most plastic items made of - thermoplastics or thermosetting plastics? thermoplastics
// Which type of plastics can only be formed once - thermoplastics or thermosetting plastics? Thermo setting plastics.
// Which can withstand higher temperatures - thermoplastics or thermosetting plastics? Thermosetting plastics
// Which are used in electrical and cooking items - thermoplastics or thermosetting plastics? Thermosetting plastics
// // template
// {
//   id: 21,
//   q: "",
//   definition: "",
//   options: ["yes", "no"],
//   a: 0,
// },
