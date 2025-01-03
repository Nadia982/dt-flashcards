const questions = [
  {
    id: 0,
    q: "Which electronic components are there in a torch?",
    definition: `<pre>(1) Resistor
(2) Light Emitting Diode (LED)
(3) Switch
(4) Battery holder
(5) Printed Circuit Board (PCB)</pre>`,
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 1,
    q: "What is the circuit diagram symbol for an LED?",
    definition: "<img src='./images/LED.png' width='200' style='margin-left: 25%'><p style='display:none>Just some text so this takes a while to read</p>",
    // img: "./images/LED.png",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 2,
    q: "Give 2 reasons why we use circuit diagram symbols",
    definition: `<pre>(1) They are quicker to draw than the actual component. 
    (2) Universally understood – international symbols</pre>`,
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
    definition: "To increase sales of newer products (and therefore make more money).",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 6,
    q: "How can a company limit the life of a product (list 4)?",
    definition: "(1) Use cheaper materials which break easily. (2) Make it difficult to replace components that break. (3) Make replacement components expensive or difficult to get hold of. (4) Stop providing support or updates.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 7,
    q: "What does it mean when we say that something is obsolete?",
    definition: "It is no longer useful or used because something newer or better has replaced it.",
    options: ["yes", "no"],
    a: 0,  
  },
    {
    id: 8,
    q: "What is planned obsolescence?",
    definition: "Planned obsolescence is when a manufacture deliberately designs a product to stop working after a set time, even though it could be designed to work for longer.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 9,
    q: "What is perceived obsolescence?",
    definition: "Perceived obsolescence is when people believe a product is obsolete, but it may be that it is not actually obsolete. This can be due to advertising, fashions or trends.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 10,
    q: "What is an electronic input?",
    definition: "An electronic input device is something that sends an electronic signal into a device.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 11,
    q: "What are examples of electronic inputs?",
    definition: "Switches, buttons and microphones are examples of electronic inputs.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 12,
    q: "What is an electronic output?",
    definition: "Output devices in electronic systems transform electrical energy into another type of energy, such as light, sound or kinetic energy (movement).",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 13,
    q: "What are examples of electronic outputs?",
    definition: "Lights, speakers and motors are examples of electronic outputs.",
    options: ["yes", "no"],
    a: 0,  
  }, 	
  {
    id: 14,
    q: "What is an electric circuit?",
    definition: `<pre>An electronic circuit is made up of electronic components connected together. 
    
For a circuit to work, the load (the component that uses energy) and energy source (battery) must form a 'closed' loop.</pre>`,
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 15,
    q: "What is an electrical conductor?",
    definition: "An electrical conductor is a material that electricity can flow through. ",
    options: ["yes", "no"],
    a: 0,  
  }, 
  {
    id: 16,
    q: "What is an electrical insulator?	",
    definition: "An electrical insulator is a material that electricity cannot flow through.",
    options: ["yes", "no"],
    a: 0,  
  }, 
  {
    id: 17,
    q: "What two things does a battery do in a circuit?",
    definition: "A battery: (1) forces electrons around a circuit; and (2) gives electrons energy, which they can transfer to a load in the circuit.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 18,
    q: "In a circuit, what is a load?",
    definition: "A load is a component in a circuit that uses energy, such as an LED, buzzer or motor.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 19,
    q: "What do resistors do?",
    definition: "Resistors are electronic components that restrict the flow of current around a circuit.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 20,
    q: "How can you tell the value (resistance) of a resistor?",
    definition: "(1) The coloured bands on a resister indicate its resistance. (2) They can be used to calculate the value of the resistor.",
    options: ["yes", "no"],
    a: 0,  
  },
  //  What are the units used to measure resistance? 	Ohms (Ω)

  // {
  //   id: 21,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },

  // How do you fix components to a PCB?		Components are fixed to a PCB using solder.

  // {
  //   id: 22,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },

// What are the safety precautions you should take when soldering (list 4)?	
// (1) Always wear goggles. (2) Use a stand to hold the PCB. (3) Only one person uses the soldering iron. (4) Put the soldering iron in the stand whenever it is not being used. 

  // {
  //   id: 23,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },

// How are polymers produced?	
// -Crude oil is made up of a mixture of lots of different hydrocarbons. 
//  -Fractional distillation is used to separate the out.  
//  -Naphtha is used to produce monomers. 
//  -Monomers are joined together to produce polymers.


  // {
  //   id: 24,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
//  What is the difference between a renewable and non-renewable material? //  -Non-renewable material will eventually run out. 
//  -Renewable materials can be replaced. 	  	
  // {
  //   id: 25,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },

  
// 1. What are examples of renewable and non-renewable material?	
//  -Renewable materials include timber and cotton.
// Non-renewable material include metals and plastics.

// 2. State 4 facts about thermoplastics. 	

// 3. State 4 facts about thermosetting plastics. 	

// 4. What is sustainability?	
// Sustainability means meeting the needs of the present, without compromising the ability of future generations to meet their own needs.

// 5. What are the 6 Rs?
// a. Rethink 
// b. Reuse
// c. Recycle 
// d. Repair 
// e. Reduce 
// f. Refuse	

 	
// //  -Renewable materials include timber and cotton.
// Crosslinks form when plastic is shaped for the first time. 
 
//  i. Can only be formed once. 
//  ii. Can withstand higher temperature
//  iii. Used in electrical and cooking items	
// No crosslinks = can be melted and shaped many times 
 
//  i.  Can be recycled  
//  ii. Has a lower melting than thermosetting plastics. 
//  iii. Most plastic items are made using thermoplastics. 

    // {
  //   id: 26,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
  // {
  //   id: 27,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
  // {
  //   id: 28,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
  // {
  //   id: 29,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
  // {
  //   id: 30,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },
  // // template 
  // {
  //   id: 21,
  //   q: "",
  //   definition: "",
  //   options: ["yes", "no"],
  //   a: 0,  
  // },

 ]

  



 