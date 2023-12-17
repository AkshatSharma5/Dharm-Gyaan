var quizData = [
  {
    qn_id: 1,
    qn_desc: "In the Mahabharata, who was the teacher of Arjuna?",
    opn_obj: { A: "Dronacharya", B: "Bhishma", C: "Karna", D: "Krishna" },
    ans: "A",
    add_info: "Dronacharya was a skilled warrior and the royal teacher of the Kauravas and Pandavas."
  },
  {
    qn_id: 2,
    qn_desc: "Who is the author of the Ramayana?",
    opn_obj: { A: "Valmiki", B: "Vedavyasa", C: "Tulsidas", D: "Kalidasa" },
    ans: "A",
    add_info: "Valmiki is revered as the poet-sage who composed the Ramayana, an ancient Indian epic."
  },
  {
    qn_id: 3,
    qn_desc: "In the Bhagavad Gita, which war is being fought?",
    opn_obj: { A: "Kurukshetra War", B: "Trojan War", C: "World War II", D: "Opium War" },
    ans: "A",
    add_info: "The Bhagavad Gita takes place on the battlefield of Kurukshetra during the great Kurukshetra War."
  },
  {
    qn_id: 4,
    qn_desc: "Who was the mother of Pandavas in Mahabharata?",
    opn_obj: { A: "Kunti", B: "Draupadi", C: "Gandhari", D: "Satyavati" },
    ans: "A",
    add_info: "Kunti was the biological mother of three Pandavas: Yudhishthira, Bhima, and Arjuna."
  },
  {
    qn_id: 5,
    qn_desc: "Which demon king kidnapped Sita in the Ramayana?",
    opn_obj: { A: "Ravana", B: "Hiranyakashipu", C: "Kumbhakarna", D: "Indrajit" },
    ans: "A",
    add_info: "Ravana, the powerful demon king of Lanka, kidnapped Sita, leading to the epic battle with Lord Rama."
  },
  {
    qn_id: 6,
    qn_desc: "Who is the charioteer of Arjuna in the Mahabharata?",
    opn_obj: { A: "Karna", B: "Bhishma", C: "Vidura", D: "Krishna" },
    ans: "D",
    add_info: "Lord Krishna served as the charioteer and guide to Arjuna during the Kurukshetra War."
  },
  {
    qn_id: 7,
    qn_desc: "Which prince wins the Swayamvar of Draupadi in Mahabharata?",
    opn_obj: { A: "Duryodhana", B: "Yudhishthira", C: "Arjuna", D: "Karna" },
    ans: "C",
    add_info: "Arjuna, the skilled archer and warrior, won the Swayamvar and married Draupadi."
  },
  {
    qn_id: 8,
    qn_desc: "Who wrote the Mahabharata?",
    opn_obj: { A: "Valmiki", B: "Vedavyasa", C: "Tulsidas", D: "Kalidasa" },
    ans: "B",
    add_info: "Vedavyasa, also known as Vyasa, is credited with composing the Mahabharata, one of the longest epics in the world."
  },
  {
    qn_id: 9,
    qn_desc: "In the Ramayana, who is the father of Ravana?",
    opn_obj: { A: "Dasaratha", B: "Vishrava", C: "Janaka", D: "Sage Valmiki" },
    ans: "B",
    add_info: "Vishrava is the father of Ravana and a sage with profound knowledge."
  },
  {
    qn_id: 10,
    qn_desc: "In the Bhagavad Gita, who is addressed as 'Kesava' by Arjuna?",
    opn_obj: { A: "Krishna", B: "Vishnu", C: "Shiva", D: "Brahma" },
    ans: "A",
    add_info: "Arjuna addresses Lord Krishna as 'Kesava' during the discourse of the Bhagavad Gita."
  },
  {
    qn_id: 11,
    qn_desc: "What is the name of the bow that Lord Rama used in the Ramayana?",
    opn_obj: { A: "Gandiva", B: "Vijaya", C: "Sharanga", D: "Pinaka" },
    ans: "C",
    add_info: "Lord Rama used the powerful bow named 'Sharanga' during various events in the Ramayana."
  },
  {
    qn_id: 12,
    qn_desc: "Who was the guru of Lord Rama in the Ramayana?",
    opn_obj: { A: "Vasishta", B: "Vishwamitra", C: "Parashurama", D: "Shukracharya" },
    ans: "A",
    add_info: "Vasishta, the sage and priest, served as the guru and guide to Lord Rama."
  },
  {
    qn_id: 13,
    qn_desc: "In the Mahabharata, who was the mother of Karna?",
    opn_obj: { A: "Gandhari", B: "Satyavati", C: "Radha", D: "Kunti" },
    ans: "C",
    add_info: "Radha, known for her devotion, was the foster mother of Karna in the Mahabharata."
  },
  {
    qn_id: 14,
    qn_desc: "Which celestial weapon did Arjuna receive from Lord Shiva?",
    opn_obj: { A: "Brahmastra", B: "Pashupatastra", C: "Vaishnavastra", D: "Agneyastra" },
    ans: "B",
    add_info: "Arjuna received the powerful Pashupatastra from Lord Shiva during his penance."
  },
  {
    qn_id: 15,
    qn_desc: "Who is the narrator of the Bhagavad Gita?",
    opn_obj: { A: "Dhritarashtra", B: "Vyasa", C: "Sanjaya", D: "Arjuna" },
    ans: "C",
    add_info: "Sanjaya narrates the events of the Bhagavad Gita to King Dhritarashtra."
  },
  {
    qn_id: 16,
    qn_desc: "What was the name of the monkey general in the Ramayana?",
    opn_obj: { A: "Hanuman", B: "Jambavan", C: "Sugriva", D: "Vali" },
    ans: "C",
    add_info: "Sugriva, the monkey king, served as a general and ally to Lord Rama in the Ramayana."
  },
  {
    qn_id: 17,
    qn_desc: "Who is the wife of Yudhishthira in the Mahabharata?",
    opn_obj: { A: "Draupadi", B: "Subhadra", C: "Satyavati", D: "Gandhari" },
    ans: "B",
    add_info: "Subhadra, the sister of Lord Krishna, is the wife of Yudhishthira in the Mahabharata."
  },
  {
    qn_id: 18,
    qn_desc: "What is the name of Arjuna's chariot in the Bhagavad Gita?",
    opn_obj: { A: "Gandiva", B: "Nandaka", C: "Devadatta", D: "Kapidhvaja" },
    ans: "D",
    add_info: "Arjuna's chariot in the Bhagavad Gita is named 'Kapidhvaja,' meaning 'Bannered with a Monkey.'"
  },
  {
    qn_id: 19,
    qn_desc: "In the Ramayana, who is known as the 'Laxman Rekha' incident?",
    opn_obj: { A: "Sita", B: "Mandodari", C: "Shurpanakha", D: "Surgriva" },
    ans: "C",
    add_info: "Shurpanakha is involved in the 'Laxman Rekha' incident in the Ramayana, cautioning Laxman's boundary."
  },
  {
    qn_id: 20,
    qn_desc: "Who was the father of Bhishma in the Mahabharata?",
    opn_obj: { A: "Shantanu", B: "Dhritarashtra", C: "Vichitravirya", D: "Parashara" },
    ans: "D",
    add_info: "Parashara, a great sage, is the father of Bhishma, the venerable warrior in the Mahabharata."
  }
];
