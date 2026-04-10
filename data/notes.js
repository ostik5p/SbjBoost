// 📖 Notes by topics
export const notes = {
  math: [
    { id: "math-algebra-basic", title: "Basic Algebra", content: "Algebra works with unknown values marked by letters. Example: 2x + 4 = 10, subtract 4, divide by 2 to get x = 3. Used for speed, distance, finance problems." },
    { id: "math-equations-linear", title: "Linear Equations", content: "Linear equations: ax + b = 0. To find x: x = -b/a. Used to balance costs and revenues." },
    { id: "math-equations-quadratic", title: "Quadratic Equations", content: "ax² + bx + c = 0. Formula: x = (-b ± √(b²-4ac))/2a. Shows where graph crosses x-axis." },
    { id: "math-functions", title: "Functions", content: "f(x) shows input-output relation. f(x) = x² means input 3 gives 9. Used in programming, physics, economics." },
    { id: "math-geometry-basics", title: "Geometry Basics", content: "Square area = a², rectangle = a×b, triangle = (a×h)/2. Perimeter = sum of sides. For calculating areas." },
    { id: "math-geometry-triangles", title: "Triangles", content: "Sum of angles = 180°. Right triangle: a² + b² = c² (Pythagoras). For finding sides and angles." },
    { id: "math-geometry-circles", title: "Circles", content: "Radius r, diameter 2r. Circumference = 2πr, area = πr². For wheels, pipes, round areas." },
    { id: "math-fractions", title: "Fractions", content: "Show parts of whole. Add: common denominator. Divide: multiply by reciprocal. 1/2 + 1/3 = 5/6." },
    { id: "math-percentages", title: "Percentages", content: "Part of 100. 15% of 200 = 200×0.15 = 30. For discounts, scores, statistics." },
    { id: "math-inequalities", title: "Inequalities", content: "Values not equal. Multiply/divide by negative: sign flips. -2x > 6 → x < -3." },
    { id: "math-ratios", title: "Ratios and Proportions", content: "Ratio shows how many times bigger. Proportion a:b = c:d. For scaling recipes, maps." },
    { id: "math-exponents", title: "Exponents", content: "x² = x×x, x³ = x×x×x. Rule: a^m × a^n = a^{m+n}, a^0 = 1. For areas, volumes, growth." }
  ],

  english: [
    { id: "english-present-simple", title: "Present Simple", content: "For habits, schedules, facts. I study every day, she reads books. Third person singular: he works." },
    { id: "english-past-simple", title: "Past Simple", content: "Completed actions in past. I visited yesterday. Irregular: go-went, eat-ate." },
    { id: "english-future-tense", title: "Future Tense", content: "Will + verb. I will learn. For plans, promises, predictions." },
    { id: "english-modal-verbs", title: "Modal Verbs", content: "Can, must, should. Express ability, obligation, advice." },
    { id: "english-articles", title: "Articles", content: "A/an for general nouns, the for specific. A cat, the car I saw." },
    { id: "english-prepositions", title: "Prepositions", content: "Show place, time, direction: in room, on table, at 5pm, to school." },
    { id: "english-vocabulary", title: "Vocabulary", content: "Learn words with lists, cards, example sentences. Repeat and use in conversation." },
    { id: "english-conditionals", title: "Conditionals", content: "If-then. Zero: facts, first: real, second: unreal possibilities." },
    { id: "english-passive-voice", title: "Passive Voice", content: "Focus on action/object: Letter was written by her. For formal texts." },
    { id: "english-comparatives", title: "Comparatives", content: "Compare: tall-taller-tallest. More for long adjectives. For comparing things." },
    { id: "english-irregular-verbs", title: "Irregular Verbs", content: "Past not -ed. Memorize: have-had, see-saw, go-went." },
    { id: "english-phrasal-verbs", title: "Phrasal Verbs", content: "Verb + preposition: look after, get up. Meaning differs from literal." }
  ],

  history: [
    { id: "history-ancient-egypt", title: "Ancient Egypt", content: "Pyramids, pharaohs, hieroglyphs. Believed in afterlife, built tombs, mummified bodies." },
    { id: "history-ancient-greece", title: "Ancient Greece", content: "Democracy, philosophy, Olympics. Socrates, Plato influenced world culture and science." },
    { id: "history-roman-empire", title: "Roman Empire", content: "Roads, army, laws, organization. Built aqueducts, arenas, water systems." },
    { id: "history-middle-ages", title: "Middle Ages", content: "Feudalism, knights, castles, crusades. Church influenced culture, education, politics." },
    { id: "history-renaissance", title: "Renaissance", content: "Revived art and science. Leonardo da Vinci combined beauty and technology." },
    { id: "history-industrial-revolution", title: "Industrial Revolution", content: "Steam engines, factories, railways. Changed labor: people moved to cities, mass production." },
    { id: "history-wwi", title: "World War I", content: "1914-1918 global conflict. Trenches, new weapons, losses changed European politics." },
    { id: "history-wwii", title: "World War II", content: "1939-1945 major battles, Holocaust, atomic bombs. Created UN, new world order." },
    { id: "history-cold-war", title: "Cold War", content: "USA vs USSR standoff. Arms race, space race, espionage. Affected 20th century politics." },
    { id: "history-modern", title: "Modern History", content: "Internet, globalization, human rights, environment. Post-1990s more interconnected but new challenges." },
    { id: "history-revolutions", title: "Revolutions", content: "Change power, economy, society. American, French revolutions influenced rights and freedoms." }
  ],

  science: [
    { id: "science-physics-basics", title: "Physics Basics", content: "Studies motion, force, energy. Newton's first law: body keeps motion unless acted upon. For machines, transport." },
    { id: "science-energy", title: "Energy", content: "Doesn't disappear, changes form: kinetic, potential, thermal, light. Law of conservation. Explains motion, weather." },
    { id: "science-electricity", title: "Electricity", content: "Electron movement in circuit. Voltage pushes, resistance slows; together determine current. Powers devices." },
    { id: "science-chemistry-basics", title: "Chemistry Basics", content: "Atoms, molecules, compounds. Elements react to form new materials. Explains reactions in nature and tech." },
    { id: "science-periodic-table", title: "Periodic Table", content: "Organizes elements by atomic number. Groups have similar properties. Predicts element behavior." },
    { id: "science-reactions", title: "Reactions", content: "Transform substances into new products. Exothermic release heat, endothermic absorb. For cooking, medicine." },
    { id: "science-biology-basics", title: "Biology Basics", content: "Studies life: cells, organisms, interactions. Explains growth, feeding, reproduction. For health, agriculture." },
    { id: "science-human-body", title: "Human Body", content: "Systems: circulatory, respiratory, digestive, nervous. Each vital function. Together support life." },
    { id: "science-genetics", title: "Genetics", content: "Traits pass from parents to children via DNA. Explains eye color, hair. Basis for medicine, breeding." },
    { id: "science-ecology", title: "Ecology", content: "Interactions between living and non-living. Ecosystems balance. Protect nature and resources." },
    { id: "science-space", title: "Space", content: "Planets, stars, galaxies, gravity laws. Earth's place in solar system. Inspires exploration and communication." }
  ],

  it: [
    { id: "it-programming-basics", title: "Programming Basics", content: "Programming creates instructions for computers to solve tasks. You describe steps that computer executes sequentially or conditionally." },
    { id: "it-variables", title: "Variables", content: "Variables store values for later use. In JavaScript: let x = 5; const name = 'Anna'; allows storing numbers and text." },
    { id: "it-functions", title: "Functions", content: "Functions group code into blocks that can be called multiple times. This allows writing less repetitive code and making programs clearer." },
    { id: "it-loops", title: "Loops", content: "Loops repeat actions as many times as needed. for and while help process lists, change data and count steps." },
    { id: "it-conditions", title: "Conditions", content: "If-conditions (if/else) allow programs to react to values. For example, if number > 10, show one message, otherwise another." },
    { id: "it-html", title: "HTML", content: "HTML creates structure of web pages, using tags for headings, paragraphs, lists and images. This is the foundation of any website." },
    { id: "it-css", title: "CSS", content: "CSS adds style to HTML elements: colors, fonts, margins and layouts. This makes site pleasant to read and well organized." },
    { id: "it-javascript", title: "JavaScript", content: "JavaScript makes sites interactive: handling clicks, dynamic content updates and user interaction. Without it, page would be static." },
    { id: "it-algorithms", title: "Algorithms", content: "Algorithms are sequence of steps to solve a task. For example, sorting algorithm orders numbers, search algorithm finds needed element." },
    { id: "it-debugging", title: "Debugging", content: "Debugging helps find and fix errors in code. Use console, logging and careful reading to understand where program works incorrectly." },
    { id: "it-web-security", title: "Web Security", content: "Security in internet protects sites and users from attacks. Apply HTTPS, strong passwords and verify data to avoid fraud and information loss." }
  ],

  geography: [
    { id: "geography-maps-globes", title: "Maps and Globes", content: "Map shows flat, globe shows Earth. Help find countries, oceans. For orientation and navigation." },
    { id: "geography-continents", title: "Continents", content: "7 continents: each unique culture, climate, wildlife. Understand world geography." },
    { id: "geography-climate-zones", title: "Climate Zones", content: "Tropical, temperate, polar. Affect weather, plants. For weather prediction, agriculture." },
    { id: "geography-rivers-mountains", title: "Rivers and Mountains", content: "Form landscape, affect life. Rivers for transport, irrigation, energy; mountains for climate." },
    { id: "geography-countries", title: "Countries", content: "Capitals, flags, languages, economies. Differ in size, population, resources. For politics, culture." },
    { id: "geography-population", title: "Population", content: "Growing, cities expanding. Demography studies who lives where. For resource planning." }
  ],

  chemistry: [
    { id: "chemistry-atoms", title: "Atoms", content: "Smallest element unit. Protons, neutrons, electrons. Basis of all substances." },
    { id: "chemistry-elements", title: "Elements", content: "Pure substances not decomposable. Oxygen, hydrogen. Each unique properties." },
    { id: "chemistry-molecules", title: "Molecules", content: "Atoms bonded. Water: 2H + O. Determine structure, taste, properties." },
    { id: "chemistry-acids-bases", title: "Acids and Bases", content: "Acids pH<7, bases >7. Lemon acid, soap base. Reactions form salts, water." },
    { id: "chemistry-bonds", title: "Chemical Bonds", content: "Covalent, ionic, metallic hold atoms. Covalent share electrons, ionic charged ions." },
    { id: "chemistry-reactions", title: "Chemical Reactions", content: "Change substances to new. Burning releases heat, some absorb. For cooking, industry." }
  ],

  physics: [
    { id: "physics-motion", title: "Motion", content: "Position change over time. Speed: how fast. Acceleration: speed change. For transport, sports." },
    { id: "physics-forces", title: "Forces", content: "Change motion. F=ma (Newton). Gravity, friction, normal. For buildings, machines." },
    { id: "physics-energy-forms", title: "Energy Forms", content: "Kinetic, potential, thermal, light. Transfers, doesn't disappear. Explains engines, nature." },
    { id: "physics-waves", title: "Waves", content: "Transfer energy without matter. Sound in air, light in space. Frequency, amplitude." },
    { id: "physics-electricity", title: "Electricity", content: "Charged particle movement. Voltage pushes, resistance slows. Powers lights, devices." },
    { id: "physics-magnets", title: "Magnets", content: "North/south poles, attract metals. Magnetic field direction. For motors, compasses." }
  ],

  biology: [
    { id: "biology-cells", title: "Cells", content: "Life's smallest unit. All organisms from cells. Plant/animal, nucleus, membrane, organelles." },
    { id: "biology-photosynthesis", title: "Photosynthesis", content: "Plants convert sunlight to energy via chlorophyll. Absorb CO2, release O2. Food chain base." },
    { id: "biology-human-body", title: "Human Body", content: "Systems: circulation, breathing, digestion, nervous. Each vital. Together sustain life." },
    { id: "biology-genetics", title: "Genetics", content: "Traits pass via DNA. Explains parent-child similarities. Medicine, breeding basis." },
    { id: "biology-ecosystems", title: "Ecosystems", content: "Living/non-living interactions. Plants, animals, soil, water balance. Disruption affects all." },
    { id: "biology-evolution", title: "Evolution", content: "Species change over time via natural selection. Useful traits survive. Explains diversity." }
  ],

  literature: [
    { id: "literature-genres", title: "Genres", content: "Literature genres: novel, short story, poetry, drama. Each style, rules. Analyze better." },
    { id: "literature-authors", title: "Authors", content: "Famous authors: Shakespeare, Taras Shevchenko, Lina Kostenko. Unique voice, themes. Expand imagination." },
    { id: "literature-analysis", title: "Analysis", content: "Analyze characters, plot, theme. Motivation, conflict, development. Understand author intent." },
    { id: "literature-poetry", title: "Poetry", content: "Uses rhyme, metaphor, rhythm convey emotions, images. Each word multiple meanings. Develop language sense." },
    { id: "literature-prose", title: "Prose", content: "Ordinary language in novels, essays. Descriptive, narrative, argumentative. Tell stories, ideas clearly." },
    { id: "literature-devices", title: "Literary Devices", content: "Devices: allegory, metaphor, hyperbole, symbol. Make text richer, expressive. Decode deep meanings." }
  ],

  economics: [
    { id: "economics-markets", title: "Markets", content: "Exchange goods, services between sellers, buyers. Supply/demand determine produce, sell price." },
    { id: "economics-supply-demand", title: "Supply and Demand", content: "Determine price. Demand up: price rises; supply up: falls. Key economy mechanism." },
    { id: "economics-money", title: "Money", content: "Exchange, accumulation, value measure. Eases trade over barter. Budget, decisions management." },
    { id: "economics-business", title: "Business", content: "Creates products, jobs. Ideas, plans, resources. Important economy part, affects welfare." },
    { id: "economics-inflation", title: "Inflation", content: "General price rise. Money loses value. Plan savings, income." },
    { id: "economics-personal-finance", title: "Personal Finance", content: "Budget, savings, investments manage money. Planning protects unexpected expenses. Financial goals." }
  ],

  art: [
    { id: "art-history", title: "Art History", content: "Art evolved ancient cave drawings to modern graphics. Each era techniques, themes. Cultural changes, ideas." },
    { id: "art-painting", title: "Painting", content: "Uses paint on canvas, paper create images. Artists work color, light, composition. Express ideas, emotions." },
    { id: "art-design", title: "Design", content: "Combines beauty, functionality products, interiors. Considers usability, aesthetics, user needs. Better use." },
    { id: "art-color-theory", title: "Color Theory", content: "Explains color harmony. Warm/cold, contrast, shades. Important painting, graphics, design." },
    { title: "Creativity", content: "Generate new ideas, solve problems. Combines attention, imagination, experiments. Learning, work, hobbies." },
    { title: "Digital Art", content: "Created computer, graphic programs. Draw, edit photos, animate. Modern direction, tech, creativity." }
  ],

  logic: [
    { id: "logic-reasoning", title: "Reasoning", content: "Logical thinking analyze facts, correct conclusions. Rules verify statements. Science, math, decisions." },
    { id: "logic-arguments", title: "Arguments", content: "Consists statements, grounds. Find logic errors. Weak argument seem correct but lack facts." },
    { id: "logic-patterns", title: "Patterns", content: "Recognize patterns simplify complex problems. Useful math, programming, science." },
    { id: "logic-problem-solving", title: "Problem Solving", content: "Divide problem parts, sequential steps. Understand, plan, apply, check. Confident complex tasks." },
    { id: "logic-critical-thinking", title: "Critical Thinking", content: "Evaluate information without bias. Check facts, compare sources, analyze arguments. Protect errors, manipulation." },
    { title: "Puzzles", content: "Train brain, concentration. Develop attention, non-standard thinking. Simple intellect, focus boost." }
  ],

  "exam-prep": [
    { id: "exam-prep-study-planning", title: "Study Planning", content: "Distribute time avoid last minute. Plan include review, rest. More effective, stress reduction." },
    { id: "exam-prep-practice-tests", title: "Practice Tests", content: "Work tests familiarize format. Shows review topics. More practice, confident exam." },
    { id: "exam-prep-memory-techniques", title: "Memory Techniques", content: "Associations, cards, repetition memorize. Mnemonics sustain facts. Regular review stronger." },
    { id: "exam-prep-stress-management", title: "Stress Management", content: "Control stress more effective. Rest, sleep, breaks maintain concentration. Calm better remember, faster." },
    { id: "exam-prep-notes-review", title: "Notes Review", content: "Return key notes before exam. Active review solidify facts. Notes short but key ideas." },
    { id: "exam-prep-exam-strategy", title: "Exam Strategy", content: "Distribute time, answer easy first. Check answers time left. Good strategy avoid panic, score loss." }
  ]
};