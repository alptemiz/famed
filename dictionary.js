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

  // -------------------------------
  // 1) SYMPTOME (Kurzformen, "NEU:")
  // -------------------------------

  // Atemwege / Infekt
  add("SYMPTOME - Atemwege / Infekt", "Husten", "Tussis");
  add("SYMPTOME - Atemwege / Infekt", "Atemnot", "Dyspnoe");
  add("SYMPTOME - Atemwege / Infekt", "Schnupfen", "Rhinorrhoe");
  add("SYMPTOME - Atemwege / Infekt", "Halsschmerzen", "Pharyngodynie");
  add("SYMPTOME - Atemwege / Infekt", "Heiserkeit", "Dysphonie");
  add("SYMPTOME - Atemwege / Infekt", "Fieber", "Pyrexie");
  add("SYMPTOME - Atemwege / Infekt", "Auswurf", "Sputum");
  add("SYMPTOME - Atemwege / Infekt", "blutiger Husten", "Hämoptyse");
  add("SYMPTOME - Atemwege / Infekt", "pfeifende Atmung", "Giemen");
  add("SYMPTOME - Atemwege / Infekt", "Atemstillstand", "Apnoe");

  // Neurologisch / Psychisch
  add("SYMPTOME - Neurologisch / Psychisch", "Kopfschmerzen", "Cephalgie");
  add("SYMPTOME - Neurologisch / Psychisch", "Schwindel", "Vertigo");
  add("SYMPTOME - Neurologisch / Psychisch", "Zittern", "Tremor");
  add("SYMPTOME - Neurologisch / Psychisch", "Ohnmacht", "Synkope");
  add("SYMPTOME - Neurologisch / Psychisch", "Beinahe-Ohnmacht", "Präsynkope");
  add("SYMPTOME - Neurologisch / Psychisch", "Kribbeln", "Parästhesie");
  add("SYMPTOME - Neurologisch / Psychisch", "Taubheitsgefühl", "Hypästhesie");
  add("SYMPTOME - Neurologisch / Psychisch", "Lähmung", "Parese");
  add("SYMPTOME - Neurologisch / Psychisch", "Krampfanfall", "zerebraler Anfall");
  add("SYMPTOME - Neurologisch / Psychisch", "Gedächtnisstörung", "Amnesie");
  add("SYMPTOME - Neurologisch / Psychisch", "Sprachstörung", "Aphasie");
  add("SYMPTOME - Neurologisch / Psychisch", "Gangunsicherheit", "Ataxie");
  add("SYMPTOME - Neurologisch / Psychisch", "Sehstörung", "Visusstörung");

  // Gastrointestinal
  add("SYMPTOME - Gastrointestinal", "Übelkeit", "Nausea");
  add("SYMPTOME - Gastrointestinal", "Erbrechen", "Emesis");
  add("SYMPTOME - Gastrointestinal", "Bluterbrechen", "Hämatemesis");
  add("SYMPTOME - Gastrointestinal", "Durchfall", "Diarrhoe");
  add("SYMPTOME - Gastrointestinal", "Verstopfung", "Obstipation");
  add("SYMPTOME - Gastrointestinal", "Schluckstörung", "Dysphagie");
  add("SYMPTOME - Gastrointestinal", "Bauchschmerzen", "Abdominalschmerzen");
  add("SYMPTOME - Gastrointestinal", "Sodbrennen", "Pyrosis");
  add("SYMPTOME - Gastrointestinal", "Blut im Stuhl", "Hämatochezie");
  add("SYMPTOME - Gastrointestinal", "schwarzer Stuhl", "Meläna");
  add("SYMPTOME - Gastrointestinal", "aufgeblähter Bauch", "Meteorismus");
  add("SYMPTOME - Gastrointestinal", "Aufstoßen", "Ruktus");

  // Thorax / Kardiopulmonal
  add("SYMPTOME - Thorax / Kardiopulmonal", "Brustschmerzen", "Thoraxschmerzen");
  add("SYMPTOME - Thorax / Kardiopulmonal", "Herzklopfen", "Palpitationen");
  add("SYMPTOME - Thorax / Kardiopulmonal", "Brustenge", "Angina-pectoris-Beschwerden");
  add("SYMPTOME - Thorax / Kardiopulmonal", "Herzrasen", "Tachykardie");
  add("SYMPTOME - Thorax / Kardiopulmonal", "langsamer Puls", "Bradykardie");
  add("SYMPTOME - Thorax / Kardiopulmonal", "unregelmäßiger Herzschlag", "Arrhythmie");
  add("SYMPTOME - Thorax / Kardiopulmonal", "Wassereinlagerung in den Beinen", "periphere Ödeme");

  // Bewegungsapparat / Gefäße
  add("SYMPTOME - Bewegungsapparat / Gefäße", "Rückenschmerzen", "Dorsalgie");
  add("SYMPTOME - Bewegungsapparat / Gefäße", "Kreuzschmerzen", "Lumbalgie");
  add("SYMPTOME - Bewegungsapparat / Gefäße", "Nackenschmerzen", "Cervikalgie");
  add("SYMPTOME - Bewegungsapparat / Gefäße", "Gelenkschmerzen", "Arthralgie");
  add("SYMPTOME - Bewegungsapparat / Gefäße", "Muskelschmerzen", "Myalgie");
  add("SYMPTOME - Bewegungsapparat / Gefäße", "steife Gelenke", "Gelenksteife");

  // Allgemein / Vegetativ
  add("SYMPTOME - Allgemein / Vegetativ", "Müdigkeit", "Fatigue");
  add("SYMPTOME - Allgemein / Vegetativ", "Appetitlosigkeit", "Inappetenz");
  add("SYMPTOME - Allgemein / Vegetativ", "Gewichtsabnahme", "Gewichtsverlust");
  add("SYMPTOME - Allgemein / Vegetativ", "Nachtschweiß", "nächtliche Hyperhidrose");
  add("SYMPTOME - Allgemein / Vegetativ", "Schlaflosigkeit", "Insomnie");
  add("SYMPTOME - Allgemein / Vegetativ", "Benommenheit", "Somnolenz");
  add("SYMPTOME - Allgemein / Vegetativ", "Bewusstseinsstörung", "Vigilanzstörung");

  // Urogenital
  add("SYMPTOME - Urogenital", "Schmerzen beim Wasserlassen", "Dysurie");
  add("SYMPTOME - Urogenital", "häufiges Wasserlassen", "Pollakisurie");
  add("SYMPTOME - Urogenital", "nächtliches Wasserlassen", "Nykturie");
  add("SYMPTOME - Urogenital", "Blut im Urin", "Hämaturie");

  // Haut
  add("SYMPTOME - Haut", "Hautausschlag", "Exanthem");
  add("SYMPTOME - Haut", "Juckreiz", "Pruritus");
  add("SYMPTOME - Haut", "blaue Flecken", "Hämatome");

  // -----------------------------------------
  // 2) PATIENTENSPRACHE (prüfungsnah, Sätze)
  // -----------------------------------------

  // Neurologisch / Psychisch
  add("Neurologisch / Psychisch", "Mein Kopf tut weh", "Cephalgie");
  add("Neurologisch / Psychisch", "Ich habe starke Kopfschmerzen", "Cephalgie");
  add("Neurologisch / Psychisch", "Pochend", "pulsierend");
  add("Neurologisch / Psychisch", "Auf der rechten Seite", "rechtsseitig");
  add("Neurologisch / Psychisch", "Kommt immer wieder", "rezidivierend");
  add("Neurologisch / Psychisch", "Licht tut mir weh", "Photophobie");
  add("Neurologisch / Psychisch", "Ich halte kein helles Licht aus", "Photophobie");
  add("Neurologisch / Psychisch", "Geräusche sind unerträglich", "Phonophobie");
  add("Neurologisch / Psychisch", "Lärm macht es schlimmer", "Phonophobie");
  add("Neurologisch / Psychisch", "Mir dreht sich alles", "Vertigo");
  add("Neurologisch / Psychisch", "Ich habe das Gefühl, alles schwankt", "Vertigo");
  add("Neurologisch / Psychisch", "Die Augen wackeln", "Nystagmus");
  add("Neurologisch / Psychisch", "Es fühlt sich taub an", "Parästhesie");
  add("Neurologisch / Psychisch", "Ich bin kurz weggetreten", "Synkope");
  add("Neurologisch / Psychisch", "Ich bewege mich langsamer", "Bradykinese");
  add("Neurologisch / Psychisch", "Alles geht irgendwie träge", "Bradykinese");
  add("Neurologisch / Psychisch", "Ich bin morgens ganz steif", "Rigor");
  add("Neurologisch / Psychisch", "Meine Muskeln fühlen sich hart an", "Rigor");
  add("Neurologisch / Psychisch", "Auf einer Seite sehe ich nichts", "Hemianopsie");
  add("Neurologisch / Psychisch", "Mir fehlt ein Teil vom Sichtfeld", "Hemianopsie");
  add("Neurologisch / Psychisch", "Starke Müdigkeit", "Fatigue");
  add("Neurologisch / Psychisch", "Ich bin ständig erschöpft", "Fatigue");
  add("Neurologisch / Psychisch", "Ich habe keine Energie", "Fatigue");
  add("Neurologisch / Psychisch", "Schlafstörungen", "Insomnie");
  add("Neurologisch / Psychisch", "Ich kann nicht schlafen", "Insomnie");
  add("Neurologisch / Psychisch", "Ich bin dauerhaft gedrückt", "Dysthymie");
  add("Neurologisch / Psychisch", "Ich bin nie richtig gut drauf", "Dysthymie");
  add("Neurologisch / Psychisch", "Ich fühle mich sehr niedergeschlagen", "Depression");
  add("Neurologisch / Psychisch", "Ich habe keine Freude mehr", "Depression");
  add("Neurologisch / Psychisch", "Ich habe keine Lust auf Sex", "Frigidität");
  add("Neurologisch / Psychisch", "Sexuelles Interesse fehlt", "Frigidität");

  // HNO / Hals / Stimme
  add("HNO / Hals / Stimme", "Ohrgeräusche", "Tinnitus");
  add("HNO / Hals / Stimme", "Pfeifen im Ohr", "Tinnitus");
  add("HNO / Hals / Stimme", "Ich höre schlechter", "Hörminderung");
  add("HNO / Hals / Stimme", "heiser", "Dysphonie");
  add("HNO / Hals / Stimme", "Heisere Stimme", "Dysphonie");
  add("HNO / Hals / Stimme", "Meine Stimme ist weg", "Dysphonie");
  add("HNO / Hals / Stimme", "Kloßgefühl im Hals", "Globusgefühl");
  add("HNO / Hals / Stimme", "Kloß im Hals", "Globusgefühl");
  add("HNO / Hals / Stimme", "Als ob etwas im Hals steckt", "Globusgefühl");

  // Gastrointestinal
  add("Gastrointestinal", "Schluckbeschwerden", "Dysphagie");
  add("Gastrointestinal", "schlecht schlucken", "Dysphagie");
  add("Gastrointestinal", "Ich kann schlecht schlucken", "Dysphagie");
  add("Gastrointestinal", "Schmerzen beim Schlucken", "Odynophagie");
  add("Gastrointestinal", "beim Schlucken tut es weh", "Odynophagie");
  add("Gastrointestinal", "Mageninhalt kommt hoch", "Regurgitation");
  add("Gastrointestinal", "sauer hochkommen", "Regurgitation");
  add("Gastrointestinal", "Essen kommt wieder hoch", "Regurgitation");
  add("Gastrointestinal", "Säure steigt hoch", "Regurgitation");
  add("Gastrointestinal", "Sodbrennen", "Pyrosis");
  add("Gastrointestinal", "kein Appetit", "Inappetenz");
  add("Gastrointestinal", "Wenig Appetit", "Inappetenz");
  add("Gastrointestinal", "Ich esse kaum noch", "Inappetenz");
  add("Gastrointestinal", "Ich habe keinen Hunger", "Anorexie");
  add("Gastrointestinal", "Essen interessiert mich nicht", "Anorexie");
  add("Gastrointestinal", "Ich habe abgenommen", "Gewichtsverlust");
  add("Gastrointestinal", "Ich verliere Gewicht ohne Grund", "Gewichtsverlust");
  add("Gastrointestinal", "Die Kilos gehen runter ohne Grund", "Gewichtsverlust");
  add("Gastrointestinal", "Durchfall", "Diarrhö");
  add("Gastrointestinal", "Verstopfung", "Obstipation");
  add("Gastrointestinal", "Ich kann nicht auf Toilette", "Obstipation");
  add("Gastrointestinal", "Schwarzer Stuhl", "Meläna");
  add("Gastrointestinal", "Blut im Stuhl", "Hämatochezie");
  add("Gastrointestinal", "Bauchschmerzen", "Abdominalschmerzen");
  add("Gastrointestinal", "Krampfartige Schmerzen", "kolikartig");
  add("Gastrointestinal", "Nach dem Essen", "postprandial");

  // Allgemein / Vegetativ
  add("Allgemein / Vegetativ", "Ich hatte 38–39 Grad", "Pyrexie");
  add("Allgemein / Vegetativ", "Starkes Schwitzen", "Hyperhidrose");
  add("Allgemein / Vegetativ", "Ich schwitze extrem", "Hyperhidrose");
  add("Allgemein / Vegetativ", "Vermehrter Speichelfluss", "Hypersalivation");

  // Atemwege / Infekt
  add("Atemwege / Infekt", "Ich muss ständig husten", "Tussis");
  add("Atemwege / Infekt", "Trockener Husten", "unproduktiver Husten");
  add("Atemwege / Infekt", "Ohne Schleim", "unproduktiver Husten");
  add("Atemwege / Infekt", "Ich musste mich übergeben", "Emesis");
  add("Atemwege / Infekt", "Mir ist schlecht", "Nausea");
  add("Atemwege / Infekt", "Atemnot", "Dyspnoe");

  // Thorax / Kardiopulmonal
  add("Thorax / Kardiopulmonal", "Schmerzen hinter dem Brustbein", "retrosternaler Schmerz");
  add("Thorax / Kardiopulmonal", "Brustschmerzen", "thorakale Schmerzen");
  add("Thorax / Kardiopulmonal", "Hinter dem Brustbein", "retrosternal");
  add("Thorax / Kardiopulmonal", "Brennt wie Feuer", "brennend");
  add("Thorax / Kardiopulmonal", "Zieht in den Hals / Arm", "ausstrahlend");
  add("Thorax / Kardiopulmonal", "Zieht in den Hals", "Ausstrahlung");
  add("Thorax / Kardiopulmonal", "Wird bei Bewegung schlimmer", "belastungsabhängig");
  add("Thorax / Kardiopulmonal", "Wird beim Aufstehen schlimmer", "lageabhängig");
  add("Thorax / Kardiopulmonal", "Wasser hilft", "Besserung durch Flüssigkeit");

  // Bewegungsapparat / Gefäße
  add("Bewegungsapparat / Gefäße", "Zittern", "Tremor");
  add("Bewegungsapparat / Gefäße", "Steifheit", ["Rigor", "Steifigkeit"]);
  add("Bewegungsapparat / Gefäße", "Schwellung", "Ödem");
  add("Bewegungsapparat / Gefäße", "Das Bein ist dick", "Ödem");
  add("Bewegungsapparat / Gefäße", "Das Bein fühlt sich heiß an", "Wärmegefühl");
  add("Bewegungsapparat / Gefäße", "Nachts wird es schlimmer", "nächtliche Verschlechterung");
  add("Bewegungsapparat / Gefäße", "Hochlegen hilft", "Besserung durch Hochlagerung");

  // -----------------------------------------
  // 3) ZEIT, BEGINN, VERLAUF (Arztbrief-Form)
  // -----------------------------------------

  // Zeitangaben -> konsequent "bestehend"
  add("ZEIT - Zeitangaben (Arztbrief)", "seit heute Morgen", "seit heute Morgen bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "seit gestern", "seit gestern bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "seit 3 Tagen", "seit drei Tagen bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "seit einer Woche", "seit einer Woche bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "seit mehreren Wochen", "seit mehreren Wochen bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "seit Monaten", "seit Monaten bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "schon lange", "seit längerer Zeit bestehend");
  add("ZEIT - Zeitangaben (Arztbrief)", "immer wieder", "rezidivierend");
  add("ZEIT - Zeitangaben (Arztbrief)", "öfter", "rezidivierend");

  // Beginn
  add("ZEIT - Beginn (Arztbrief)", "plötzlich", "plötzlich aufgetreten");
  add("ZEIT - Beginn (Arztbrief)", "auf einmal", "plötzlich aufgetreten");
  add("ZEIT - Beginn (Arztbrief)", "ganz plötzlich", "akut aufgetreten");
  add("ZEIT - Beginn (Arztbrief)", "langsam", "schleichend");
  add("ZEIT - Beginn (Arztbrief)", "nach und nach", "schleichend");
  add("ZEIT - Beginn (Arztbrief)", "allmählich", "schleichend");

  // Verlauf
  add("ZEIT - Verlauf (Arztbrief)", "schlimmer geworden", "zunehmend");
  add("ZEIT - Verlauf (Arztbrief)", "immer schlimmer", "progredient");
  add("ZEIT - Verlauf (Arztbrief)", "gleich geblieben", "unverändert");
  add("ZEIT - Verlauf (Arztbrief)", "besser geworden", "regredient");
  add("ZEIT - Verlauf (Arztbrief)", "schwankt", "fluktuierend");
  add("ZEIT - Verlauf (Arztbrief)", "kommt und geht", "rezidivierend");

  // -----------------------------------------
  // 4) SOZIAL / RISIKEN / NEGATIONEN
  // -----------------------------------------

  add("Sozial- / Funktionsanamnese", "Ich kann nicht richtig arbeiten", "beruflich beeinträchtigt");
  add("Sozial- / Funktionsanamnese", "Es stört mich im Alltag", "Einschränkung im Alltag");
  add("Sozial- / Funktionsanamnese", "Meine Arbeit ist sehr stressig", "hoher beruflicher Stress");
  add("Sozial- / Funktionsanamnese", "Mein Partner ist gestorben", "verwitwet");
  add("Sozial- / Funktionsanamnese", "Ich wohne mit meinem Sohn", "lebt mit Sohn");

  add("Risikofaktoren / Gewohnheiten", "Ich rauche", "Nikotinabusus");
  add("Risikofaktoren / Gewohnheiten", "Viele Zigaretten am Tag", "Nikotinabusus");
  add("Risikofaktoren / Gewohnheiten", "Jeden Tag ein Glas", "Alkohol täglich");
  add("Risikofaktoren / Gewohnheiten", "Ab und zu", "gelegentlicher Konsum");
  add("Risikofaktoren / Gewohnheiten", "Ich nehme keine Drogen", "Drogenkonsum verneint");

  add("Negationen (Arztbrief)", "Nein, sonst nichts", "weitere Begleitsymptome wurden verneint");
  add("Negationen (Arztbrief)", "Ich habe kein Fieber", "Fieber wurde verneint");
  add("Negationen (Arztbrief)", "Keine Übelkeit", "Nausea wurde verneint");
  add("Negationen (Arztbrief)", "Ich musste nicht erbrechen", "Emesis wurde verneint");
  add("Negationen (Arztbrief)", "Keine Atemnot", "Dyspnoe wurde verneint");

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
