// dictionary.js
// Harmonisch gruppiert, lernfreundlich, mit kanonischen Deck-Namen.
// Format intern: add(deck, patient, correct) -> wird am Ende zu window.RAW_ITEMS + window.ITEMS geflattet.

(function () {
  const items = [];

  function add(deck, patient, correct) {
    if (!deck || !patient || !correct) return;
    const correctStr = Array.isArray(correct) ? correct.join(";") : String(correct);
    items.push(`${deck}|${patient}|${correctStr}`);
  }


  // =======================
  // SCHMERZEN – FSP / Arztbrief-relevant
  // =======================

  add("A - SCHMERZEN", "brustschmerzen", "Thoraxschmerzen");
  add("A - SCHMERZEN", "bauchschmerzen", "Abdominalschmerzen");
  add("A - SCHMERZEN", "oberbauchschmerzen", "Oberbauchschmerzen");
  add("A - SCHMERZEN", "unterbauchschmerzen", "Unterbauchschmerzen");
  add("A - SCHMERZEN", "flankenschmerzen", "Flankenschmerzen");
  add("A - SCHMERZEN", "kopfschmerzen", "Cephalgie");
  add("A - SCHMERZEN", "nackenschmerzen", "Zervikalgie");
  add("A - SCHMERZEN", "rückenschmerzen", "Dorsalgie");
  add("A - SCHMERZEN", "kreuzschmerzen", "Lumbalgie");
  add("A - SCHMERZEN", "gelenkschmerzen", "Arthralgie");
  add("A - SCHMERZEN", "muskelschmerzen", "Myalgie");
  add("A - SCHMERZEN", "knieschmerzen", "Gonalgie");
  add("A - SCHMERZEN", "schulterschmerzen", "Schulterschmerzen");
  add("A - SCHMERZEN", "hüftschmerzen", "Hüftschmerzen");
  add("A - SCHMERZEN", "halsschmerzen", "Pharyngodynie");
  add("A - SCHMERZEN", "ohrenschmerzen", "Otalgie");




  // -------------------------------
  // 1) KURZ (Kurzformen, "NEU:")
  // -------------------------------

  // Atemwege / Infekt
  add("Atemwege / Infekt - KURZ", "Husten", "Tussis");
  add("Atemwege / Infekt - KURZ", "Atemnot", "Dyspnoe");
  add("Atemwege / Infekt - KURZ", "Schnupfen", "Rhinorrhoe");
  add("Atemwege / Infekt - KURZ", "Heiserkeit", "Dysphonie");
  add("Atemwege / Infekt - KURZ", "Fieber", "Pyrexie");
  add("Atemwege / Infekt - KURZ", "Auswurf", "Sputum");
  add("Atemwege / Infekt - KURZ", "blutiger Husten", "Hämoptyse");
  add("Atemwege / Infekt - KURZ", "pfeifende Atmung", "Giemen");
  add("Atemwege / Infekt - KURZ", "Atemstillstand", "Apnoe");

  // Neurologisch / Psychisch
  add("Neurologisch / Psychisch - KURZ", "Schwindel", "Vertigo");
  add("Neurologisch / Psychisch - KURZ", "Zittern", "Tremor");
  add("Neurologisch / Psychisch - KURZ", "Ohnmacht", "Synkope");
  add("Neurologisch / Psychisch - KURZ", "Beinahe-Ohnmacht", "Präsynkope");
  add("Neurologisch / Psychisch - KURZ", "Kribbeln", "Parästhesie");
  add("Neurologisch / Psychisch - KURZ", "Taubheitsgefühl", "Hypästhesie");
  add("Neurologisch / Psychisch - KURZ", "Lähmung", "Parese");
  add("Neurologisch / Psychisch - KURZ", "Krampfanfall", "zerebraler Anfall");
  add("Neurologisch / Psychisch - KURZ", "Gedächtnisstörung", "Amnesie");
  add("Neurologisch / Psychisch - KURZ", "Sprachstörung", "Aphasie");
  add("Neurologisch / Psychisch - KURZ", "Gangunsicherheit", "Ataxie");
  add("Neurologisch / Psychisch - KURZ", "Sehstörung", "Visusstörung");

  // Gastrointestinal
  add("Gastrointestinal - KURZ", "Übelkeit", "Nausea");
  add("Gastrointestinal - KURZ", "Erbrechen", "Emesis");
  add("Gastrointestinal - KURZ", "Bluterbrechen", "Hämatemesis");
  add("Gastrointestinal - KURZ", "Durchfall", "Diarrhoe");
  add("Gastrointestinal - KURZ", "Verstopfung", "Obstipation");
  add("Gastrointestinal - KURZ", "Schluckstörung", "Dysphagie");
  add("Gastrointestinal - KURZ", "Sodbrennen", "Pyrosis");
  add("Gastrointestinal - KURZ", "Blut im Stuhl", "Hämatochezie");
  add("Gastrointestinal - KURZ", "schwarzer Stuhl", "Meläna");
  add("Gastrointestinal - KURZ", "aufgeblähter Bauch", "Meteorismus");
  add("Gastrointestinal - KURZ", "Aufstoßen", "Ruktus");

  // Thorax / Kardiopulmonal
  add("Thorax / Kardiopulmonal - KURZ", "Herzklopfen", "Palpitationen");
  add("Thorax / Kardiopulmonal - KURZ", "Brustenge", "Angina-pectoris-Beschwerden");
  add("Thorax / Kardiopulmonal - KURZ", "Herzrasen", "Tachykardie");
  add("Thorax / Kardiopulmonal - KURZ", "langsamer Puls", "Bradykardie");
  add("Thorax / Kardiopulmonal - KURZ", "unregelmäßiger Herzschlag", "Arrhythmie");
  add("Thorax / Kardiopulmonal - KURZ", "Wassereinlagerung in den Beinen", "periphere Ödeme");

  // Bewegungsapparat / Gefäße
  add("Bewegungsapparat / Gefäße - KURZ", "steife Gelenke", "Gelenksteife");

  // Allgemein / Vegetativ
  add("Allgemein / Vegetativ - KURZ", "Müdigkeit", "Fatigue");
  add("Allgemein / Vegetativ - KURZ", "Appetitlosigkeit", "Inappetenz");
  add("Allgemein / Vegetativ - KURZ", "Gewichtsabnahme", "Gewichtsverlust");
  add("Allgemein / Vegetativ - KURZ", "Nachtschweiß", "nächtliche Hyperhidrose");
  add("Allgemein / Vegetativ - KURZ", "Schlaflosigkeit", "Insomnie");
  add("Allgemein / Vegetativ - KURZ", "Benommenheit", "Somnolenz");
  add("Allgemein / Vegetativ - KURZ", "Bewusstseinsstörung", "Vigilanzstörung");

  // Urogenital
  add("Urogenital - KURZ", "Schmerzen beim Wasserlassen", "Dysurie");
  add("Urogenital - KURZ", "häufiges Wasserlassen", "Pollakisurie");
  add("Urogenital - KURZ", "nächtliches Wasserlassen", "Nykturie");
  add("Urogenital - KURZ", "Blut im Urin", "Hämaturie");

  // Haut
  add("Haut", "Hautausschlag", "Exanthem");
  add("Haut", "Juckreiz", "Pruritus");
  add("Haut", "blaue Flecken", "Hämatome");

  // -----------------------------------------
  // 2) PATIENTENSPRACHE (prüfungsnah, Sätze)
  // -----------------------------------------

  // Neurologisch / Psychisch
  add("Neurologisch / Psychisch - LANG", "Mein Kopf tut weh", "Cephalgie");
  add("Neurologisch / Psychisch - LANG", "Ich habe starke Kopfschmerzen", "Cephalgie");
  add("Neurologisch / Psychisch - LANG", "Pochend", "pulsierend");
  add("Neurologisch / Psychisch - LANG", "Auf der rechten Seite", "rechtsseitig");
  add("Neurologisch / Psychisch - LANG", "Kommt immer wieder", "rezidivierend");
  add("Neurologisch / Psychisch - LANG", "Licht tut mir weh", "Photophobie");
  add("Neurologisch / Psychisch - LANG", "Ich halte kein helles Licht aus", "Photophobie");
  add("Neurologisch / Psychisch - LANG", "Geräusche sind unerträglich", "Phonophobie");
  add("Neurologisch / Psychisch - LANG", "Lärm macht es schlimmer", "Phonophobie");
  add("Neurologisch / Psychisch - LANG", "Mir dreht sich alles", "Vertigo");
  add("Neurologisch / Psychisch - LANG", "Ich habe das Gefühl, alles schwankt", "Vertigo");
  add("Neurologisch / Psychisch - LANG", "Die Augen wackeln", "Nystagmus");
  add("Neurologisch / Psychisch - LANG", "Es fühlt sich taub an", "Hypästhesie");
  add("Neurologisch / Psychisch - LANG", "Ich bin kurz weggetreten", "Synkope");
  add("Neurologisch / Psychisch - LANG", "Ich bewege mich langsamer", "Bradykinese");
  add("Neurologisch / Psychisch - LANG", "Alles geht irgendwie träge", "Bradykinese");
  add("Neurologisch / Psychisch - LANG", "Ich bin morgens ganz steif", "Rigor");
  add("Neurologisch / Psychisch - LANG", "Meine Muskeln fühlen sich hart an", "Rigor");
  add("Neurologisch / Psychisch - LANG", "Auf einer Seite sehe ich nichts", "Hemianopsie");
  add("Neurologisch / Psychisch - LANG", "Mir fehlt ein Teil vom Sichtfeld", "Hemianopsie");
  add("Neurologisch / Psychisch - LANG", "Starke Müdigkeit", "Fatigue");
  add("Neurologisch / Psychisch - LANG", "Ich bin ständig erschöpft", "Fatigue");
  add("Neurologisch / Psychisch - LANG", "Ich habe keine Energie", "Fatigue");
  add("Neurologisch / Psychisch - LANG", "Schlafstörungen", "Insomnie");
  add("Neurologisch / Psychisch - LANG", "Ich kann nicht schlafen", "Insomnie");
  add("Neurologisch / Psychisch - LANG", "Ich bin dauerhaft gedrückt", "Dysthymie");
  add("Neurologisch / Psychisch - LANG", "Ich bin nie richtig gut drauf", "Dysthymie");
  add("Neurologisch / Psychisch - LANG", "Ich fühle mich sehr niedergeschlagen", "Depression");
  add("Neurologisch / Psychisch - LANG", "Ich habe keine Freude mehr", "Depression");
  add("Neurologisch / Psychisch - LANG", "Ich habe keine Lust auf Sex", "Frigidität");
  add("Neurologisch / Psychisch - LANG", "Sexuelles Interesse fehlt", "Frigidität");

  // HNO / Hals / Stimme
  add("HNO / Hals / Stimme - LANG", "Ohrgeräusche", "Tinnitus");
  add("HNO / Hals / Stimme - LANG", "Pfeifen im Ohr", "Tinnitus");
  add("HNO / Hals / Stimme - LANG", "Ich höre schlechter", "Hörminderung");
  add("HNO / Hals / Stimme - LANG", "heiser", "Dysphonie");
  add("HNO / Hals / Stimme - LANG", "Heisere Stimme", "Dysphonie");
  add("HNO / Hals / Stimme - LANG", "Meine Stimme ist weg", "Dysphonie");
  add("HNO / Hals / Stimme - LANG", "Kloßgefühl im Hals", "Globusgefühl");
  add("HNO / Hals / Stimme - LANG", "Kloß im Hals", "Globusgefühl");
  add("HNO / Hals / Stimme - LANG", "Als ob etwas im Hals steckt", "Globusgefühl");

  // Gastrointestinal
  add("Gastrointestinal - LANG", "Schluckbeschwerden", "Dysphagie");
  add("Gastrointestinal - LANG", "schlecht schlucken", "Dysphagie");
  add("Gastrointestinal - LANG", "Ich kann schlecht schlucken", "Dysphagie");
  add("Gastrointestinal - LANG", "Schmerzen beim Schlucken", "Odynophagie");
  add("Gastrointestinal - LANG", "beim Schlucken tut es weh", "Odynophagie");
  add("Gastrointestinal - LANG", "Mageninhalt kommt hoch", "Regurgitation");
  add("Gastrointestinal - LANG", "sauer hochkommen", "Regurgitation");
  add("Gastrointestinal - LANG", "Essen kommt wieder hoch", "Regurgitation");
  add("Gastrointestinal - LANG", "Säure steigt hoch", "Regurgitation");
  add("Gastrointestinal - LANG", "Sodbrennen", "Pyrosis");
  add("Gastrointestinal - LANG", "kein Appetit", "Inappetenz");
  add("Gastrointestinal - LANG", "Wenig Appetit", "Inappetenz");
  add("Gastrointestinal - LANG", "Ich esse kaum noch", "Inappetenz");
  add("Gastrointestinal - LANG", "Ich habe keinen Hunger", "Anorexie");
  add("Gastrointestinal - LANG", "Essen interessiert mich nicht", "Anorexie");
  add("Gastrointestinal - LANG", "Ich habe abgenommen", "Gewichtsverlust");
  add("Gastrointestinal - LANG", "Ich verliere Gewicht ohne Grund", "Gewichtsverlust");
  add("Gastrointestinal - LANG", "Die Kilos gehen runter ohne Grund", "Gewichtsverlust");
  add("Gastrointestinal - LANG", "Durchfall", "Diarrhö");
  add("Gastrointestinal - LANG", "Verstopfung", "Obstipation");
  add("Gastrointestinal - LANG", "Ich kann nicht auf Toilette", "Obstipation");
  add("Gastrointestinal - LANG", "Schwarzer Stuhl", "Meläna");
  add("Gastrointestinal - LANG", "Blut im Stuhl", "Hämatochezie");
  add("Gastrointestinal - LANG", "Krampfartige Schmerzen", "kolikartig");
  add("Gastrointestinal - LANG", "Nach dem Essen", "postprandial");

  // Allgemein / Vegetativ
  add("Allgemein / Vegetativ - LANG", "Ich hatte 38–39 Grad", "Pyrexie");
  add("Allgemein / Vegetativ - LANG", "Starkes Schwitzen", "Hyperhidrose");
  add("Allgemein / Vegetativ - LANG", "Ich schwitze extrem", "Hyperhidrose");
  add("Allgemein / Vegetativ - LANG", "Vermehrter Speichelfluss", "Hypersalivation");

  // Atemwege / Infekt
  add("Atemwege / Infekt - LANG", "Ich muss ständig husten", "Tussis");
  add("Atemwege / Infekt - LANG", "Trockener Husten", "unproduktiver Husten");
  add("Atemwege / Infekt - LANG", "Ohne Schleim", "unproduktiver Husten");
  add("Atemwege / Infekt - LANG", "Ich musste mich übergeben", "Emesis");
  add("Atemwege / Infekt - LANG", "Mir ist schlecht", "Nausea");
  add("Atemwege / Infekt - LANG", "Atemnot", "Dyspnoe");

  // Thorax / Kardiopulmonal
  add("Thorax / Kardiopulmonal - LANG", "Schmerzen hinter dem Brustbein", "retrosternaler Schmerz");
  add("Thorax / Kardiopulmonal - LANG", "Hinter dem Brustbein", "retrosternal");
  add("Thorax / Kardiopulmonal - LANG", "Brennt wie Feuer", "brennend");
  add("Thorax / Kardiopulmonal - LANG", "Zieht in den Hals / Arm", "ausstrahlend");
  add("Thorax / Kardiopulmonal - LANG", "Zieht in den Hals", "Ausstrahlung");
  add("Thorax / Kardiopulmonal - LANG", "Wird bei Bewegung schlimmer", "belastungsabhängig");
  add("Thorax / Kardiopulmonal - LANG", "Wird beim Aufstehen schlimmer", "lageabhängig");
  add("Thorax / Kardiopulmonal - LANG", "Wasser hilft", "Besserung durch Flüssigkeit");

  // Bewegungsapparat / Gefäße
  add("Bewegungsapparat / Gefäße - LANG", "Zittern", "Tremor");
  add("Bewegungsapparat / Gefäße - LANG", "Steifheit", ["Rigor", "Steifigkeit"]);
  add("Bewegungsapparat / Gefäße - LANG", "Schwellung", "Ödem");
  add("Bewegungsapparat / Gefäße - LANG", "Das Bein ist dick", "Ödem");
  add("Bewegungsapparat / Gefäße - LANG", "Das Bein fühlt sich heiß an", "Wärmegefühl");
  add("Bewegungsapparat / Gefäße - LANG", "Nachts wird es schlimmer", "nächtliche Verschlechterung");
  add("Bewegungsapparat / Gefäße - LANG", "Hochlegen hilft", "Besserung durch Hochlagerung");

  // ------------------------------------------------------------
  // 3) ZEIT, BEGINN, VERLAUF (Arztbrief-Form)
  // sauber getrennt nach: Dauer / Häufigkeit / Beginn / Verlauf / Persistenz
  // ------------------------------------------------------------
  
  // =======================
  // ZEIT – Dauer (bestehend)
  // =======================
  add("ZEIT - Dauer", "seit heute Morgen", "seit heute Morgen bestehend");
  add("ZEIT - Dauer", "seit gestern", "seit gestern bestehend");
  add("ZEIT - Dauer", "seit drei Tagen", "seit drei Tagen bestehend");
  add("ZEIT - Dauer", "seit 3 Tagen", "seit drei Tagen bestehend");
  add("ZEIT - Dauer", "seit einer Woche", "seit einer Woche bestehend");
  add("ZEIT - Dauer", "seit mehreren Wochen", "seit mehreren Wochen bestehend");
  add("ZEIT - Dauer", "seit Monaten", "seit Monaten bestehend");
  add("ZEIT - Dauer", "schon lange", "seit längerer Zeit bestehend");
  
  // ZEIT – Häufigkeit / Muster
  add("ZEIT - Häufigkeit", "immer wieder", "rezidivierend");
  add("ZEIT - Häufigkeit", "öfter", "rezidivierend");
  add("ZEIT - Häufigkeit", "kommt und geht", "rezidivierend");
  add("ZEIT - Häufigkeit", "schubweise", "schubweise verlaufend");
  
  // ZEIT – Beginn
  add("ZEIT - Beginn", "plötzlich", "plötzlich aufgetreten");
  add("ZEIT - Beginn", "auf einmal", "plötzlich aufgetreten");
  add("ZEIT - Beginn", "ganz plötzlich", "akut aufgetreten");
  add("ZEIT - Beginn", "akut", "akut aufgetreten");
  
  add("ZEIT - Beginn", "langsam", "schleichend begonnen");
  add("ZEIT - Beginn", "nach und nach", "schleichend begonnen");
  add("ZEIT - Beginn", "allmählich", "schleichend begonnen");
  
  // ZEIT – Verlauf (Dynamik)
  add("ZEIT - Verlauf", "schlimmer geworden", "zunehmend");
  add("ZEIT - Verlauf", "immer schlimmer", "progredient");
  add("ZEIT - Verlauf", "gleich geblieben", "unverändert");
  add("ZEIT - Verlauf", "besser geworden", "regredient");
  add("ZEIT - Verlauf", "schwankt", "fluktuierend");
  
  // ZEIT – Persistenz / Kontinuität
  add("ZEIT - Persistenz", "anhaltend", "anhaltend");
  add("ZEIT - Persistenz", "ständig", "persistierend");
  add("ZEIT - Persistenz", "durchgehend", "persistierend");
  add("ZEIT - Persistenz", "nicht unterbrochen", "persistierend");

  // -----------------------------------------
  // 4) SOZIAL / RISIKEN / NEGATIONEN
  // -----------------------------------------

  add("Sozial- / Funktionsanamnese", "Ich kann nicht richtig arbeiten", "beruflich beeinträchtigt");
  add("Sozial- / Funktionsanamnese", "Es stört mich im Alltag", "Einschränkung im Alltag");
  add("Sozial- / Funktionsanamnese", "Meine Arbeit ist sehr stressig", "hoher beruflicher Stress");
  add("Sozial- / Funktionsanamnese", "Mein Partner ist gestorben", "verwitwet");
  add("Sozial- / Funktionsanamnese", "Ich wohne mit meinem Sohn", "lebt mit Sohn");

  add("Risikofaktoren / Gewohnheiten", "Ich rauche", "Nikotinkonsum");
  add("Risikofaktoren / Gewohnheiten", "Viele Zigaretten am Tag", "Nikotinkonsum");
  add("Risikofaktoren / Gewohnheiten", "Jeden Tag ein Glas", "Alkoholkonsum");
  add("Risikofaktoren / Gewohnheiten", "Ab und zu", "gelegentlicher Konsum");
  add("Risikofaktoren / Gewohnheiten", "Ich nehme keine Drogen", "Drogenkonsum verneint");

  add("Negationen", "Nein, sonst nichts", "weitere Begleitsymptome wurden verneint");
  add("Negationen", "Ich habe kein Fieber", "Fieber wurde verneint");
  add("Negationen", "Keine Übelkeit", "Nausea wurde verneint");
  add("Negationen", "Ich musste nicht erbrechen", "Emesis wurde verneint");
  add("Negationen", "Keine Atemnot", "Dyspnoe wurde verneint");

  // -----------------------------------------
  // Export: RAW_ITEMS + ITEMS
  // -----------------------------------------

  window.RAW_ITEMS = items;

  window.ITEMS = window.RAW_ITEMS.map((row) => {
    const [deck, patient, correctRaw] = row.split("|").map((s) => s.trim());
    const correct = correctRaw.includes(";")
      ? correctRaw.split(";").map((s) => s.trim())
      : [correctRaw];
    return { deck, patient, correct };
  });
})();
