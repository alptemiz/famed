// dictionary.js
// compact 3-column format: deck | patient | correct

window.RAW_ITEMS = [
  // Neurologisch / Psychisch
  "Neurologisch / Psychisch|Kopfschmerzen|Cephalgie",
  "Neurologisch / Psychisch|Mein Kopf tut weh|Cephalgie",
  "Neurologisch / Psychisch|Ich habe starke Kopfschmerzen|Cephalgie",
  "Neurologisch / Psychisch|Pochend|pulsierend",
  "Neurologisch / Psychisch|Auf der rechten Seite|rechtsseitig",
  "Neurologisch / Psychisch|Kommt immer wieder|rezidivierend",
  "Neurologisch / Psychisch|Licht tut mir weh|Photophobie",
  "Neurologisch / Psychisch|Ich halte kein helles Licht aus|Photophobie",
  "Neurologisch / Psychisch|Geräusche sind unerträglich|Phonophobie",
  "Neurologisch / Psychisch|Lärm macht es schlimmer|Phonophobie",
  "Neurologisch / Psychisch|Schwindel|Schwindel",
  "Neurologisch / Psychisch|Mir dreht sich alles|Vertigo",
  "Neurologisch / Psychisch|Ich habe das Gefühl, alles schwankt|Vertigo",
  "Neurologisch / Psychisch|Die Augen wackeln|Nystagmus",
  "Neurologisch / Psychisch|Kribbeln|Parästhesie",
  "Neurologisch / Psychisch|Es fühlt sich taub an|Parästhesie",
  "Neurologisch / Psychisch|Ohnmacht|Synkope",
  "Neurologisch / Psychisch|Ich bin kurz weggetreten|Synkope",
  "Neurologisch / Psychisch|Ich bewege mich langsamer|Bradykinese",
  "Neurologisch / Psychisch|Alles geht irgendwie träge|Bradykinese",
  "Neurologisch / Psychisch|Ich bin morgens ganz steif|Rigor",
  "Neurologisch / Psychisch|Meine Muskeln fühlen sich hart an|Rigor",
  "Neurologisch / Psychisch|Auf einer Seite sehe ich nichts|Hemianopsie",
  "Neurologisch / Psychisch|Mir fehlt ein Teil vom Sichtfeld|Hemianopsie",
  "Neurologisch / Psychisch|Starke Müdigkeit|Fatigue",
  "Neurologisch / Psychisch|Ich bin ständig erschöpft|Fatigue",
  "Neurologisch / Psychisch|Ich habe keine Energie|Fatigue",
  "Neurologisch / Psychisch|Schlafstörungen|Insomnie",
  "Neurologisch / Psychisch|Ich kann nicht schlafen|Insomnie",
  "Neurologisch / Psychisch|Ich bin dauerhaft gedrückt|Dysthymie",
  "Neurologisch / Psychisch|Ich bin nie richtig gut drauf|Dysthymie",
  "Neurologisch / Psychisch|Ich fühle mich sehr niedergeschlagen|Depression",
  "Neurologisch / Psychisch|Ich habe keine Freude mehr|Depression",
  "Neurologisch / Psychisch|Ich habe keine Lust auf Sex|Frigidität",
  "Neurologisch / Psychisch|Sexuelles Interesse fehlt|Frigidität",

  // HNO / Hals / Stimme
  "HNO / Hals / Stimme|Ohrgeräusche|Tinnitus",
  "HNO / Hals / Stimme|Pfeifen im Ohr|Tinnitus",
  "HNO / Hals / Stimme|Ich höre schlechter|Hörminderung",
  "HNO / Hals / Stimme|heiser|Dysphonie",
  "HNO / Hals / Stimme|Heisere Stimme|Dysphonie",
  "HNO / Hals / Stimme|Meine Stimme ist weg|Dysphonie",
  "HNO / Hals / Stimme|Kloßgefühl im Hals|Globusgefühl",
  "HNO / Hals / Stimme|Kloß im Hals|Globusgefühl",
  "HNO / Hals / Stimme|Als ob etwas im Hals steckt|Globusgefühl",

  // Gastrointestinal
  "Gastrointestinal|Schluckstörung|Dysphagie",
  "Gastrointestinal|Schluckbeschwerden|Dysphagie",
  "Gastrointestinal|schlecht schlucken|Dysphagie",
  "Gastrointestinal|Ich kann schlecht schlucken|Dysphagie",
  "Gastrointestinal|Schmerzen beim Schlucken|Odynophagie",
  "Gastrointestinal|beim Schlucken tut es weh|Odynophagie",
  "Gastrointestinal|Mageninhalt kommt hoch|Regurgitation",
  "Gastrointestinal|sauer hochkommen|Regurgitation",
  "Gastrointestinal|Essen kommt wieder hoch|Regurgitation",
  "Gastrointestinal|Säure steigt hoch|Regurgitation",
  "Gastrointestinal|Sodbrennen|Pyrosis",
  "Gastrointestinal|kein Appetit|Inappetenz",
  "Gastrointestinal|Wenig Appetit|Inappetenz",
  "Gastrointestinal|Ich esse kaum noch|Inappetenz",
  "Gastrointestinal|Ich habe keinen Hunger|Anorexie",
  "Gastrointestinal|Essen interessiert mich nicht|Anorexie",
  "Gastrointestinal|Ich habe abgenommen|Gewichtsverlust",
  "Gastrointestinal|Ich verliere Gewicht ohne Grund|Gewichtsverlust",
  "Gastrointestinal|Die Kilos gehen runter ohne Grund|Gewichtsverlust",
  "Gastrointestinal|Durchfall|Diarrhö",
  "Gastrointestinal|Verstopfung|Obstipation",
  "Gastrointestinal|Ich kann nicht auf Toilette|Obstipation",
  "Gastrointestinal|Schwarzer Stuhl|Meläna",
  "Gastrointestinal|Blut im Stuhl|Hämatochezie",
  "Gastrointestinal|Bauchschmerzen|Abdominalschmerzen",
  "Gastrointestinal|Krampfartige Schmerzen|kolikartig",
  "Gastrointestinal|Nach dem Essen|postprandial",

  // Allgemein / Vegetativ
  "Allgemein / Vegetativ|Fieber|Pyrexie",
  "Allgemein / Vegetativ|Ich hatte 38–39 Grad|Pyrexie",
  "Allgemein / Vegetativ|Starkes Schwitzen|Hyperhidrose",
  "Allgemein / Vegetativ|Ich schwitze extrem|Hyperhidrose",
  "Allgemein / Vegetativ|Vermehrter Speichelfluss|Hypersalivation",

  // Atemwege / Infekt
  "Atemwege / Infekt|Husten|Tussis",
  "Atemwege / Infekt|Ich muss ständig husten|Tussis",
  "Atemwege / Infekt|Trockener Husten|unproduktiver Husten",
  "Atemwege / Infekt|Ohne Schleim|unproduktiver Husten",
  "Atemwege / Infekt|Erbrechen|Emesis",
  "Atemwege / Infekt|Ich musste mich übergeben|Emesis",
  "Atemwege / Infekt|Übelkeit|Nausea",
  "Atemwege / Infekt|Mir ist schlecht|Nausea",
  "Atemwege / Infekt|Atemnot|Dyspnoe",

  // Thorax / Kardiopulmonal
  "Thorax / Kardiopulmonal|Schmerzen hinter dem Brustbein|retrosternaler Schmerz",
  "Thorax / Kardiopulmonal|Brustschmerzen|thorakale Schmerzen",
  "Thorax / Kardiopulmonal|Hinter dem Brustbein|retrosternal",
  "Thorax / Kardiopulmonal|Brennt wie Feuer|brennend",
  "Thorax / Kardiopulmonal|Zieht in den Hals / Arm|ausstrahlend",
  "Thorax / Kardiopulmonal|Zieht in den Hals|Ausstrahlung",
  "Thorax / Kardiopulmonal|Wird bei Bewegung schlimmer|belastungsabhängig",
  "Thorax / Kardiopulmonal|Wird beim Aufstehen schlimmer|lageabhängig",
  "Thorax / Kardiopulmonal|Wasser hilft|Besserung durch Flüssigkeit",

  // Bewegungsapparat / Gefäße
  "Bewegungsapparat / Gefaesse|Zittern|Tremor",
  "Bewegungsapparat / Gefaesse|Steifheit|Rigor;Steifigkeit",
  "Bewegungsapparat / Gefaesse|Schwellung|Ödem",
  "Bewegungsapparat / Gefaesse|Das Bein ist dick|Ödem",
  "Bewegungsapparat / Gefaesse|Das Bein fühlt sich heiß an|Wärmegefühl",
  "Bewegungsapparat / Gefaesse|Nachts wird es schlimmer|nächtliche Verschlechterung",
  "Bewegungsapparat / Gefaesse|Hochlegen hilft|Besserung durch Hochlagerung",

  // Verlauf / Zeit
  "Verlauf / Zeit|Wird immer schlimmer|progredient",
  "Verlauf / Zeit|Wird langsam immer schlimmer|langsam progredient",
  "Verlauf / Zeit|Plötzlich|akut",
  "Verlauf / Zeit|Zum ersten Mal|erstmalig",
  "Verlauf / Zeit|Seit gestern|seit gestern",
  "Verlauf / Zeit|Schon seit Wochen|seit Wochen",
  "Verlauf / Zeit|Schon lange|seit mehreren Monaten",
  "Verlauf / Zeit|Es nimmt zu|zunehmend",
  "Verlauf / Zeit|Es wird besser|Besserung",
  "Verlauf / Zeit|Es wird schlimmer|Verschlechterung",

  // Sozial / Funktion
  "Sozial- / Funktionsanamnese|Ich kann nicht richtig arbeiten|beruflich beeinträchtigt",
  "Sozial- / Funktionsanamnese|Es stört mich im Alltag|Einschränkung im Alltag",
  "Sozial- / Funktionsanamnese|Meine Arbeit ist sehr stressig|hoher beruflicher Stress",
  "Sozial- / Funktionsanamnese|Mein Partner ist gestorben|verwitwet",
  "Sozial- / Funktionsanamnese|Ich wohne mit meinem Sohn|lebt mit Sohn",

  // Risiken / Gewohnheiten
  "Risikofaktoren / Gewohnheiten|Ich rauche|Nikotinabusus",
  "Risikofaktoren / Gewohnheiten|Viele Zigaretten am Tag|Nikotinabusus",
  "Risikofaktoren / Gewohnheiten|Jeden Tag ein Glas|Alkohol täglich",
  "Risikofaktoren / Gewohnheiten|Ab und zu|gelegentlicher Konsum",
  "Risikofaktoren / Gewohnheiten|Ich nehme keine Drogen|Drogenkonsum verneint",

  // Negationen

  "Allgemein / Negation|Nein, sonst nichts|weitere Begleitsymptome wurden verneint",
  "Allgemein / Negation|Ich habe kein Fieber|Fieber wurde verneint",
  "Allgemein / Negation|Keine Übelkeit|Nausea wurde verneint",
  "Allgemein / Negation|Ich musste nicht erbrechen|Emesis wurde verneint",
  "Allgemein / Negation|Keine Atemnot|Dyspnoe wurde verneint",
];

window.ITEMS = window.RAW_ITEMS.map(row => {
  const [deck, patient, correctRaw] = row.split("|").map(s => s.trim());

  const correct = correctRaw.includes(";")
    ? correctRaw.split(";").map(s => s.trim())
    : [correctRaw];

  return { deck, patient, correct };
});
