import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Language Diary</h2>

        <div className="nav-links">
          <a href="#lessons">Lessons</a>
          <a href="#conversation">Conversation</a>
          <a href="#diary">Diary</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <p className="badge">German A1 · Interactive Learning</p>

          <h1>Learn languages with your own learning diary.</h1>

          <p className="hero-text">
            Start with German A1 lessons, vocabulary, dialogs, quizzes, and
            daily notes to track your progress.
          </p>

          <div className="hero-buttons">
            <a href="#lessons" className="primary-button">
              Start Learning
            </a>
            <a href="#diary" className="secondary-button">
              Open Diary
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Today’s Lesson</h3>
          <p className="lesson-title">Begrüßung</p>
          <p>Learn greetings, introductions, and simple German phrases.</p>

          <div className="words">
            <span>Hallo</span>
            <span>Guten Morgen</span>
            <span>Tschüss</span>
          </div>
        </div>
      </section>

      <section id="lessons" className="section">
        <div className="section-header">
          <p className="badge">German A1</p>
          <h2>Lessons</h2>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <h3>1. Begrüßung</h3>
            <p>Greetings and introductions.</p>
            <button>Open Lesson</button>
          </div>

          <div className="lesson-card">
            <h3>2. Zahlen</h3>
            <p>Numbers from 0 to 100.</p>
            <button>Open Lesson</button>
          </div>

          <div className="lesson-card">
            <h3>3. Familie</h3>
            <p>Talk about your family.</p>
            <button>Open Lesson</button>
          </div>
        </div>
      </section>

      <section id="conversation" className="section">
        <div className="section-header">
          <p className="badge">German A1</p>
          <h2>Conversation Practice</h2>
          <p>
            Practice simple A1 conversations based on daily situations, vocabulary,
            travel, shopping, family, school, work, and services.
          </p>
        </div>

        <div className="conversation-grid">
          {[
            {
              category: "Person, Family and Friends",
              topics: [
                "Guten Tag",
                "Hallo",
                "Wie ist Ihr Name?",
                "Meine Familie",
                "Kontakte",
                "Wie sehen Sie aus?",
              ],
            },
            {
              category: "Body and Health",
              topics: [
                "Der Körper",
                "Das Gesicht",
                "Sehen, hören, verstehen und schmecken",
                "Beim Arzt",
                "Mutter und Sohn",
              ],
            },
            {
              category: "Home and Housework",
              topics: [
                "Ein Haus mit Garten",
                "Frau Müller kauft Möbel",
                "Ein Dialog",
                "Ich suche eine Wohnung",
                "Bei Familie Wagner",
              ],
            },
            {
              category: "Nature, Weather and Seasons",
              topics: [
                "Tiere und Pflanzen",
                "Ich sehe viele Bäume",
                "Eine Postkarte aus dem Urlaub",
                "Jahreszeiten in Deutschland",
                "Wetter",
              ],
            },
            {
              category: "Travel, Transport and Free Time",
              topics: [
                "So kann man reisen",
                "In der Touristeninformation",
                "Vor der Reise",
                "Am Bahnhof",
                "Anruf im Hotel",
                "Wo und wie?",
                "Hobbys",
              ],
            },
            {
              category: "Food, Drinks and Shopping",
              topics: [
                "Lebensmittel",
                "Beim Frühstück",
                "Getränke und Essen",
                "Im Restaurant",
                "Haben wir noch Milch?",
                "Was kaufe ich wo?",
                "Kaufen und verkaufen",
                "Wie ist die Hose?",
              ],
            },
            {
              category: "Office, Post, Bank and Police",
              topics: [
                "Post und Telefon",
                "E-Mail, Brief, SMS und Formular",
                "Auf dem Amt",
                "Geld",
                "Polizei und Verkehr",
              ],
            },
            {
              category: "School, Work and Profession",
              topics: [
                "Rund um die Schule",
                "Rechnen, lesen, schreiben",
                "Im Klassenzimmer",
                "Der Deutschkurs",
                "Berufe",
                "Was arbeitest du?",
                "Computer und Internet",
              ],
            },
          ].map((group) => (
            <div className="conversation-card" key={group.category}>
              <h3>{group.category}</h3>

              <ul>
                {group.topics.map((topic) => (
                  <li key={topic}>
                    <span>{topic}</span>
                    <button>Practice</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="diary" className="section diary-section">
        <div>
          <p className="badge">Study Reflection</p>
          <h2>Your Language Diary</h2>
          <p>
            After each lesson, students can write what they learned, save new
            words, and reflect on difficult topics.
          </p>
        </div>

        <div className="diary-box">
          <label>What did you learn today?</label>
          <textarea placeholder="Example: Today I learned how to introduce myself in German..." />

          <label>New words</label>
          <input placeholder="Hallo, Danke, Tschüss..." />

          <button>Save Diary Entry</button>
        </div>
      </section>

      <section id="about" className="section about-section">
        <p className="badge">About</p>
        <h2>Built for real language learners</h2>
        <p>
          Language Diary starts with German A1, but the platform is designed to
          support more languages in the future.
        </p>
      </section>
    </div>
  );
}

export default App;