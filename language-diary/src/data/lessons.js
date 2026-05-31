export const lessons = [
  {
    id: "german-a1-greetings",
    languageId: "german",
    level: "A1",
    title: "Greetings",
    titleNative: "Begrüßung",
    description: "Learn basic German greetings and introductions.",
    vocabulary: [
      {
        source: "Hallo",
        target: "Hello",
        example: "Hallo, ich bin Yasir.",
      },
      {
        source: "Guten Morgen",
        target: "Good morning",
        example: "Guten Morgen, wie geht es Ihnen?",
      },
      {
        source: "Tschüss",
        target: "Bye",
        example: "Tschüss, bis morgen!",
      },
    ],
    dialog: [
      {
        speaker: "A",
        text: "Hallo! Wie heißt du?",
        translation: "Hello! What is your name?",
      },
      {
        speaker: "B",
        text: "Ich heiße Anna. Und du?",
        translation: "My name is Anna. And you?",
      },
      {
        speaker: "A",
        text: "Ich heiße Max.",
        translation: "My name is Max.",
      },
    ],
    quiz: [
      {
        question: "What does 'Hallo' mean?",
        options: ["Bye", "Hello", "Thank you"],
        answer: "Hello",
      },
      {
        question: "What does 'Ich heiße Anna' mean?",
        options: [
          "I am from Anna",
          "My name is Anna",
          "I speak Anna",
        ],
        answer: "My name is Anna",
      },
    ],
  },
];