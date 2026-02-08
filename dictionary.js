// dictionary.js
// Complete, cleaned, and reorganised master list for FSP training
// Patient language → expected Fachsprache answer

window.ITEMS = [

  /* =========================================================
     🧠 NEUROLOGISCH / PSYCHISCH
     ========================================================= */

  // Kopfschmerz / Migräne-typisch
  { patient: "Kopfschmerzen", correct: "Cephalgie" },
  { patient: "Mein Kopf tut weh", correct: "Cephalgie" },
  { patient: "Ich habe starke Kopfschmerzen", correct: "Cephalgie" },
  { patient: "Pochend", correct: "pulsierend" },
  { patient: "Auf der rechten Seite", correct: "rechtsseitig" },
  { patient: "Kommt immer wieder", correct: "rezidivierend" },

  // Licht / Lärm
  { patient: "Licht tut mir weh", correct: "Photophobie" },
  { patient: "Ich halte kein helles Licht aus", correct: "Photophobie" },
  { patient: "Geräusche sind unerträglich", correct: "Phonophobie" },
  { patient: "Lärm macht es schlimmer", correct: "Phonophobie" },

  // Schwindel / Augen
  { patient: "Schwindel", correct: "Vertigo" },
  { patient: "Mir dreht sich alles", correct: "Vertigo" },
  { patient: "Ich habe das Gefühl, alles schwankt", correct: "Vertigo" },
  { patient: "Die Augen wackeln", correct: "Nystagmus" },

  // Sensibilität / Bewusstsein
  { patient: "Kribbeln", correct: "Parästhesie" },
  { patient: "Es fühlt sich taub an", correct: "Parästhesie" },
  { patient: "Ohnmacht", correct: "Synkope" },
  { patient: "Ich bin kurz weggetreten", correct: "Synkope" },

  // Parkinson-typisch
  { patient: "Ich bewege mich langsamer", correct: "Bradykinese" },
  { patient: "Alles geht irgendwie träge", correct: "Bradykinese" },
  { patient: "Ich bin morgens ganz steif", correct: "Rigor" },
  { patient: "Meine Muskeln fühlen sich hart an", correct: "Rigor" },

  // Sehstörung
  { patient: "Auf einer Seite sehe ich nichts", correct: "Hemianopsie" },
  { patient: "Mir fehlt ein Teil vom Sichtfeld", correct: "Hemianopsie" },

  // Stimmung / Schlaf
  { patient: "Starke Müdigkeit", correct: "Fatigue" },
  { patient: "Ich bin ständig erschöpft", correct: "Fatigue" },
  { patient: "Ich habe keine Energie", correct: "Fatigue" },
  { patient: "Schlafstörungen", correct: "Insomnie" },
  { patient: "Ich kann nicht schlafen", correct: "Insomnie" },

  { patient: "Ich bin dauerhaft gedrückt", correct: "Dysthymie" },
  { patient: "Ich bin nie richtig gut drauf", correct: "Dysthymie" },
  { patient: "Ich fühle mich sehr niedergeschlagen", correct: "Depression" },
  { patient: "Ich habe keine Freude mehr", correct: "Depression" },

  // Sexualanamnese
  { patient: "Ich habe keine Lust auf Sex", correct: "Frigidität" },
  { patient: "Sexuelles Interesse fehlt", correct: "Frigidität" },

  /* =========================================================
     👂 HNO / HALS / STIMME
     ========================================================= */

  { patient: "Ohrgeräusche", correct: "Tinnitus" },
  { patient: "Pfeifen im Ohr", correct: "Tinnitus" },
  { patient: "Ich höre schlechter", correct: "Hörminderung" },

  { patient: "heiser", correct: "Dysphonie" },
  { patient: "Heisere Stimme", correct: "Dysphonie" },
  { patient: "Meine Stimme ist weg", correct: "Dysphonie" },

  { patient: "Kloßgefühl im Hals", correct: "Globusgefühl" },
  { patient: "Kloß im Hals", correct: "Globusgefühl" },
  { patient: "Als ob etwas im Hals steckt", correct: "Globusgefühl" },

  /* =========================================================
     🍽️ GASTROINTESTINAL
     ========================================================= */

  // Schlucken / Reflux
  { patient: "Schluckstörung", correct: "Dysphagie" },
  { patient: "Schluckbeschwerden", correct: "Dysphagie" },
  { patient: "schlecht schlucken", correct: "Dysphagie" },
  { patient: "Ich kann schlecht schlucken", correct: "Dysphagie" },

  { patient: "Schmerzen beim Schlucken", correct: "Odynophagie" },
  { patient: "beim Schlucken tut es weh", correct: "Odynophagie" },

  { patient: "Mageninhalt kommt hoch / Rückfluss", correct: "Regurgitation" },
  { patient: "sauer hochkommen", correct: "Regurgitation" },
  { patient: "Essen kommt wieder hoch", correct: "Regurgitation" },
  { patient: "Säure steigt hoch", correct: "Regurgitation" },

  { patient: "Sodbrennen", correct: "Pyrosis" },

  // Appetit / Gewicht
  { patient: "kein Appetit", correct: "Inappetenz" },
  { patient: "Wenig Appetit", correct: "Inappetenz" },
  { patient: "Ich esse kaum noch", correct: "Inappetenz" },

  { patient: "Ich habe keinen Hunger", correct: "Anorexie" },
  { patient: "Essen interessiert mich nicht", correct: "Anorexie" },

  { patient: "Ich habe abgenommen", correct: "Gewichtsverlust" },
  { patient: "Ich verliere Gewicht ohne Grund", correct: "Gewichtsverlust" },
  { patient: "Die Kilos gehen runter ohne Grund", correct: "Gewichtsverlust" },

  // Darm
  { patient: "Durchfall", correct: "Diarrhö" },
  { patient: "Verstopfung", correct: "Obstipation" },
  { patient: "Ich kann nicht auf Toilette", correct: "Obstipation" },

  { patient: "Schwarzer Stuhl", correct: "Meläna" },
  { patient: "Blut im Stuhl", correct: "Hämatochezie" },

  { patient: "Bauchschmerzen", correct: "Abdominalschmerzen" },
  { patient: "Krampfartige Schmerzen", correct: "kolikartig" },

  { patient: "Nach dem Essen", correct: "postprandial" },

  /* =========================================================
     🌡️ ALLGEMEIN / VEGETATIV
     ========================================================= */

  { patient: "Fieber", correct: "Pyrexie" },
  { patient: "Ich hatte 38–39 Grad", correct: "Pyrexie" },

  { patient: "Starkes Schwitzen", correct: "Hyperhidrose" },
  { patient: "Ich schwitze extrem", correct: "Hyperhidrose" },

  { patient: "Vermehrter Speichelfluss", correct: "Hypersalivation" },

  /* =========================================================
     🫁 ATEMWEGE / INFEKT
     ========================================================= */

  { patient: "Husten", correct: "Tussis" },
  { patient: "Ich muss ständig husten", correct: "Tussis" },

  { patient: "Trockener Husten", correct: "unproduktiver Husten" },
  { patient: "Ohne Schleim", correct: "unproduktiver Husten" },

  { patient: "Erbrechen", correct: "Emesis" },
  { patient: "Ich musste mich übergeben", correct: "Emesis" },

  { patient: "Übelkeit", correct: "Nausea" },
  { patient: "Mir ist schlecht", correct: "Nausea" },

  { patient: "Atemnot", correct: "Dyspnoe" },

  /* =========================================================
     ❤️ THORAX / KARDIOPULMONAL
     ========================================================= */

  { patient: "Schmerzen hinter dem Brustbein", correct: "retrosternaler Schmerz" },
  { patient: "Brustschmerzen", correct: "thorakale Schmerzen" },
  { patient: "Hinter dem Brustbein", correct: "retrosternal" },
  { patient: "Brennt wie Feuer", correct: "brennend" },
  { patient: "Zieht in den Hals / Arm", correct: "ausstrahlend" },
  { patient: "Zieht in den Hals", correct: "Ausstrahlung" },
  { patient: "Wird bei Bewegung schlimmer", correct: "belastungsabhängig" },
  { patient: "Wird beim Aufstehen schlimmer", correct: "lageabhängig" },
  { patient: "Wasser hilft", correct: "Besserung durch Flüssigkeit" },

  /* =========================================================
     🦵 BEWEGUNGSAPPARAT / GEFÄSSE
     ========================================================= */

  { patient: "Zittern", correct: "Tremor" },
  { patient: "Steifheit", correct: "Rigor" },
  { patient: "Schwellung", correct: "Ödem" },
  { patient: "Das Bein ist dick", correct: "Ödem" },
  { patient: "Das Bein fühlt sich heiß an", correct: "Wärmegefühl" },
  { patient: "Nachts wird es schlimmer", correct: "nächtliche Verschlechterung" },
  { patient: "Hochlegen hilft", correct: "Besserung durch Hochlagerung" },

  /* =========================================================
     ⏳ VERLAUF / ZEIT
     ========================================================= */

  { patient: "Wird immer schlimmer", correct: "progredient" },
  { patient: "Wird langsam immer schlimmer", correct: "langsam progredient" },
  { patient: "Plötzlich", correct: "akut" },
  { patient: "Zum ersten Mal", correct: "erstmalig" },
  { patient: "Seit gestern", correct: "seit gestern" },
  { patient: "Schon seit Wochen", correct: "seit Wochen" },
  { patient: "Schon lange", correct: "seit mehreren Monaten" },
  { patient: "Es nimmt zu", correct: "zunehmend" },
  { patient: "Es wird besser", correct: "Besserung" },
  { patient: "Es wird schlimmer", correct: "Verschlechterung" },

  /* =========================================================
     👨‍👩‍👧 SOZIAL- / FUNKTIONSANAMNESE
     ========================================================= */

  { patient: "Ich kann nicht richtig arbeiten", correct: "beruflich beeinträchtigt" },
  { patient: "Es stört mich im Alltag", correct: "Einschränkung im Alltag" },
  { patient: "Meine Arbeit ist sehr stressig", correct: "hoher beruflicher Stress" },
  { patient: "Mein Partner ist gestorben", correct: "verwitwet" },
  { patient: "Ich wohne mit meinem Sohn", correct: "lebt mit Sohn" },

  /* =========================================================
     ⚠️ RISIKOFAKTOREN / GEWOHNHEITEN
     ========================================================= */

  { patient: "Ich rauche", correct: "Nikotinabusus" },
  { patient: "Viele Zigaretten am Tag", correct: "Nikotinabusus" },
  { patient: "Jeden Tag ein Glas", correct: "Alkohol täglich" },
  { patient: "Ab und zu", correct: "gelegentlicher Konsum" },
  { patient: "Ich nehme keine Drogen", correct: "Drogenkonsum verneint" }

];
